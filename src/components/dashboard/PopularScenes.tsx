import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";
import { Camera, TrendingUp, Palmtree, Disc3, Candle, Building, Music } from "lucide-react";
import { useEffect, useState } from "react";

const scenesData = [
  { 
    name: "Beach", 
    sales: 1247, 
    icon: Palmtree, 
    fullName: "Beach Sunset", 
    fill: "var(--color-beach)",
    gradient: "from-amber-500/15 to-orange-500/8 dark:from-amber-400/15 dark:to-orange-400/8",
    iconColor: "text-amber-400" 
  },
  { 
    name: "Nightclub", 
    sales: 1089, 
    icon: Disc3, 
    fullName: "Nightclub Scene", 
    fill: "var(--color-nightclub)",
    gradient: "from-purple-500/15 to-violet-500/8 dark:from-purple-400/15 dark:to-violet-400/8",
    iconColor: "text-purple-400" 
  },
  { 
    name: "Wedding", 
    sales: 876, 
    icon: Candle, 
    fullName: "Wedding Party", 
    fill: "var(--color-wedding)",
    gradient: "from-rose-500/15 to-pink-500/8 dark:from-rose-400/15 dark:to-pink-400/8",
    iconColor: "text-rose-400" 
  },
  { 
    name: "Rooftop", 
    sales: 654, 
    icon: Building, 
    fullName: "Rooftop City", 
    fill: "var(--color-rooftop)",
    gradient: "from-blue-500/15 to-cyan-500/8 dark:from-blue-400/15 dark:to-cyan-400/8",
    iconColor: "text-blue-400" 
  },
  { 
    name: "Festival", 
    sales: 432, 
    icon: Music, 
    fullName: "Music Festival", 
    fill: "var(--color-festival)",
    gradient: "from-emerald-500/15 to-green-500/8 dark:from-emerald-400/15 dark:to-green-400/8",
    iconColor: "text-emerald-400" 
  },
];

const chartConfig = {
  beach: {
    label: "Beach",
    color: "hsl(var(--chart-5))",
  },
  nightclub: {
    label: "Nightclub",
    color: "hsl(var(--chart-4))",
  },
  wedding: {
    label: "Wedding",
    color: "hsl(var(--chart-2))",
  },
  rooftop: {
    label: "Rooftop",
    color: "hsl(var(--chart-3))",
  },
  festival: {
    label: "Festival",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <data.icon className={`w-4 h-4 ${data.iconColor}`} />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{data.fullName}</p>
            <p className="text-xs text-muted-foreground">Popular Scene</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ 
              backgroundColor: `var(--color-${data.name.toLowerCase()})`,
              border: '1px solid hsl(var(--border))',
              boxShadow: `0 0 8px var(--color-${data.name.toLowerCase()})20`
            }}
          ></div>
          <span className="text-sm font-bold text-foreground">{payload[0].value.toLocaleString()} Generated</span>
        </div>
      </div>
    );
  }
  return null;
};

export const PopularScenes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500">
      {/* Enhanced background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/3 via-transparent to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Popular Scenes
            </CardTitle>
            <CardDescription className="text-muted-foreground/80">
              Top 5 AI-Selfie Scenes • Most Generated
            </CardDescription>
          </div>
          <div className="w-12 h-12 bg-amber-500/15 backdrop-blur-sm border border-amber-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Camera className="w-6 h-6 text-amber-400" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative space-y-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <ChartContainer config={chartConfig}>
            <BarChart data={scenesData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
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
                tickFormatter={(value) => `${value}`}
                dx={-10}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar 
                dataKey="sales" 
                radius={[8, 8, 0, 0]}
                className="hover:opacity-80 transition-all duration-300"
              >
                {scenesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`var(--color-${entry.name.toLowerCase()})`} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
        
        {/* Enhanced legend with icons and improved dark mode contrast */}
        <div className="grid grid-cols-1 gap-3">
          {scenesData.map((scene, index) => (
            <div 
              key={index} 
              className={`group/item relative overflow-hidden p-4 bg-gradient-to-r ${scene.gradient} rounded-xl border border-border/40 hover:border-border/80 transition-all duration-300 cursor-pointer hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{
                transitionDelay: `${index * 100 + 800}ms`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/15 flex items-center justify-center transform transition-transform duration-300 group-hover/item:scale-110">
                    <scene.icon className={`w-6 h-6 ${scene.iconColor}`} />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">{scene.fullName}</p>
                    <p className="text-sm text-muted-foreground/90">{scene.sales.toLocaleString()} Generated</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-lg font-bold text-foreground">{scene.sales.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground/80 uppercase tracking-wider">Generated</div>
                  </div>
                  <div 
                    className="w-2 h-12 rounded-full transition-all duration-300 border border-white/20"
                    style={{ 
                      backgroundColor: `var(--color-${scene.name.toLowerCase()})`,
                      boxShadow: `0 0 12px var(--color-${scene.name.toLowerCase()})40`
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Enhanced hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${scene.gradient} opacity-0 group-hover/item:opacity-70 transition-opacity duration-300 rounded-xl`}></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};