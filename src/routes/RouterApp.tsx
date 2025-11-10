import { Route, Routes, useLocation } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import Profile from "../pages/ProfilePage";
import ForgotPassword from "../pages/ForgotPasswordPage";
import LayoutWithNavbar from "@/components/layout/LayoutWithNavbar";

const RouterApp = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />

      {/* ROUTES WITH NAVBAR */}
      <Route element={<LayoutWithNavbar /> }>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      {/* PRIVATE */}
      {/* TEST */}
    </Routes>
  );
};

export default RouterApp;
