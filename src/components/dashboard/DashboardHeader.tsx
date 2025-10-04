import { LogOut, Sparkles, Bell, Settings, User, Palette, Shield, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export const DashboardHeader = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");
  const [isVisible, setIsVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  useEffect(() => {
    // Get user name from mock user data - default to Emilia for AI-Selfie Creator
    const mockUser = localStorage.getItem("mockUser");
    if (mockUser) {
      const userData = JSON.parse(mockUser);
      setUserName(userData.name || "Emilia");
    } else {
      setUserName("Emilia");
    }
    
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleLogout = async () => {
    // Clear mock user session
    localStorage.removeItem("mockUser");
    toast.success("Successfully logged out");
    navigate("/");
  };

  return (
    <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className={`container mx-auto px-4 py-6 flex items-center justify-between relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Sparkles className="w-6 h-6 text-primary-foreground animate-pulse" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Hallo {userName}! 👋
            </h1>
            <p className="text-sm text-muted-foreground/80 font-medium">
              AI-Selfie Creator Dashboard • Manage your virtual studio
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="relative hover:bg-secondary/60 transition-all duration-200 hover:scale-105"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          </Button>
          
          <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-secondary/60 transition-all duration-200 hover:scale-105"
              >
                <Settings className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Quick Settings
                </DialogTitle>
                <DialogDescription>
                  Manage your account settings and preferences. For full AI-Selfie configuration, visit the Settings page.
                </DialogDescription>
              </DialogHeader>
              
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="profile" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Profil
                  </TabsTrigger>
                  <TabsTrigger value="appearance" className="flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    Design
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Privatsphäre
                  </TabsTrigger>
                  <TabsTrigger value="help" className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    Hilfe
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profil-Informationen</CardTitle>
                      <CardDescription>
                        Bearbeite deine persönlichen Daten und Kontodetails.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-Mail</Label>
                          <Input id="email" type="email" placeholder="user@example.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Input id="bio" placeholder="Erzähle uns etwas über dich..." />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>E-Mail Benachrichtigungen</Label>
                          <div className="text-sm text-muted-foreground">Erhalte Updates über neue Features und Statistiken.</div>
                        </div>
                        <Switch checked={emailUpdates} onCheckedChange={setEmailUpdates} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="appearance" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Design & Darstellung</CardTitle>
                      <CardDescription>
                        Passe das Aussehen der Anwendung an deine Vorlieben an.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Dunkler Modus</Label>
                          <div className="text-sm text-muted-foreground">Verwende ein dunkles Farbschema für bessere Lesbarkeit.</div>
                        </div>
                        <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Animationen</Label>
                          <div className="text-sm text-muted-foreground">Aktiviere oder deaktiviere Übergänge und Animationen.</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Auto-Speichern</Label>
                          <div className="text-sm text-muted-foreground">Änderungen automatisch speichern.</div>
                        </div>
                        <Switch checked={autoSave} onCheckedChange={setAutoSave} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="privacy" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Privatsphäre & Sicherheit</CardTitle>
                      <CardDescription>
                        Kontrolliere deine Datenschutz-Einstellungen und Sicherheitsoptionen.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Profil öffentlich</Label>
                          <div className="text-sm text-muted-foreground">Andere können dein Profil sehen.</div>
                        </div>
                        <Switch />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Analytik</Label>
                          <div className="text-sm text-muted-foreground">Hilf uns die App zu verbessern durch anonyme Nutzungsdaten.</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Zwei-Faktor-Authentifizierung</Label>
                          <div className="text-sm text-muted-foreground">Erhöhe die Sicherheit deines Kontos.</div>
                        </div>
                        <Button variant="outline" size="sm">Einrichten</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="help" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hilfe & Support</CardTitle>
                      <CardDescription>
                        Finde Antworten auf deine Fragen oder kontaktiere unser Support-Team.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-20 flex flex-col gap-2">
                          <HelpCircle className="w-6 h-6" />
                          <span>FAQ</span>
                        </Button>
                        <Button variant="outline" className="h-20 flex flex-col gap-2">
                          <User className="w-6 h-6" />
                          <span>Support kontaktieren</span>
                        </Button>
                      </div>
                      <Separator />
                      <div className="text-center space-y-2">
                        <p className="text-sm text-muted-foreground">App Version: 1.0.0</p>
                        <p className="text-sm text-muted-foreground">© 2024 AI-Selfie Creator Hub • Powered by Emilia</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="border-border/60 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};
