import { LOG_IN_SUCCESS, LOG_OUT } from "../actions";

const initialAuthState = {
  user: null,
  userId: null,
  isLoggedIn: false,
  token: null,
};

export default function AuthReducer(state = initialAuthState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        user: action.userData.user.username,
        userId: action.userData.user._id,
        isLoggedIn: true,
        token: action.userData.token,
      };
    case LOG_OUT:
      return {
        user: null,
        userId: null,
        isLoggedIn: false,
        token: null,
      };
    default:
      return state;
  }
}
