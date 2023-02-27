import { LOG_IN_SUCCESS, LOG_OUT } from "../actions";

const initialAuthState = {
  user: JSON.parse(localStorage.getItem("user")),
  userId: JSON.parse(localStorage.getItem("userId")),
  role: JSON.parse(localStorage.getItem("role")),
  status: JSON.parse(localStorage.getItem("status")),
  totalLeaves: JSON.parse(localStorage.getItem("totalLeaves")),

};

export default function AuthReducer(
  state = initialAuthState,
  { type, user, userRole }
) {
  switch (type) {
    case LOG_IN_SUCCESS:
      return {
        user: user.username,
        userId: user._id,
        role: userRole,
        status: user.status,
        totalLeaves: user.totalLeaves,
      };
    case LOG_OUT:
      return {
        user: null,
        userId: null,
        role: null,
        status: "Inactive",
        totalLeaves: "0",
      };
    default:
      return state;
  }
}
