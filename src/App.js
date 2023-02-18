import "./App.css";
import NavbarUser from "./components/navbar/NavbarUser";
import NavbarAdmin from "./components/navbar/NavbarAdmin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewProfile from "./components/hrend/profile/ViewProfile";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
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
import AdminLead from "./components/admin/Operations/AdminLead";
import AdminProject from "./components/admin/Operations/AdminProject";
import AdminLeaves from "./components/admin/HrEnd/AdminLeaves";
import AdminTickets from "./components/admin/HrEnd/AdminTickets";
import AdminGrievance from "./components/admin/HrEnd/AdminGrievance";
import AdminProfile from "./components/admin/HrEnd/AdminProfile";
import EditLead from "./components/operation/View/Lead/EditLead";
import AdminTableFrontPage from "./components/admin/HomePage/AdminTableFrontPage";
import PersonalDetails from "./components/hrend/profile/PersonalDetails";
import Timesheet from "./components/hrend/Timesheet";

import EditProject from "./components/operation/View/Project/EditProject";
import AdminHRFrontPage from "./components/admin/HrEnd/AdminHRFrontPage";
import AdminOperationFrontPage from "./components/admin/Operations/AdminOperationFrontPage";
import AdminEditLead from "./components/admin/Operations/AdminEditLead";
import AdminEditProject from "./components/admin/Operations/AdminEditProject";
import AdminEditLeaves from "./components/admin/HrEnd/Edit/AdminEditLeaves";
import AdminEditTickets from "./components/admin/HrEnd/Edit/AdminEditTicket";
import AdminEditGrievance from "./components/admin/HrEnd/Edit/AdminEditGrievance";
import AdminEditUser from "./components/admin/HomePage/AdminEditUser";
import PrivateRoute from "./Redux/routes/PrivateRoute";

function App() {
  return (
    <Router>
      {[
        "/admin",
        "/admin/operation",
        "/admin/hrend",
        "/admin/operation/view/lead",
        "/admin/operation/view/project",
        "/admin/hr/profiles",
        "/admin/hr/leaves",
        "/admin/hr/tickets",
        "/admin/hr/grievance",
        "/admin/hr/timesheet",
        "/hr/policy",
      ].includes(window.location.pathname) ? (
        <NavbarAdmin />
      ) : (
        <NavbarUser />
      )}
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route exact path="/hr/viewprofile" element={
          <PrivateRoute>
            <ViewProfile />
          </PrivateRoute>} />
        <Route exact path="/hr/edit_profile" element={
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>} />
        <Route exact path="/hr/personaldetails" element={
          <PrivateRoute>
            <PersonalDetails />
          </PrivateRoute>} />
        <Route exact path="/operation/addnew/lead" element={
          <PrivateRoute>
            <Addnewlead />
          </PrivateRoute>} />
        <Route
          exact
          path="/operation/addnew/project"
          element={
            <PrivateRoute>
              <Addnewproject />
            </PrivateRoute>}
        />
        <Route exact path="/operation/view/project" element={
          <PrivateRoute>
            <Project />
          </PrivateRoute>} />

        <Route
          exact
          path="/operation/view/lead"
          element={
            <PrivateRoute>
              <Lead />
            </PrivateRoute>
          }
        />
        <Route exact path="/user/edit_lead/:leadId" element={
          <PrivateRoute>
            <EditLead />
          </PrivateRoute>} />
        <Route
          exact
          path="/user/edit_project/:projectId"
          element={<PrivateRoute>
            <EditProject />
          </PrivateRoute>}
        />
        <Route exact path="/hr/leaves" element={
          <PrivateRoute>
            <Leave />
          </PrivateRoute>} />
        <Route exact path="/hr/tickets" element={
          <PrivateRoute>
            <Tickets />
          </PrivateRoute>} />
        <Route exact path="/hr/grievance" element={
          <PrivateRoute>
            <Grievance />
          </PrivateRoute>} />
        <Route exact path="/hr/policy" element={
          <PrivateRoute>
            <Policy />
          </PrivateRoute>} />
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/signup" element={
          <PrivateRoute>
            <SignUp />
          </PrivateRoute>} /> */}
        <Route exact path="/hr/timesheet" element={
          <PrivateRoute>
            <Timesheet />
          </PrivateRoute>} />

        {/* Admin Section   */}
        <Route exact path="/admin" element={<AdminTableFrontPage />} />
        <Route
          exact
          path="/admin/operation/edit/user/:userId"
          element={<AdminEditUser />}
        />

        <Route exact path="/admin/hrend" element={<AdminHRFrontPage />} />
        <Route
          exact
          path="/admin/operation"
          element={<AdminOperationFrontPage />}
        />
        <Route
          exact
          path="/admin/operation/view/lead"
          element={<AdminLead />}
        />
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

        <Route exact path="/admin/hr/profiles" element={<AdminProfile />} />
        <Route
          exact
          path="/admin/hr/profiles/profileId"
          element={<AdminProfile />}
        />
        <Route exact path="/admin/hr/leaves" element={<AdminLeaves />} />
        <Route
          exact
          path="/admin/hr/leaves/edit/:leaveId"
          element={<AdminEditLeaves />}
        />
        <Route exact path="/admin/hr/tickets" element={<AdminTickets />} />
        <Route
          exact
          path="/admin/hr/tickets/edit/:ticketId"
          element={<AdminEditTickets />}
        />
        <Route exact path="/admin/hr/grievance" element={<AdminGrievance />} />
        <Route
          exact
          path="/admin/hr/grievance/edit/:grId"
          element={<AdminEditGrievance />}
        />
        {/* <Route exact path="/admin/hr/timesheet" element={<AdminHRTimesheet/>} /> */}

        <Route exact path="/admin/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
