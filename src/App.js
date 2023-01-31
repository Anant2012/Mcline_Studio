import './App.css';
import Navbar from './components/navbar/Navbar';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HRend from './components/hrend/HRend';
import Profile from './components/profile/Profile';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import FrontPage from './components/frontpage/FrontPage';
import Addnewlead from './components/operation/Add New/Addnewlead';
import Addnewproject from './components/operation/Add New/Addnewproject';
import Footer from './components/footer/Footer';
import Lead from './components/operation/View/Lead/Lead';
import Project from './components/operation/View/Project/Project';
import Table1 from './Table1';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<FrontPage/>} />
        <Route exact path="/operation/addnew/lead" element={<Addnewlead/>} />
        <Route exact path="/operation/addnew/project" element={<Addnewproject/>} />
        <Route exact path="/operation/view/lead" element={<Lead/>} />
        <Route exact path="/operation/view/project" element={<Project/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp />} />
        {/* <Route exact path="/table1" element={<Table1 />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
