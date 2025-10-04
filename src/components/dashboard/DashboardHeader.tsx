import { LogOut, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export const DashboardHeader = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    // Get user name from mock user data
    const mockUser = localStorage.getItem("mockUser");
    if (mockUser) {
      const userData = JSON.parse(mockUser);
      setUserName(userData.name || "User");
    }
  }, []);

  const handleLogout = async () => {
    // Clear mock user session
    localStorage.removeItem("mockUser");
    toast.success("Erfolgreich abgemeldet");
    navigate("/");
  };

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Hallo {userName}</h1>
            <p className="text-sm text-muted-foreground">Verwalte deine Einnahmen</p>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-2" />
          Abmelden
        </Button>
      </div>
    </header>
  );
};
