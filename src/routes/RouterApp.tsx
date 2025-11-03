import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import ProfileTestPage from "@/pages/ProfileTestPage";

const RouterApp = () => {
  return (
    // <Suspense fallback={<div>Chargement...</div>} ></Suspense>
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
      {/* PRIVATE */}
      {/* TEST */}
      <Route path="/profile" element={<ProfileTestPage />} />
    </Routes>
  );
};

export default RouterApp;