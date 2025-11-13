import CardStats from "@/components/cards/CardStats";
import CustomHeader from "@/components/customs/CustomHeader";
import { Calendar, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="contenu py-5">
      <div className="mt-4">
        <CustomHeader
          title="Mes Statistiques"
          titleButton="Deconexion"
          iconRight={<LogOut />}
          onClick={() => navigate("/")}
          secondaryButtonTitle="Export"
          secondaryVariant="outline"
          onSecondaryClick={() => console.log("Export")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CardStats icon={<Gamepad2 />} title="Total de jeux" stats={4} />
        <CardStats icon={<Calendar />} title="Cette année" stats="oui" />
      </div>
    </div>
  );
};

export default Profile;
