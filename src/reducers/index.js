import { LOG_IN_SUCCESS, LOG_OUT } from "../actions";

const initialAuthState = {
  user: JSON.parse(localStorage.getItem("user")),
  userId: JSON.parse(localStorage.getItem("userId")),
  isLoggedIn: !!JSON.parse(localStorage.getItem("userId")),
  token: JSON.parse(localStorage.getItem("token")),
  role: JSON.parse(localStorage.getItem("role")),
  status: JSON.parse(localStorage.getItem("status")),
};

export default function AuthReducer(state = initialAuthState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        user: action.userData.user.username,
        userId: action.userData.user._id,
        isLoggedIn: true,
        token: action.userData.token,
        role: action.userData.user.role,
        status: action.userData.user.status,
      };
    case LOG_OUT:
      return {
        user: null,
        userId: null,
        isLoggedIn: false,
        token: null,
        role: [],
        status: "Inactive",
      };
    default:
      return state;
  }
}
