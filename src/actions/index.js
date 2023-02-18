import { AxiosInstance } from "../AxiosInstance/AxiosInstance";

export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_OUT = "LOG_OUT";

export function handleLogIn(userCred) {
  return function (dispatch) {
    AxiosInstance.post("/api/user/signin", userCred)
      .then((res) => {
        dispatch(logInSuccess(res.data));
      })
      .catch((err) => console.log(err));
  };
}

export function logInSuccess(userData) {
  return {
    type: "LOG_IN_SUCCESS",
    userData,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}
