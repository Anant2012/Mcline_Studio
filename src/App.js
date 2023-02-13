import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ViewProfile from './components/hrend/profile/ViewProfile';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import FrontPage from './components/frontpage/FrontPage';
import Addnewlead from './components/operation/Add New/Addnewlead';
import Addnewproject from './components/operation/Add New/Addnewproject';
import Footer from './components/footer/Footer';
import Table1 from './Table1';
import Lead from './components/operation/View/Lead/Lead';
import Leave from './components/hrend/Leave';
import Tickets from './components/hrend/Tickets';
import Grievance from './components/hrend/Grievance';
import Policy from './components/hrend/Policy';

import Project from './components/operation/View/Project/Project';
import EditProfile from './components/hrend/profile/EditProfile';
import AdminLead from './components/admin/Operations/AdminLead';
import AdminProject from './components/admin/Operations/AdminProject';
import AdminLeaves from './components/admin/HrEnd/AdminLeaves';
import AdminTickets from './components/admin/HrEnd/AdminTickets';
import AdminGrievance from './components/admin/HrEnd/AdminGrievance';
import AdminProfile from './components/admin/HrEnd/AdminProfile';
import EditLead from './components/operation/View/Lead/EditLead';
import AdminTableFrontPage from './components/admin/HomePage/AdminTableFrontPage';
import PersonalDetails from './components/hrend/profile/PersonalDetails';
import Timesheet from './components/hrend/Timesheet';

import EditProject from './components/operation/View/Project/EditProject';
import AdminHRFrontPage from './components/admin/HrEnd/AdminHRFrontPage';
import AdminOperationFrontPage from './components/admin/Operations/AdminOperationFrontPage';
import AdminEditLead from './components/admin/Operations/AdminEditLead';
import AdminEditLeaves from './components/admin/HrEnd/Edit/AdminEditLeaves';
import AdminEditTickets from './components/admin/HrEnd/Edit/AdminEditTicket';
import AdminEditGrievance from './components/admin/HrEnd/Edit/AdminEditGrievance';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route exact path="/hr/viewprofile" element={<ViewProfile />} />
        <Route exact path="/hr/edit_profile" element={<EditProfile />} />
        <Route exact path="/hr/personaldetails" element={<PersonalDetails />} />
        <Route exact path="/operation/addnew/lead" element={<Addnewlead />} />
        <Route exact path="/operation/addnew/project" element={<Addnewproject />} />
        <Route exact path="/operation/view/project" element={<Project />} />
        <Route exact path="/operation/view/lead" element={<Lead />} />
        <Route exact path="/user/edit_lead/:leadId" element={<EditLead />} />
        <Route exact path="/user/edit_project/:projectId" element={<EditProject />} />
        <Route exact path="/hr/leaves" element={<Leave />} />
        <Route exact path="/hr/tickets" element={<Tickets />} />
        <Route exact path="/hr/grievance" element={<Grievance />} />
        <Route exact path="/hr/policy" element={<Policy />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/table1" element={<Table1 />} />
        <Route exact path="/hr/timesheet" element={<Timesheet/>} />



        {/* Admin Section   */}
        <Route exact path="/admin" element={<AdminTableFrontPage />} />

        <Route exact path="/admin/hrend" element={<AdminHRFrontPage />} />
        <Route exact path="/admin/operation" element={<AdminOperationFrontPage />} />
        <Route exact path="/admin/operation/view/lead" element={<AdminLead />} />
        <Route exact path="/admin/operation/edit/lead/:leadId" element={<AdminEditLead />} />
        <Route exact path="/admin/operation/view/project" element={<AdminProject />} />

        <Route exact path="/admin/hr/profiles" element={<AdminProfile />} />
        <Route exact path="/admin/hr/profiles/profileId" element={<AdminProfile />} />
        <Route exact path="/admin/hr/leaves" element={<AdminLeaves />} />
        <Route exact path="/admin/hr/leaves/edit/:leaveId" element={<AdminEditLeaves />} />
        <Route exact path="/admin/hr/tickets" element={<AdminTickets />} />
        <Route exact path="/admin/hr/tickets/edit/:ticketId" element={<AdminEditTickets />} />
        <Route exact path="/admin/hr/grievance" element={<AdminGrievance />} />
        <Route exact path="/admin/hr/grievance/edit/:grId" element={<AdminEditGrievance/>} />
        {/* <Route exact path="/admin/hr/timesheet" element={<AdminHRTimesheet/>} /> */}
        
        <Route exact path="/admin/login" element={<Login />} />
        <Route exact path="/table1" element={<Table1 />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
