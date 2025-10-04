import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsOverview } from "@/components/dashboard/StatsOverview";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { PopularScenes } from "@/components/dashboard/PopularScenes";
import { PopularPoses } from "@/components/dashboard/PopularPoses";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { TopUserRankings } from "@/components/dashboard/TopUserRankings";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

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
    // Trigger page load animation
    setTimeout(() => setIsPageLoaded(true), 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/50">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div className="relative w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/90 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <DashboardHeader />
      
      <main className={`relative container mx-auto px-4 py-8 space-y-10 transition-all duration-1000 ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Stats Overview with enhanced spacing */}
        <section className="space-y-6">
          <div className={`transition-all duration-700 ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '200ms'}}>
            <h2 className="text-2xl font-bold text-foreground mb-2">Dashboard Übersicht</h2>
            <p className="text-muted-foreground/80 mb-6">Verfolge deine Performance und Einnahmen in Echtzeit</p>
          </div>
          <StatsOverview />
        </section>
        
        {/* Revenue Chart and Popular Scenes */}
        <section className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '400ms'}}>
          <RevenueChart />
          <PopularScenes />
        </section>

        {/* Top User Rankings */}
        <section className={`space-y-6 transition-all duration-700 ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '600ms'}}>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">🏆 Top Performer</h2>
            <p className="text-muted-foreground/80 mb-6">Die erfolgreichsten User dieser Woche</p>
          </div>
          <TopUserRankings />
        </section>

        {/* Popular Poses */}
        <section className={`transition-all duration-700 ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '700ms'}}>
          <PopularPoses />
        </section>

        {/* Profile Section */}
        <section className={`transition-all duration-700 ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '900ms'}}>
          <ProfileSection />
        </section>
        
      </main>
    </div>
  );
};

export default Dashboard;
