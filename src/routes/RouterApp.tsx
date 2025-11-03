import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import Profile from "../pages/ProfilePage";

const RouterApp = () => {
  return (
    // <Suspense fallback={<div>Chargement...</div>} ></Suspense>
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
       <Route path="/profile" element={<Profile />} />
      {/* PRIVATE */}
      {/* TEST */}
    </Routes>
  );
};

export default RouterApp;