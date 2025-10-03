import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

export const ProfileSection = () => {
  const [price, setPrice] = useState("25");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    toast.success("Profil gespeichert!");
  };

  return (
    <Card className="gradient-card border-primary/10 shadow-card">
      <CardHeader>
        <CardTitle>Profil-Einstellungen</CardTitle>
        <CardDescription>Verwalte deine Bilder und Preise</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label>Titelbild</Label>
              <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-smooth cursor-pointer">
                <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Klicke zum Hochladen</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <Label>Referenzbild</Label>
              <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-smooth cursor-pointer">
                <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Klicke zum Hochladen</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="price">Preis pro 4-Bild-Set (€5-50)</Label>
            <Input
              id="price"
              type="number"
              min="5"
              max="50"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-secondary border-border"
            />
          </div>
          
          <div>
            <Label htmlFor="description">Profil-Beschreibung</Label>
            <Textarea
              id="description"
              placeholder="Beschreibe dich und deine Inhalte..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-secondary border-border min-h-[120px]"
            />
          </div>
          
          <Button onClick={handleSave} className="gradient-primary">
            Profil speichern
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
