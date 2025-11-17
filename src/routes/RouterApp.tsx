import { Route, Routes, useLocation } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import Profile from "../pages/ProfilePage";
import ForgotPassword from "../pages/ForgotPasswordPage";
import LayoutWithNavbar from "@/components/layout/LayoutWithNavbar";
import PrivateRoute from "./PrivateRoute";

const RouterApp = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/*" element={<p>404</p>} />

      {/* ROUTES WITH NAVBAR */}
      {/* PRIVATE */}
      <Route element={<LayoutWithNavbar /> }>
        <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      </Route>
      {/* TEST */}
    </Routes>
  );
};

export default RouterApp;
