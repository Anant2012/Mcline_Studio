import { Route } from "react-router-dom";
import AdminEditUser from "../../components/admin/HomePage/AdminEditUser";
import AdminTableFrontPage from "../../components/admin/HomePage/AdminTableFrontPage";
import HomePageLogin from "../../components/admin/HomePage/HomePageLogin";
import { PrivateAdminRoute } from "./PrivateRoute";

export const AdminRoutes = [
  <Route exact path="/admin/login" element={<HomePageLogin />} />,
  <Route
    exact
    path="/admin"
    element={
      <PrivateAdminRoute>
        <AdminTableFrontPage />
      </PrivateAdminRoute>
    }
  />,
  <Route
    exact
    path="/admin/operation/edit/user/:userId"
    element={
      <PrivateAdminRoute>
        <AdminEditUser />
      </PrivateAdminRoute>
    }
  />,
];
