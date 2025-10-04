import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Settings, TrendingUp, Users, Eye, Sparkles, BarChart3, PieChart, Crown, Star, Heart, Trophy, DollarSign, Camera, Target, Zap, ArrowUpRight, ArrowDownRight, Download, Bell, UserCheck, Award } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const BasicDashboard = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [animatedRevenue, setAnimatedRevenue] = useState(0);
  const [animatedGenerations, setAnimatedGenerations] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const targetRevenue = 3247;
  const targetGenerations = 1847;

  // Updated scenes data with real business focus
  const popularScenesData = [
    { name: "Beach Sunset", value: 1247, revenue: 4988, color: "#10b981", trend: "+12%" },
    { name: "Nightclub", value: 1089, revenue: 4356, color: "#6366f1", trend: "+8%" },
    { name: "Romantic Dinner", value: 876, revenue: 3504, color: "#ec4899", trend: "+15%" },
    { name: "Rooftop City", value: 654, revenue: 2616, color: "#f59e0b", trend: "+5%" },
    { name: "Wedding Party", value: 532, revenue: 2128, color: "#8b5cf6", trend: "+18%" },
    { name: "Festival", value: 445, revenue: 1780, color: "#06b6d4", trend: "+22%" }
  ];

  const chartConfig = {
    value: {
      label: t('stats.generations'),
      color: "#3b82f6",
    },
  };

  // Enhanced revenue data with business insights
  const revenueData = [
    { day: "Mon", revenue: 312, orders: 78, avgOrder: 4.0 },
    { day: "Tue", revenue: 425, orders: 85, avgOrder: 5.0 },
    { day: "Wed", revenue: 389, orders: 97, avgOrder: 4.0 },
    { day: "Thu", revenue: 467, orders: 93, avgOrder: 5.0 },
    { day: "Fri", revenue: 598, orders: 119, avgOrder: 5.0 },
    { day: "Sat", revenue: 689, orders: 137, avgOrder: 5.0 },
    { day: "Sun", revenue: 606, orders: 121, avgOrder: 5.0 }
  ];
  
  // Business metrics
  const weeklyRevenue = revenueData.reduce((sum, day) => sum + day.revenue, 0);
  const weeklyGrowth = 18.5;
  const conversionRate = 8.7;
  const averageOrderValue = 4.9;

  const revenueChartConfig = {
    revenue: {
      label: t('stats.earnings') + " (€)",
      color: "#10b981",
    },
  };

  // Popular Poses data
  const popularPosesData = [
    { name: t('pose.smiling'), value: 2184, color: "#f59e0b" },
    { name: t('pose.sideways'), value: 1653, color: "#8b5cf6" },
    { name: t('pose.thoughtful'), value: 1278, color: "#ef4444" },
    { name: t('pose.sporty'), value: 892, color: "#06b6d4" },
    { name: t('pose.elegant'), value: 734, color: "#84cc16" }
  ];

  // Top Revenue Users data
  const topRevenueUsers = [
    { 
      name: "Sofia Martinez", 
      avatar: "SM", 
      revenue: 847, 
      growth: "+18%", 
      growthValue: 18,
      orders: 23, 
      lastOrder: "2 hours ago",
      tier: "VIP",
      isGrowthPositive: true
    },
    { 
      name: "Alex Chen", 
      avatar: "AC", 
      revenue: 692, 
      growth: "+24%", 
      growthValue: 24,
      orders: 19, 
      lastOrder: "5 hours ago",
      tier: "Premium",
      isGrowthPositive: true
    },
    { 
      name: "Maya Patel", 
      avatar: "MP", 
      revenue: 634, 
      growth: "+12%", 
      growthValue: 12,
      orders: 21, 
      lastOrder: "1 day ago",
      tier: "Premium",
      isGrowthPositive: true
    },
    { 
      name: "Jamie Rodriguez", 
      avatar: "JR", 
      revenue: 578, 
      growth: "-3%", 
      growthValue: -3,
      orders: 16, 
      lastOrder: "3 days ago",
      tier: "Regular",
      isGrowthPositive: false
    },
    { 
      name: "Taylor Kim", 
      avatar: "TK", 
      revenue: 523, 
      growth: "+9%", 
      growthValue: 9,
      orders: 14, 
      lastOrder: "1 day ago",
      tier: "Regular",
      isGrowthPositive: true
    }
  ];

  const posesChartConfig = {
    value: {
      label: t('stats.usage'),
      color: "#8b5cf6",
    },
  };

  useEffect(() => {
    const mockUser = localStorage.getItem("mockUser");
    if (!mockUser) {
      navigate("/auth");
    }
    
    // Simulate loading and animate numbers
    setTimeout(() => {
      setIsLoading(false);
      
      // Animate revenue counter
      const revenueInterval = setInterval(() => {
        setAnimatedRevenue(prev => {
          const increment = Math.ceil(targetRevenue / 50);
          const next = prev + increment;
          if (next >= targetRevenue) {
            clearInterval(revenueInterval);
            return targetRevenue;
          }
          return next;
        });
      }, 30);
      
      // Animate generations counter
      const generationsInterval = setInterval(() => {
        setAnimatedGenerations(prev => {
          const increment = Math.ceil(targetGenerations / 40);
          const next = prev + increment;
          if (next >= targetGenerations) {
            clearInterval(generationsInterval);
            return targetGenerations;
          }
          return next;
        });
      }, 35);
    }, 800);
  }, [navigate]);

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/20 transition-all duration-500">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent dark:from-emerald-900/10 pointer-events-none" />
      
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 animate-in fade-in duration-700">
        {/* Premium Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent animate-in slide-in-from-left duration-700">
                Welcome back, Emilia! ✨
              </h1>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 animate-pulse">
                Live
              </Badge>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-medium animate-in slide-in-from-left duration-700 delay-100">
              Your AI selfie empire is thriving
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 animate-in slide-in-from-left duration-700 delay-200">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Real-time metrics
              </span>
              <span>•</span>
              <span>Last updated: 2 min ago</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 animate-in slide-in-from-right duration-700">
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
            <Button variant="outline" size="sm" className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800">
              <Bell className="h-4 w-4" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
            <LanguageToggle />
            <ThemeToggle />
            <Button 
              onClick={handleSettingsClick}
              variant="outline" 
              size="icon"
              className="relative overflow-hidden transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
            >
              <Settings className="h-4 w-4 transition-transform hover:rotate-90 duration-300" />
            </Button>
          </div>
        </div>
        
        {/* Hero Revenue Section */}
        <div className="mb-10">
          <Card className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.01] bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/30 border-emerald-200/50 dark:border-emerald-800/50 backdrop-blur-sm animate-in slide-in-from-bottom duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-emerald-500/20 dark:bg-emerald-500/10">
                      <DollarSign className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">Your Earnings This Week</p>
                      <div className="flex items-center gap-2">
                        <p className="text-4xl lg:text-5xl font-black text-emerald-900 dark:text-emerald-100 tabular-nums">
                          €{isLoading ? '---' : animatedRevenue.toLocaleString()}
                        </p>
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 flex items-center gap-1">
                          <ArrowUpRight className="h-3 w-3" />
                          +{weeklyGrowth}%
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                    🚀 Revenue is climbing! You're on track for your best month yet.
                  </p>
                </div>
                
                <div className="lg:w-1/3">
                  <ChartContainer config={revenueChartConfig} className="h-[120px] w-full">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="heroRevenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="day" tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fill="url(#heroRevenueGradient)" />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Business Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {/* AI Generations Card */}
          <Card className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/25 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 animate-in slide-in-from-bottom duration-700 delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <Camera className="h-5 w-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 tabular-nums group-hover:text-emerald-600 transition-colors duration-300">
                    {isLoading ? '---' : animatedGenerations.toLocaleString()}
                  </p>
                  <p className="text-xs text-green-600 font-medium">+23% this week</p>
                </div>
              </div>
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300">
                AI Creations with Your Likeness
              </h3>
            </CardContent>
          </Card>

          {/* Conversion Rate Card */}
          <Card className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 animate-in slide-in-from-bottom duration-700 delay-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Target className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors duration-300">
                    {conversionRate}%
                  </p>
                  <p className="text-xs text-green-600 font-medium">+1.2% this week</p>
                </div>
              </div>
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300">
                Visitors Who Became Customers
              </h3>
              <div className="mt-3">
                <Progress value={conversionRate * 10} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Average Order Value Card */}
          <Card className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 animate-in slide-in-from-bottom duration-700 delay-400">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                  <TrendingUp className="h-5 w-5 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-purple-600 transition-colors duration-300">
                    €{averageOrderValue}
                  </p>
                  <p className="text-xs text-green-600 font-medium">+€0.3 this week</p>
                </div>
              </div>
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300">
                Average Revenue Per Fan
              </h3>
            </CardContent>
          </Card>
          
          {/* Growth Momentum Card */}
          <Card className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/25 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 animate-in slide-in-from-bottom duration-700 delay-500">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Zap className="h-5 w-5 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 transition-colors duration-300">
                    8,932
                  </p>
                  <p className="text-xs text-green-600 font-medium">+18% this week</p>
                </div>
              </div>
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300">
                Page Visits This Week
              </h3>
            </CardContent>
          </Card>
        </div>

        {/* Business Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Revenue by Scene Performance */}
          <Card className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-xl hover:shadow-emerald-500/20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 animate-in slide-in-from-left duration-700 delay-500">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative z-10 pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <BarChart3 className="h-5 w-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors duration-300">
                      Your Top Revenue Drivers
                    </CardTitle>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Scenes generating the most income</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  This Week
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 pt-0">
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <BarChart data={popularScenesData}>
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={0}
                  />
                  <YAxis 
                    tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                    label={{ value: 'Revenue (€)', angle: -90, position: 'insideLeft' }}
                  />
                  <ChartTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border shadow-lg">
                            <p className="font-medium">{label}</p>
                            <p className="text-emerald-600">€{data.revenue.toLocaleString()} revenue</p>
                            <p className="text-slate-600">{data.value} generations</p>
                            <p className="text-green-600 text-sm">{data.trend} growth</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                    cursor={{ fill: 'rgba(16, 185, 129, 0.1)' }}
                  />
                  <Bar 
                    dataKey="revenue" 
                    fill="#10b981"
                    radius={[6, 6, 0, 0]}
                    className="transition-all duration-300 hover:opacity-80"
                  />
                </BarChart>
              </ChartContainer>
              
              {/* Business Insights */}
              <div className="mt-4 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-500/20">
                    <Sparkles className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
                      🏆 Beach Sunset is your star performer!
                    </p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300">
                      Generating €4,988 this week (+12% growth). Consider promoting similar outdoor scenes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Journey & Insights */}
          <Card className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 animate-in slide-in-from-right duration-700 delay-600">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative z-10 pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Users className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors duration-300">
                      Customer Journey Funnel
                    </CardTitle>
                    <p className="text-sm text-slate-600 dark:text-slate-400">How visitors become paying customers</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  Live Data
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 pt-0 space-y-6">
              {/* Funnel Steps */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">Page Visitors</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">People who visited your page</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-slate-900 dark:text-slate-100">8,932</p>
                    <p className="text-xs text-green-600">+18% this week</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium text-emerald-900 dark:text-emerald-100">Photo Uploads</p>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300">Engaged users who uploaded selfies</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-emerald-900 dark:text-emerald-100">2,147</p>
                    <p className="text-xs text-emerald-600">24% conversion</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium text-purple-900 dark:text-purple-100">Paying Customers</p>
                      <p className="text-sm text-purple-700 dark:text-purple-300">Users who completed purchase</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-purple-900 dark:text-purple-100">776</p>
                    <p className="text-xs text-purple-600">8.7% conversion</p>
                  </div>
                </div>
              </div>
              
              {/* Business Insight */}
              <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-amber-500/20">
                    <Target className="h-4 w-4 text-amber-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
                      🎥 Opportunity: Improve Upload-to-Purchase Flow
                    </p>
                    <p className="text-xs text-amber-700 dark:text-amber-300">
                      36% of users upload photos but don't purchase. Consider adding preview incentives or limited-time offers.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Revenue Customers Section */}
        <div className="mb-10">
          <Card className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-xl hover:shadow-emerald-500/20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 animate-in slide-in-from-bottom duration-700 delay-700">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative z-10 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <Trophy className="h-5 w-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors duration-300">
                      Top Revenue Customers
                    </CardTitle>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Your highest-value customers this week</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  Live
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 pt-0">
              <div className="space-y-2">
                {topRevenueUsers.map((user, index) => (
                  <div 
                    key={user.name}
                    className="group/item flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-slate-50 to-slate-100/50 dark:from-slate-800 dark:to-slate-700/50 border border-slate-200/50 dark:border-slate-600/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-md hover:shadow-emerald-500/10 hover:scale-[1.01] min-h-[48px]"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Left side: Rank + Name + Orders */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {/* Compact Rank Badge */}
                      <div className={`
                        flex items-center justify-center w-6 h-6 rounded-full font-bold text-xs transition-all duration-300 group-hover/item:scale-110 flex-shrink-0
                        ${index === 0 ? 'bg-yellow-500 text-white' : 
                          index === 1 ? 'bg-gray-400 text-white' : 
                          index === 2 ? 'bg-amber-600 text-white' : 
                          'bg-slate-300 dark:bg-slate-600 text-slate-700 dark:text-slate-300'}
                      `}>
                        {index + 1}
                      </div>

                      {/* Two-Line User Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-base text-slate-900 dark:text-slate-100 group-hover/item:text-emerald-600 transition-colors duration-300 truncate">
                          {user.name}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge 
                            variant="secondary" 
                            className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 text-xs px-1.5 py-0.5 h-4"
                        >
                          {user.orders} Orders
                        </Badge>
                        <span className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          • Last seen: {user.lastOrder}
                        </span>
                        </div>
                      </div>
                    </div>

                    {/* Right side: Revenue + Growth - Single Line */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-100 tabular-nums group-hover/item:text-emerald-600 transition-colors duration-300">
                        €{user.revenue.toLocaleString()}
                      </p>
                      <Badge 
                        className={`flex items-center gap-1 h-5 text-xs px-1.5 ${
                          user.isGrowthPositive 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' 
                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        }`}
                      >
                        {user.isGrowthPositive ? (
                          <ArrowUpRight className="h-2.5 w-2.5" />
                        ) : (
                          <ArrowDownRight className="h-2.5 w-2.5" />
                        )}
                        {user.growth}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Insights */}
              <div className="mt-6 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-500/20">
                    <Award className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
                      💎 Sofia Martinez is your top customer this week!
                    </p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300">
                      She's spending €847 (+18% growth) with 23 orders. Consider offering her exclusive early access to new scenes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center animate-in slide-in-from-bottom duration-700 delay-600">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            ✨ Keep creating amazing content, Emilia! Your AI selfie business is thriving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicDashboard;