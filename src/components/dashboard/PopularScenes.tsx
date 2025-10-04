import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const scenesData = [
  { name: "Strand", sales: 1247, emoji: "🏖️", fullName: "Strand bei Sonnenuntergang" },
  { name: "Club", sales: 1089, emoji: "🪩", fullName: "Nachtclub" },
  { name: "Dinner", sales: 876, emoji: "🕯️", fullName: "Romantisches Dinner" },
  { name: "Dach", sales: 654, emoji: "🏙️", fullName: "Dachterrasse" },
  { name: "Festival", sales: 432, emoji: "🎪", fullName: "Musikfestival" },
];

export const PopularScenes = () => {
  return (
    <Card className="gradient-card border-primary/10 shadow-card">
      <CardHeader>
        <CardTitle>Beliebte Szenen</CardTitle>
        <CardDescription>Top 5 nach Generierungen</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={scenesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fontSize: 12 }}
            />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              formatter={(value: any, name: any, props: any) => [
                `${value} Generierungen`,
                `${props.payload.emoji} ${props.payload.fullName}`
              ]}
              labelFormatter={() => ""}
            />
            <Bar 
              dataKey="sales" 
              fill="hsl(var(--primary))" 
              radius={[8, 8, 0, 0]}
              className="hover:opacity-80 transition-opacity"
            />
          </BarChart>
        </ResponsiveContainer>
        
        {/* Legend with emojis */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          {scenesData.map((scene, index) => (
            <div key={index} className="flex items-center gap-2 p-2 bg-secondary/30 rounded-lg">
              <span className="text-base">{scene.emoji}</span>
              <div>
                <p className="font-medium">{scene.fullName}</p>
                <p className="text-muted-foreground">{scene.sales.toLocaleString()} mal</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
