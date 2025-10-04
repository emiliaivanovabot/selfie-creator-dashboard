import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Euro, TrendingUp, ShoppingBag, Users, MousePointer, Share2, Zap, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

export const StatsOverview = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      title: "Umsatz Heute",
      value: "€247",
      change: "+12%",
      icon: Euro,
      color: "text-success",
      bgGradient: "from-success/10 to-success/5",
      iconBg: "bg-success/20",
    },
    {
      title: "Bildgenerierungen",
      value: "1,342",
      change: "+18%",
      icon: Zap,
      color: "text-yellow-500",
      bgGradient: "from-yellow-500/10 to-yellow-500/5",
      iconBg: "bg-yellow-500/20",
    },
    {
      title: "Seitenbesuche",
      value: "8,932",
      change: "+8%",
      icon: MousePointer,
      color: "text-blue-500",
      bgGradient: "from-blue-500/10 to-blue-500/5",
      iconBg: "bg-blue-500/20",
    },
    {
      title: "Social Shares",
      value: "2,847",
      change: "+34%",
      icon: Share2,
      color: "text-pink-500",
      bgGradient: "from-pink-500/10 to-pink-500/5",
      iconBg: "bg-pink-500/20",
    },
    {
      title: "Conversion Rate",
      value: "4.2%",
      change: "+0.8%",
      icon: TrendingUp,
      color: "text-accent",
      bgGradient: "from-accent/10 to-accent/5",
      iconBg: "bg-accent/20",
    },
    {
      title: "Revenue per User",
      value: "€12.40",
      change: "+5.2%",
      icon: Users,
      color: "text-green-500",
      bgGradient: "from-green-500/10 to-green-500/5",
      iconBg: "bg-green-500/20",
    },
    {
      title: "Wiederkehrende User",
      value: "67%",
      change: "+9%",
      icon: RotateCcw,
      color: "text-purple-500",
      bgGradient: "from-purple-500/10 to-purple-500/5",
      iconBg: "bg-purple-500/20",
    },
    {
      title: "Verkäufte Sets",
      value: "89",
      change: "+23%",
      icon: ShoppingBag,
      color: "text-primary",
      bgGradient: "from-primary/10 to-primary/5",
      iconBg: "bg-primary/20",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          className={`group relative overflow-hidden border-border/50 bg-gradient-to-br ${stat.bgGradient} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: `${index * 150}ms`,
          }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Glow effect */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.bgGradient} rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
          
          <CardHeader className="relative flex flex-row items-center justify-between pb-3 space-y-0">
            <CardTitle className="text-sm font-semibold text-muted-foreground/90 tracking-wide">
              {stat.title}
            </CardTitle>
            <div className={`w-10 h-10 ${stat.iconBg} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
          </CardHeader>
          
          <CardContent className="relative space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold text-success px-2 py-1 bg-success/10 rounded-full">
                {stat.change}
              </span>
              <span className="text-xs text-muted-foreground/70">vs. letzte Woche</span>
            </div>
            
            {/* Animated progress bar */}
            <div className="w-full h-1 bg-secondary/30 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${stat.bgGradient} rounded-full transition-all duration-1000 ${
                  isVisible ? 'w-full' : 'w-0'
                }`}
                style={{
                  transitionDelay: `${index * 150 + 300}ms`,
                }}
              ></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
