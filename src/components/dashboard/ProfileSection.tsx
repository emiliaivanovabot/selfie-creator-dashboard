import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Image as ImageIcon, User, Euro, Sparkles, Check } from "lucide-react";
import { toast } from "sonner";

export const ProfileSection = () => {
  const [price, setPrice] = useState("25");
  const [isVisible, setIsVisible] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [dragOver1, setDragOver1] = useState(false);
  const [dragOver2, setDragOver2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSaving(false);
    toast.success("Profil erfolgreich gespeichert!");
  };

  const handleDragOver = (e: React.DragEvent, uploadArea: number) => {
    e.preventDefault();
    if (uploadArea === 1) setDragOver1(true);
    if (uploadArea === 2) setDragOver2(true);
  };

  const handleDragLeave = (uploadArea: number) => {
    if (uploadArea === 1) setDragOver1(false);
    if (uploadArea === 2) setDragOver2(false);
  };

  const handleDrop = (e: React.DragEvent, uploadArea: number) => {
    e.preventDefault();
    if (uploadArea === 1) setDragOver1(false);
    if (uploadArea === 2) setDragOver2(false);
    toast.success(`Bild ${uploadArea === 1 ? 'für Titelbild' : 'für Referenz'} hochgeladen!`);
  };

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Profil-Einstellungen
            </CardTitle>
            <CardDescription className="text-muted-foreground/80">
              Verwalte deine Bilder und Preise • Personalisierung
            </CardDescription>
          </div>
          <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <User className="w-6 h-6 text-primary" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className={`relative space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Upload Areas */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Titelbild
            </Label>
            <div 
              className={`group/upload relative overflow-hidden border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer ${
                dragOver1 
                  ? 'border-primary bg-primary/10 scale-105' 
                  : 'border-border/60 hover:border-primary/60 hover:bg-primary/5'
              }`}
              onDragOver={(e) => handleDragOver(e, 1)}
              onDragLeave={() => handleDragLeave(1)}
              onDrop={(e) => handleDrop(e, 1)}
            >
              <div className="space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center transition-all duration-300 ${dragOver1 ? 'scale-110 rotate-12' : 'group-hover/upload:scale-110'}`}>
                  <ImageIcon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    {dragOver1 ? 'Jetzt loslassen!' : 'Klicke oder ziehe hier'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG bis zu 10MB
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/upload:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Referenzbild
            </Label>
            <div 
              className={`group/upload relative overflow-hidden border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer ${
                dragOver2 
                  ? 'border-accent bg-accent/10 scale-105' 
                  : 'border-border/60 hover:border-accent/60 hover:bg-accent/5'
              }`}
              onDragOver={(e) => handleDragOver(e, 2)}
              onDragLeave={() => handleDragLeave(2)}
              onDrop={(e) => handleDrop(e, 2)}
            >
              <div className="space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center transition-all duration-300 ${dragOver2 ? 'scale-110 rotate-12' : 'group-hover/upload:scale-110'}`}>
                  <Upload className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    {dragOver2 ? 'Jetzt loslassen!' : 'Klicke oder ziehe hier'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG bis zu 10MB
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover/upload:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </div>
        </div>
        
        {/* Form Fields */}
        <div className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="price" className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Euro className="w-4 h-4" />
              Preis pro 4-Bild-Set (€5-50)
            </Label>
            <div className="relative">
              <Input
                id="price"
                type="number"
                min="5"
                max="50"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-secondary/50 border-border/60 rounded-xl pl-10 h-12 text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-secondary/80 transition-all duration-200"
              />
              <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <span className="text-xs text-muted-foreground bg-secondary/80 px-2 py-1 rounded-md">
                  pro Set
                </span>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                <span>Speichere...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Profil speichern</span>
                <Sparkles className="w-4 h-4" />
              </div>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
