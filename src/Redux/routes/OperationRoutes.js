import { Route } from "react-router-dom";
import { PrivateOperataionRoute } from "./PrivateRoute";
import AdminLead from "../../components/admin/Operations/AdminLead";
import AdminOperationFrontPage from "../../components/admin/Operations/AdminOperationFrontPage";
import AdminOperationLogin from "../../components/admin/Operations/AdminOperationLogin";
import AdminEditLead from "../../components/admin/Operations/AdminEditLead";
import AdminProject from "../../components/admin/Operations/AdminProject";
import AdminEditProject from "../../components/admin/Operations/AdminEditProject";

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
  <Route
    exact
    path="/admin/operation/edit/lead/:leadId"
    element={
      <PrivateOperataionRoute>
        <AdminEditLead />
      </PrivateOperataionRoute>
    }
  />,
  <Route
    exact
    path="/admin/operation/view/project"
    element={
      <PrivateOperataionRoute>
        <AdminProject />
      </PrivateOperataionRoute>
    }
  />,
  <Route
    exact
    path="/admin/operation/edit/project/:projectId"
    element={
      <PrivateOperataionRoute>
        <AdminEditProject />
      </PrivateOperataionRoute>
    }
  />,
];
