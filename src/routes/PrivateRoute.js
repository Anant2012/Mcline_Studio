import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { userId } = useSelector((state) => state);
  return !userId ? <Navigate to="/login" replace /> : children;
};

export default PrivateRoute;
