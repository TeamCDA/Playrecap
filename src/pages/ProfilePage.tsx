import CustomHeader from "@/components/CustomHeader";
import CustomNavbar from "@/components/layout/CustomNavbar";
import { Input } from "@/components/ui/input";

const Profile = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="contenu">
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
    </div>
  );
};

export default Profile;
