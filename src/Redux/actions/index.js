import { AxiosInstance } from "../../AxiosInstance/AxiosInstance";

export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_OUT = "LOG_OUT";

export function handleLogIn({ user }, userRole) {
  return function (dispatch) {
    localStorage.setItem("user", JSON.stringify(user.username));
    localStorage.setItem("userId", JSON.stringify(user._id));
    localStorage.setItem("role", JSON.stringify(userRole));
    localStorage.setItem("status", JSON.stringify(user.status));
    localStorage.setItem("totalLeaves", JSON.stringify(user.totalLeaves));
    dispatch(logInSuccess(user, userRole));
  };
}

export function logInSuccess(user, userRole) {
  return {
    type: "LOG_IN_SUCCESS",
    user,
    userRole,
  };
}

export function logOut() {
  alert("Log Out Successfully");
  localStorage.setItem("user", null);
  localStorage.setItem("userId", null);
  localStorage.setItem("role", null);
  localStorage.setItem("status", null);
  localStorage.setItem("totalLeaves", null);
  return {
    type: LOG_OUT,
  };
}