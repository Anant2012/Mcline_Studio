import "./App.css";
import NavbarUser from "./components/navbar/NavbarUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";


import { AdminRoutes } from "./Redux/routes/AdminRoutes";
import { OperationRoutes } from "./Redux/routes/OperationRoutes";
import { HRRoutes } from "./Redux/routes/HRRoutes";


import ScrollToTop from "./ScrollToTop";

import { UserRoutes } from "./Redux/routes/UserRoutes";


function App() {
  return (
    <Router>
      <NavbarUser />
      <ScrollToTop/>
      <Routes>
        {UserRoutes}
        {AdminRoutes}
        {HRRoutes}
        {OperationRoutes}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
