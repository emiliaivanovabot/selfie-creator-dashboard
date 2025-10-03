import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: TrendingUp,
      title: "70% Revenue Share",
      description: "Behalte 70% deiner Einnahmen - faire Konditionen für Creator",
    },
    {
      icon: Zap,
      title: "KI-Powered",
      description: "Modernste KI-Technologie für realistische, hochwertige Bilder",
    },
    {
      icon: Shield,
      title: "Sicher & Privat",
      description: "Deine Daten sind geschützt und bleiben vertraulich",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Creator Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Verdiene mit deinen
            <br />
            KI-Selfies
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Erstelle einzigartige KI-generierte Selfies und verkaufe sie an deine Community.
            Behalte 70% der Einnahmen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="gradient-primary shadow-glow text-lg px-8"
            >
              Als Model starten
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/auth")}
              className="border-primary/20 text-lg px-8"
            >
              Mehr erfahren
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Warum unsere Plattform?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="gradient-card p-8 rounded-xl border border-primary/10 shadow-card transition-smooth hover:shadow-glow"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="gradient-card rounded-2xl p-12 text-center border border-primary/20 shadow-glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit durchzustarten?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Erstelle dein Creator-Profil und starte noch heute mit dem Verkauf
              deiner KI-generierten Selfies.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="gradient-primary shadow-glow text-lg px-8"
            >
              Jetzt loslegen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
