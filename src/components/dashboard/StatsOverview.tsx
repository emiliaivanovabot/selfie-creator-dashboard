import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Euro, TrendingUp, ShoppingBag, Users } from "lucide-react";

export const StatsOverview = () => {
  const stats = [
    {
      title: "Heute",
      value: "€247",
      change: "+12%",
      icon: Euro,
      color: "text-success",
    },
    {
      title: "Diese Woche",
      value: "€1,432",
      change: "+8%",
      icon: TrendingUp,
      color: "text-accent",
    },
    {
      title: "Verkäufte Sets",
      value: "89",
      change: "+23%",
      icon: ShoppingBag,
      color: "text-primary",
    },
    {
      title: "Conversion",
      value: "4.2%",
      change: "+0.8%",
      icon: Users,
      color: "text-accent",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="gradient-card border-primary/10 shadow-card transition-smooth hover:shadow-glow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`w-4 h-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-success mt-1">
              {stat.change} vs. letzte Woche
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
