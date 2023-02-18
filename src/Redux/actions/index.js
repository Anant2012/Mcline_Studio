import { AxiosInstance } from "../../AxiosInstance/AxiosInstance";

export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_OUT = "LOG_OUT";

export function handleLogIn(userCred) {
  return function (dispatch) {
    AxiosInstance.post("/api/user/signin", userCred)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user.username));
        localStorage.setItem("userId", JSON.stringify(res.data.user._id));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("role", JSON.stringify(res.data.user.role));
        localStorage.setItem("status", JSON.stringify(res.data.user.status));
        dispatch(logInSuccess(res.data));
      })
      .catch((err) => alert(err.response.data.msg));
  };
}

export function logInSuccess(userData) {
  return {
    type: "LOG_IN_SUCCESS",
    userData,
  };
}

export function logOut() {
  alert("Log Out Successfully")
  localStorage.setItem("user", null);
  localStorage.setItem("userId", null);
  localStorage.setItem("token", null);
  localStorage.setItem("role", null);
  localStorage.setItem("status", null);
  return {
    type: LOG_OUT,
  };
}
