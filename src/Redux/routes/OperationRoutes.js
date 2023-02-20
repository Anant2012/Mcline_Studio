import { Route } from "react-router-dom";
import { PrivateOperataionRoute } from "./PrivateRoute";
import AdminLead from "../../components/admin/Operations/AdminLead";
import AdminOperationFrontPage from "../../components/admin/Operations/AdminOperationFrontPage";
import AdminOperationLogin from "../../components/admin/Operations/AdminOperationLogin";

export const OperationRoutes = [
  <Route
    exact
    path="/admin/operation/login"
    element={<AdminOperationLogin />}
  />,
  <Route
    exact
    path="/admin/operation"
    element={
      <PrivateOperataionRoute>
        <AdminOperationFrontPage />
      </PrivateOperataionRoute>
    }
  />,
  <Route
    exact
    path="/admin/operation/view/lead"
    element={
      <PrivateOperataionRoute>
        <AdminLead />
      </PrivateOperataionRoute>
    }
  />,
];
