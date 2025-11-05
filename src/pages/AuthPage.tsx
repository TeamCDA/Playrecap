
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Eye, EyeOff} from "lucide-react";
import { useState } from "react";



const AuthPage = () => {

  const [showPassword, setShowPassword] = useState(false)
   /* const [isLogin, setIsLogin] = useState(true)

    const navigate = useNavigate()
  const toggleForm = () => setIsLogin(!isLogin) */

  return (
    <div className="flex items-center justify-center min-h-screen">
    <Tabs defaultValue="login">
      <TabsList className="bg-muted p-1 rounded-md grid w-full grid-cols-2 ">
        <TabsTrigger value="login" >Connexion</TabsTrigger>
        <TabsTrigger value="signin">Inscription</TabsTrigger>
      </TabsList>

      <TabsContent value="login" className="">
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input id="Email" type="email" placeholder="Mettez votre email" required/>
        </Field>
  <Field>
      <FieldLabel>Password</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="************"
        />  
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton
                onClick={() => setShowPassword(!showPassword)}
                size="icon-xs"
                className="rounded-full"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              {showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Button className="w-full mt-5">Se connecter</Button>
      </TabsContent>
      
      <TabsContent value="signin" className="">
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input id="Email" type="email" placeholder="Mettez votre email" required/>
        </Field>
  <Field>
      <FieldLabel>Password</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="************"
        />  
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton
                onClick={() => setShowPassword(!showPassword)}
                size="icon-xs"
                className="rounded-full"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              {showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Button className="w-full mt-5">Se connecter</Button>
      </TabsContent>
    </Tabs>
    </div>

  );
};

export default AuthPage;
