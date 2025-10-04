import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const posesData = [
  { name: "Lächeln", sales: 1456, emoji: "😊", fullName: "Zusammen Lächeln" },
  { name: "Kuss", sales: 1234, emoji: "😘", fullName: "Kuss auf die Wange" },
  { name: "Umarmung", sales: 987, emoji: "🤗", fullName: "Freundschaftliche Umarmung" },
  { name: "Händchen", sales: 765, emoji: "🤝", fullName: "Händchen halten" },
  { name: "Lachen", sales: 543, emoji: "😂", fullName: "Zusammen lachen" },
];

export const PopularPoses = () => {
  return (
    <Card className="gradient-card border-primary/10 shadow-card">
      <CardHeader>
        <CardTitle>Beliebte Posen</CardTitle>
        <CardDescription>Top 5 nach Auswahl</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={posesData}>
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
                `${value} mal gewählt`,
                `${props.payload.emoji} ${props.payload.fullName}`
              ]}
              labelFormatter={() => ""}
            />
            <Bar 
              dataKey="sales" 
              fill="hsl(var(--accent))" 
              radius={[8, 8, 0, 0]}
              className="hover:opacity-80 transition-opacity"
            />
          </BarChart>
        </ResponsiveContainer>
        
        {/* Legend with emojis */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          {posesData.map((pose, index) => (
            <div key={index} className="flex items-center gap-2 p-2 bg-secondary/30 rounded-lg">
              <span className="text-base">{pose.emoji}</span>
              <div>
                <p className="font-medium">{pose.fullName}</p>
                <p className="text-muted-foreground">{pose.sales.toLocaleString()} mal</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
