import "./App.css";
import NavbarUser from "./components/navbar/NavbarUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewProfile from "./components/hrend/profile/ViewProfile";
import Login from "./components/auth/Login";
import FrontPage from "./components/frontpage/FrontPage";
import Addnewlead from "./components/operation/Add New/Addnewlead";
import Addnewproject from "./components/operation/Add New/Addnewproject";
import Footer from "./components/footer/Footer";

import Lead from "./components/operation/View/Lead/Lead";
import Leave from "./components/hrend/Leave";
import Tickets from "./components/hrend/Tickets";
import Grievance from "./components/hrend/Grievance";
import Policy from "./components/hrend/Policy";

import Project from "./components/operation/View/Project/Project";
import EditProfile from "./components/hrend/profile/EditProfile";
import AdminProject from "./components/admin/Operations/AdminProject";
import EditLead from "./components/operation/View/Lead/EditLead";
import PersonalDetails from "./components/hrend/profile/PersonalDetails";
import Timesheet from "./components/hrend/Timesheet";
import EditProject from "./components/operation/View/Project/EditProject";
import AdminEditLead from "./components/admin/Operations/AdminEditLead";
import AdminEditProject from "./components/admin/Operations/AdminEditProject";
import { PrivateRoute } from "./Redux/routes/PrivateRoute";
import { AdminRoutes } from "./Redux/routes/AdminRoutes";
import { OperationRoutes } from "./Redux/routes/OperationRoutes";
import { HRRoutes } from "./Redux/routes/HRRoutes";

function App() {
  return (
    <Router>
      <NavbarUser />
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route
          exact
          path="/hr/viewprofile"
          element={
            <PrivateRoute>
              <ViewProfile />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/hr/edit_profile"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/hr/personaldetails"
          element={
            <PrivateRoute>
              <PersonalDetails />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/operation/addnew/lead"
          element={
            <PrivateRoute>
              <Addnewlead />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/operation/addnew/project"
          element={
            <PrivateRoute>
              <Addnewproject />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/operation/view/project"
          element={
            <PrivateRoute>
              <Project />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/operation/view/lead"
          element={
            <PrivateRoute>
              <Lead />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/user/edit_lead/:leadId"
          element={
            <PrivateRoute>
              <EditLead />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/user/edit_project/:projectId"
          element={
            <PrivateRoute>
              <EditProject />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/hr/leaves"
          element={
            <PrivateRoute>
              <Leave />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/hr/tickets"
          element={
            <PrivateRoute>
              <Tickets />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/hr/grievance"
          element={
            <PrivateRoute>
              <Grievance />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/hr/policy"
          element={
            <PrivateRoute>
              <Policy />
            </PrivateRoute>
          }
        />
        <Route exact path="/login" element={<Login />} />

        <Route
          exact
          path="/hr/timesheet"
          element={
            <PrivateRoute>
              <Timesheet />
            </PrivateRoute>
          }
        />

        {AdminRoutes}
        {HRRoutes}
        {OperationRoutes}
        <Route
          exact
          path="/admin/operation/edit/lead/:leadId"
          element={<AdminEditLead />}
        />
        <Route
          exact
          path="/admin/operation/view/project"
          element={<AdminProject />}
        />
        <Route
          exact
          path="/admin/operation/edit/project/:projectId"
          element={<AdminEditProject />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
