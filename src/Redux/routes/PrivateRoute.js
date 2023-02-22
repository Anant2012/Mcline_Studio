import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const { role } = useSelector((state) => state);
  return role !== "user" ? <Navigate to="/login" replace /> : children;
};

export const PrivateAdminRoute = ({ children }) => {
  const { role } = useSelector((state) => state);
  return role === "admin" ? children : <Navigate to="/admin/login" replace />;
};

export const PrivateOperataionRoute = ({ children }) => {
  const { role } = useSelector((state) => state);
  return role === "operations" ? (
    children
  ) : (
    <Navigate to="/admin/operation/login" replace />
  );
};

export const PrivateHRRoute = ({ children }) => {
  const { role } = useSelector((state) => state);
  return role === "hr" ? children : <Navigate to="/admin/hrend/login" />;
};
