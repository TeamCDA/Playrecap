import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {  useNavigate } from 'react-router-dom';



const AuthPage = () => {

    const [isLogin, setIsLogin] = useState(true)

    const navigate = useNavigate()
  const toggleForm = () => setIsLogin(!isLogin)

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            {isLogin ? 'Se connecter' : "S'inscrire"}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            {!isLogin && (
              <div>
                <Label htmlFor="username" className="p-2">
                 Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="pseudo"
                  required
                />
              </div>
            )}

            <div>
              <Label htmlFor="loginEmail" className="p-2">
                Email
              </Label>
              <Input
                id="loginEmail"
                type="email"
                placeholder="votre@email.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="loginPassword" className="p-2">
                Mot de passe
              </Label>
              <Input
                id="loginPassword"
                type="password"
                placeholder="Mot de passe"
                required
              />
              {isLogin && (
                <p onClick={() => navigate("/forgotPassword")}> Mots de pass oublier ? </p>
              ) }
            </div>

            <Button type="submit" className="w-full">
              {isLogin ? 'Se connecter' : "S'inscrire"}
            </Button>

            <p className="text-center text-sm">
              {isLogin ? (
                <>
                  Vous n'êtes pas inscrit ?{' '}
                  <span
                    onClick={toggleForm}
                    className="text-amber-400 cursor-pointer hover:underline"
                  >
                    Cliquez ici !
                  </span>
                </>
              ) : (
                <>
                  Déjà un compte ?{' '}
                  <span
                    onClick={toggleForm}
                    className="text-amber-400 cursor-pointer hover:underline"
                  >
                    Se connecter
                  </span>
                </>
              )}
            </p>
          </form>
        </CardContent>
      </Card>
    </div>

  );
};

export default AuthPage;
