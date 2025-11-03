import { Gamepad2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { t } = useTranslation()
 const navigate = useNavigate()  

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => navigate("/profile")}>
        <Gamepad2 /> PlayRecap | {t("TEST")}
      </Button>
      <p>YOoooooooooooooooo</p>
    </div>
  );
};

export default AuthPage;
