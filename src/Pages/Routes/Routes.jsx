import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "../Auth/Account/Login/Login";
import Signup from "../Auth/Account/Signup/Signup";
import Dashboard from "../Dashboard/Dashboard";
import Startfree from "../Dashboard/Startfree";
import Joinfree from "../Dashboard/Joinfree";
// import Account from "../Pages/Auth/Account/Account";
// import Onboard from "../Pages/Auth/Onboard/Onboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Default route → Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/startfree" element={<Startfree />} />
          <Route path="/joinfree" element={<Joinfree />} />
        {/* <Route path="/account" element={<Account />} /> */}
        {/* <Route path="/onboard" element={<Onboard />} /> */}

        {/* Catch-all (optional) */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;