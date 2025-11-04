import CustomHeader from "@/components/CustomHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
      <div className="contenu">
        <Button variant={"destructive"} onClick={() => navigate("/")}>Se deconnecter</Button>
        <CustomHeader
          title="wewewe"
          titleButton="Ajouter Test"
          className=""
          subtitle="testtttt"
        />

        <div className="grid w-full max-w-sm items-center gap-3">
          <Input type="email" placeholder="Email" />
        </div>
      </div>
  );
};

export default ProfilePage;
