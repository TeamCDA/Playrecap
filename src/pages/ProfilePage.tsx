
import CustomHeader from "@/components/custom/CustomHeader";
import { Input } from "@/components/ui/input"


const Profile = () => {




  return (
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
  )
}

export default Profile
