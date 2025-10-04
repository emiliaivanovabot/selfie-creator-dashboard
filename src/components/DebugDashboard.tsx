// Debug Dashboard - Adding components one by one to isolate the issue
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const DebugDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for mock user session
    const mockUser = localStorage.getItem("mockUser");
    if (!mockUser) {
      navigate("/auth");
    }
    setLoading(false);
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <DashboardHeader />
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-white text-4xl">DEBUG: Header Only - Works?</div>
      </div>
    </div>
  );
};

export default DebugDashboard;