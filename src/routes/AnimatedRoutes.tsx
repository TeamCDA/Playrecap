import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "@/pages/HomePage";
import ProfilePage from "@/pages/ProfilePage";
import LayoutWithNavbar from "@/components/layout/LayoutWithNavbar";
import AuthPage from "@/pages/AuthPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AuthPage />} />
        {/* NAVBAR */}
        <Route element={<LayoutWithNavbar />}>
                    <Route
          path="/home"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/profile"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProfilePage />
            </motion.div>
          }
        />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;