import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Eye, EyeOff } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const { login, loading } = useAuth();

  const loginSchema = Yup.object({
    email: Yup.string().email("Email invalide").required("L'email est requis"),
    password: Yup.string().min(6, "6 caractères minimum").required("Mot de passe requis"),
  })

  const registerSchema = Yup.object({
    email: Yup.string().email("Email invalide").required("L'email est requis"),
    password: Yup.string().min(6, "6 caractères minimum").required("Mot de passe requis"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Les mots de passe doivent correspondre")
      .required("Confirmation requise"),
  })

    const handleLogin = async (email: string, password: string) => {
    // setError(null);
    // setLoading(true);
    const { error } = await login(email, password);
    // if (error) setError(error);
    if (error) console.log(error);
    // if (error) setLoading(false);
    else
      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
  };


  const loginFormik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      handleLogin(values.email, values.password);
    },
  })

  const registerFormik = useFormik({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log("Register:", values)
    },
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Tabs defaultValue="login" className="w-[380px]">
        <TabsList className="bg-muted p-1 rounded-md grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="login">Connexion</TabsTrigger>
          <TabsTrigger value="signin">Inscription</TabsTrigger>
        </TabsList>

      {/* ---------------- LOGIN ---------------- */}
<TabsContent value="login">
  <Card>
    <CardHeader>
      <CardTitle className="text-center">Connexion</CardTitle>
    </CardHeader>
    <CardContent>
      <form onSubmit={loginFormik.handleSubmit} className="space-y-4">
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Votre email"
            value={loginFormik.values.email}
            onChange={loginFormik.handleChange}
            onBlur={loginFormik.handleBlur}
          />
          {loginFormik.touched.email && loginFormik.errors.email && (
            <p className="text-sm text-destructive mt-1">{loginFormik.errors.email}</p>
          )}
        </Field>

        <Field>
          <FieldLabel>Mot de passe</FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={loginFormik.values.password}
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
            />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton
                    onClick={() => setShowPassword(!showPassword)}
                    size="icon-xs"
                    className="rounded-full"
                    type="button"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>
                  {showPassword ? "Masquer" : "Afficher"}
                </TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
          {loginFormik.touched.password && loginFormik.errors.password && (
            <p className="text-sm text-destructive mt-1">{loginFormik.errors.password}</p>
          )}
        </Field>
        <div className="text-right">
          <button
            type="button"
            onClick={() => navigate("/forgotPassword")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Mot de passe oublié ?
          </button>
        </div>

        <Button type="submit" className="w-full mt-2">
          Se connecter
        </Button>
      </form>
    </CardContent>
  </Card>
</TabsContent>


        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Inscription</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={registerFormik.handleSubmit} className="space-y-4">
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Votre email"
                    value={registerFormik.values.email}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                  />
                  {registerFormik.touched.email && registerFormik.errors.email && (
                    <p className="text-sm text-destructive mt-1">{registerFormik.errors.email}</p>
                  )}
                </Field>

                <Field>
                  <FieldLabel>Mot de passe</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      value={registerFormik.values.password}
                      onChange={registerFormik.handleChange}
                      onBlur={registerFormik.handleBlur}
                    />
                    <InputGroupAddon align="inline-end">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <InputGroupButton
                            onClick={() => setShowPassword(!showPassword)}
                            size="icon-xs"
                            className="rounded-full"
                            type="button"
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </InputGroupButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          {showPassword ? "Masquer" : "Afficher"}
                        </TooltipContent>
                      </Tooltip>
                    </InputGroupAddon>
                  </InputGroup>
                  {registerFormik.touched.password && registerFormik.errors.password && (
                    <p className="text-sm text-destructive mt-1">
                      {registerFormik.errors.password}
                    </p>
                  )}
                </Field>

                <Field>
                  <FieldLabel>Confirmer le mot de passe</FieldLabel>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="********"
                    value={registerFormik.values.confirmPassword}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                  />
                  {registerFormik.touched.confirmPassword &&
                    registerFormik.errors.confirmPassword && (
                      <p className="text-sm text-destructive mt-1">
                        {registerFormik.errors.confirmPassword}
                      </p>
                    )}
                </Field>

                <Button type="submit" className="w-full mt-2">
                  Créer un compte
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AuthPage
