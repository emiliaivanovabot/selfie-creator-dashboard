import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { TrendingUp, Euro } from "lucide-react";
import { useEffect, useState } from "react";

const data = [
  { name: "Mo", revenue: 145, target: 200 },
  { name: "Di", revenue: 198, target: 220 },
  { name: "Mi", revenue: 223, target: 240 },
  { name: "Do", revenue: 267, target: 250 },
  { name: "Fr", revenue: 312, target: 300 },
  { name: "Sa", revenue: 289, target: 280 },
  { name: "So", revenue: 247, target: 260 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-xl">
        <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground">Einnahmen:</span>
            <span className="text-sm font-bold text-foreground">€{payload[0].value}</span>
          </div>
          {payload[1] && (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent/60"></div>
              <span className="text-sm text-muted-foreground">Ziel:</span>
              <span className="text-sm font-bold text-foreground">€{payload[1].value}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export const RevenueChart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const avgRevenue = Math.round(totalRevenue / data.length);
  const growth = Math.round(((data[data.length - 1].revenue - data[0].revenue) / data[0].revenue) * 100);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500">
      {/* Enhanced background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Einnahmen-Verlauf
            </CardTitle>
            <CardDescription className="text-muted-foreground/80">
              Letzte 7 Tage • Performance-Tracking
            </CardDescription>
          </div>
          <div className="w-12 h-12 bg-primary/15 backdrop-blur-sm border border-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="text-center space-y-1">
            <p className="text-xs text-muted-foreground/70 uppercase tracking-wider">Total</p>
            <p className="text-lg font-bold text-foreground">€{totalRevenue}</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-xs text-muted-foreground/70 uppercase tracking-wider">Ø Täglich</p>
            <p className="text-lg font-bold text-foreground">€{avgRevenue}</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-xs text-muted-foreground/70 uppercase tracking-wider">Wachstum</p>
            <p className={`text-lg font-bold ${growth >= 0 ? 'text-success' : 'text-destructive'}`}>
              {growth >= 0 ? '+' : ''}{growth}%
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="hsl(var(--border))" 
                strokeOpacity={0.4}
                vertical={false}
              />
              
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                dy={10}
              />
              
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `€${value}`}
                dx={-10}
              />
              
              <Tooltip content={<CustomTooltip />} />
              
              {/* Target area */}
              <Area
                type="monotone"
                dataKey="target"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="url(#targetGradient)"
                strokeOpacity={0.8}
              />
              
              {/* Revenue area */}
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                strokeWidth={4}
                fill="url(#revenueGradient)"
                dot={{ 
                  fill: "hsl(var(--primary))", 
                  strokeWidth: 3, 
                  stroke: "hsl(var(--card))",
                  r: 5
                }}
                activeDot={{ 
                  r: 10, 
                  stroke: "hsl(var(--primary))",
                  strokeWidth: 4,
                  fill: "hsl(var(--card))",
                  filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.5))"
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-muted-foreground">Tatsächliche Einnahmen</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-accent opacity-60"></div>
            <span className="text-muted-foreground">Zielwerte</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
