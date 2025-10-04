import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsOverview } from "@/components/dashboard/StatsOverview";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { PopularScenes } from "@/components/dashboard/PopularScenes";
import { PopularPoses } from "@/components/dashboard/PopularPoses";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Heart, Users } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    // Check for mock user session
    const mockUser = localStorage.getItem("mockUser");
    if (!mockUser) {
      navigate("/auth");
    }
    setLoading(false);
  };


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8 space-y-8">
        
        {/* Original Stats Overview */}
        <StatsOverview />
        
        {/* Revenue Chart and Popular Scenes/Poses */}
        <div className="grid lg:grid-cols-2 gap-8">
          <RevenueChart />
          <PopularScenes />
        </div>

        {/* Popular Poses and additional analytics */}
        <div className="grid lg:grid-cols-2 gap-8">
          <PopularPoses />
          {/* Placeholder for future analytics component */}
          <Card className="gradient-card border-primary/10 shadow-card">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Performance Insights</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>🏖️ Strand-Szenen generieren 23% mehr Einnahmen</p>
                    <p>😊 "Zusammen Lächeln" ist die beliebteste Pose</p>
                    <p>🕯️ Romantische Szenen haben 85% Wiederkehr-Rate</p>
                    <p>📈 Durchschnittlich 4,2 Bilder pro Session</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>


        {/* Original Profile Section */}
        <ProfileSection />
      </main>
    </div>
  );
};

export default Dashboard;
