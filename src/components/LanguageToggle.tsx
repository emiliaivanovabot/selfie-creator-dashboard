import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="relative overflow-hidden transition-all duration-300 hover:scale-105 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent/80"
    >
      <Languages className="h-4 w-4 mr-2" />
      <span className="font-medium">{language === 'en' ? 'DE' : 'EN'}</span>
    </Button>
  );
};

export default LanguageToggle;