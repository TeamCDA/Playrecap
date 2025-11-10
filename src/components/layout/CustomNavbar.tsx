import { Gamepad2, User2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { useTranslation } from "react-i18next";

const CustomNavbar = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2 justify-center">
            <Gamepad2 size={30} />
            <h1 className="text-xl font-semibold">PlayRecap</h1>
             <ModeToggle />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-3 max-sm:gap-1">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `font-semibold flex items-center gap-2 max-sm:gap-1 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "hover:bg-accent"
                }`
              }
            >
              <Gamepad2 size={18} />
              <p className="">{t("NAVBAR.GAMES")}</p>
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `font-semibold flex items-center gap-2 max-sm:gap-1 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "hover:bg-accent"
                }`
              }
            >
              <User2 size={18} />
              <p className="">{t("NAVBAR.PROFILE")}</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CustomNavbar;
