import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mo", revenue: 145 },
  { name: "Di", revenue: 198 },
  { name: "Mi", revenue: 223 },
  { name: "Do", revenue: 267 },
  { name: "Fr", revenue: 312 },
  { name: "Sa", revenue: 289 },
  { name: "So", revenue: 247 },
];

export const RevenueChart = () => {
  return (
    <Card className="gradient-card border-primary/10 shadow-card">
      <CardHeader>
        <CardTitle>Einnahmen-Verlauf</CardTitle>
        <CardDescription>Letzte 7 Tage</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
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
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--primary))", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
