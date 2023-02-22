import { Route } from "react-router-dom";
import AdminGrievance from "../../components/admin/HrEnd/AdminGrievance";
import AdminHREndLogin from "../../components/admin/HrEnd/AdminHREndLogin";
import AdminHRFrontPage from "../../components/admin/HrEnd/AdminHRFrontPage";
import AdminLeaves from "../../components/admin/HrEnd/AdminLeaves";
import AdminProfile from "../../components/admin/HrEnd/AdminProfile";
import AdminTickets from "../../components/admin/HrEnd/AdminTickets";
import AdminEditGrievance from "../../components/admin/HrEnd/Edit/AdminEditGrievance";
import AdminEditLeaves from "../../components/admin/HrEnd/Edit/AdminEditLeaves";
import AdminEditTickets from "../../components/admin/HrEnd/Edit/AdminEditTicket";
import { PrivateHRRoute } from "./PrivateRoute";

export const HRRoutes = [
  <Route exact path="/admin/hrend/login" element={<AdminHREndLogin />} />,
  <Route
    exact
    path="/admin/hrend"
    element={
      <PrivateHRRoute>
        <AdminHRFrontPage />
      </PrivateHRRoute>
    }
  />,
  <Route
    exact
    path="/admin/hr/profiles"
    element={
      <PrivateHRRoute>
        <AdminProfile />
      </PrivateHRRoute>
    }
  />,
  <Route
    exact
    path="/admin/hr/profiles/:profileId"
    element={
      <PrivateHRRoute>
        <AdminProfile />
      </PrivateHRRoute>
    }
  />,
  <Route
    exact
    path="/admin/hr/leaves"
    element={
      <PrivateHRRoute>
        <AdminLeaves />
      </PrivateHRRoute>
    }
  />,
  <Route
    exact
    path="/admin/hr/leaves/edit/:leaveId"
    element={
      <PrivateHRRoute>
        <AdminEditLeaves />
      </PrivateHRRoute>
    }
  />,
  <Route
    exact
    path="/admin/hr/tickets"
    element={
      <PrivateHRRoute>
        <AdminTickets />
      </PrivateHRRoute>
    }
  />,
  <Route
    exact
    path="/admin/hr/tickets/edit/:ticketId"
    element={
      <PrivateHRRoute>
        <AdminEditTickets />
      </PrivateHRRoute>
    }
  />,
  <Route
    exact
    path="/admin/hr/grievance"
    element={
      <PrivateHRRoute>
        <AdminGrievance />
      </PrivateHRRoute>
    }
  />,
  <Route
    exact
    path="/admin/hr/grievance/edit/:grId"
    element={
      <PrivateHRRoute>
        <AdminEditGrievance />
      </PrivateHRRoute>
    }
  />,
];
