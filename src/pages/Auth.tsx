import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Mock authentication for testing
      if (isLogin) {
        // Check for test user credentials
        if (email === "test@test.de" && password === "testtest") {
          // Store mock user session
          localStorage.setItem("mockUser", JSON.stringify({
            email: "test@test.de",
            name: "Emilia Ivanova",
            id: "test-user-123"
          }));
          toast.success("Erfolgreich angemeldet!");
          navigate("/dashboard");
        } else {
          throw new Error("Ungültige Anmeldedaten");
        }
      } else {
        // Mock registration - just store the user
        if (email && password && password.length >= 6) {
          localStorage.setItem("mockUser", JSON.stringify({
            email,
            name: name || "Neuer User",
            id: `user-${Date.now()}`
          }));
          toast.success("Account erfolgreich erstellt!");
          navigate("/dashboard");
        } else {
          throw new Error("Bitte alle Felder ausfüllen (Passwort min. 6 Zeichen)");
        }
      }
    } catch (error: any) {
      toast.error(error.message || "Ein Fehler ist aufgetreten");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-hero">
      <Card className="w-full max-w-md shadow-glow border-primary/20">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl">{isLogin ? "Willkommen zurück" : "Konto erstellen"}</CardTitle>
          <CardDescription>
            {isLogin ? "Melde dich an, um dein Dashboard zu sehen" : "Starte deine Creator-Journey"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Dein Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-secondary border-border"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@beispiel.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="bg-secondary border-border"
              />
            </div>
            <Button type="submit" className="w-full gradient-primary" disabled={loading}>
              {loading ? "Lädt..." : isLogin ? "Anmelden" : "Registrieren"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            {isLogin ? "Noch kein Konto?" : "Bereits registriert?"}
            <Button
              variant="link"
              className="pl-1 text-primary"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Jetzt registrieren" : "Anmelden"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
