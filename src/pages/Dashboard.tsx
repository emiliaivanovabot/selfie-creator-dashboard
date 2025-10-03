import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsOverview } from "@/components/dashboard/StatsOverview";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { ContentAnalytics } from "@/components/dashboard/ContentAnalytics";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
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
        <StatsOverview />
        <div className="grid lg:grid-cols-2 gap-8">
          <RevenueChart />
          <ContentAnalytics />
        </div>
        <ProfileSection />
      </main>
    </div>
  );
};

export default Dashboard;
