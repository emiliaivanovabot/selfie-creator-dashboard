import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Casual", sales: 45 },
  { name: "Business", sales: 38 },
  { name: "Sport", sales: 32 },
  { name: "Elegant", sales: 28 },
  { name: "Beach", sales: 25 },
];

export const ContentAnalytics = () => {
  return (
    <Card className="gradient-card border-primary/10 shadow-card">
      <CardHeader>
        <CardTitle>Beliebte Szenen</CardTitle>
        <CardDescription>Top 5 nach Verkäufen</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="sales" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
