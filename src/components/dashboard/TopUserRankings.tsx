import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Crown, Star, TrendingUp, Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface RankingUser {
  id: string;
  name: string;
  avatar: string;
  value: string;
  change: string;
  rank: number;
}

interface RankingCategory {
  title: string;
  icon: any;
  color: string;
  bgGradient: string;
  iconBg: string;
  users: RankingUser[];
}

export const TopUserRankings = () => {
  const [isVisible, setIsVisible] = useState(false);

  const rankings: RankingCategory[] = [
    {
      title: "🥇 Umsatz-Champions",
      icon: Crown,
      color: "text-yellow-500",
      bgGradient: "from-yellow-500/10 to-yellow-500/5",
      iconBg: "bg-yellow-500/20",
      users: [
        { id: "1", name: "Jennifer K.", avatar: "👩‍💼", value: "€847", change: "+12%", rank: 1 },
        { id: "2", name: "Marcus P.", avatar: "👨‍💻", value: "€632", change: "+8%", rank: 2 },
        { id: "3", name: "Sarah M.", avatar: "👩‍🎨", value: "€589", change: "+15%", rank: 3 },
      ]
    },
    {
      title: "🥈 Power-User",
      icon: TrendingUp,
      color: "text-blue-500",
      bgGradient: "from-blue-500/10 to-blue-500/5",
      iconBg: "bg-blue-500/20",
      users: [
        { id: "1", name: "Lisa V.", avatar: "👩‍🚀", value: "156 Gen.", change: "+23%", rank: 1 },
        { id: "2", name: "Tim R.", avatar: "👨‍🎨", value: "134 Gen.", change: "+18%", rank: 2 },
        { id: "3", name: "Anna K.", avatar: "👩‍💻", value: "127 Gen.", change: "+14%", rank: 3 },
      ]
    },
    {
      title: "🥉 Social Influencer",
      icon: Heart,
      color: "text-pink-500",
      bgGradient: "from-pink-500/10 to-pink-500/5",
      iconBg: "bg-pink-500/20",
      users: [
        { id: "1", name: "Emma S.", avatar: "👩‍🎤", value: "2.3k Shares", change: "+45%", rank: 1 },
        { id: "2", name: "David L.", avatar: "👨‍🎭", value: "1.8k Shares", change: "+32%", rank: 2 },
        { id: "3", name: "Maya B.", avatar: "👩‍🎪", value: "1.5k Shares", change: "+28%", rank: 3 },
      ]
    },
    {
      title: "🏆 Treue Kunden",
      icon: Star,
      color: "text-purple-500",
      bgGradient: "from-purple-500/10 to-purple-500/5",
      iconBg: "bg-purple-500/20",
      users: [
        { id: "1", name: "Robert H.", avatar: "👨‍💼", value: "187 Tage", change: "Kunde seit", rank: 1 },
        { id: "2", name: "Julia F.", avatar: "👩‍🔬", value: "156 Tage", change: "Kunde seit", rank: 2 },
        { id: "3", name: "Alex M.", avatar: "👨‍🚀", value: "143 Tage", change: "Kunde seit", rank: 3 },
      ]
    },
    {
      title: "⭐ Neue Stars",
      icon: Trophy,
      color: "text-green-500",
      bgGradient: "from-green-500/10 to-green-500/5",
      iconBg: "bg-green-500/20",
      users: [
        { id: "1", name: "Sophie T.", avatar: "👩‍🎨", value: "89% Conv.", change: "Diese Woche", rank: 1 },
        { id: "2", name: "Jonas W.", avatar: "👨‍🎪", value: "76% Conv.", change: "Diese Woche", rank: 2 },
        { id: "3", name: "Mia C.", avatar: "👩‍🎭", value: "71% Conv.", change: "Diese Woche", rank: 3 },
      ]
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return `#${rank}`;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
      {rankings.map((category, categoryIndex) => (
        <Card 
          key={categoryIndex}
          className={`group relative overflow-hidden border-border/50 bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: `${categoryIndex * 150}ms`,
          }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Glow effect */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.bgGradient} rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
          
          <CardHeader className="relative flex flex-row items-center justify-between pb-3 space-y-0">
            <CardTitle className="text-sm font-semibold text-muted-foreground/90 tracking-wide">
              {category.title}
            </CardTitle>
            <div className={`w-10 h-10 ${category.iconBg} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
              <category.icon className={`w-5 h-5 ${category.color}`} />
            </div>
          </CardHeader>
          
          <CardContent className="relative space-y-4">
            {category.users.map((user, userIndex) => (
              <div 
                key={user.id}
                className={`p-3 sm:p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-[1.02] ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-4'
                }`}
                style={{
                  transitionDelay: `${categoryIndex * 150 + userIndex * 100 + 200}ms`,
                }}
              >
                {/* First Line: Rank + Name + Badge ————— Revenue + Growth */}
                <div className="flex items-center justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <span className="text-lg flex-shrink-0">{getRankIcon(user.rank)}</span>
                    <span className="text-base flex-shrink-0">{user.avatar}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-foreground truncate leading-tight">{user.name}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 min-w-0">
                    <p className="text-sm font-bold text-foreground whitespace-nowrap">{user.value}</p>
                  </div>
                </div>
                
                {/* Second Line: Last Action Subtitle */}
                <div className="ml-7 sm:ml-9 mt-1">
                  <p className="text-xs text-muted-foreground/80 leading-tight font-medium">{user.change}</p>
                </div>
              </div>
            ))}
            
            {/* Animated progress bar */}
            <div className="w-full h-1 bg-secondary/30 rounded-full overflow-hidden mt-4">
              <div 
                className={`h-full bg-gradient-to-r ${category.bgGradient} rounded-full transition-all duration-1000 ${
                  isVisible ? 'w-full' : 'w-0'
                }`}
                style={{
                  transitionDelay: `${categoryIndex * 150 + 500}ms`,
                }}
              ></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};