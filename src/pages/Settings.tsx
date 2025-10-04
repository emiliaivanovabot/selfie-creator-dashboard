import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Upload, Camera, DollarSign, Palette, Clock, Users, CreditCard, Save, Trash2, Settings as SettingsIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  // Profile settings state
  const [profileData, setProfileData] = useState({
    stageName: "Emilia",
    bio: "AI companion creating personalized selfies for special moments. Choose your scene and pose, and let's create magical memories together!",
    headerImage: null as File | null,
    referenceImage: null as File | null,
    location: "Virtual Studio",
    experience: "AI-Powered",
    specialties: ["Beach Scenes", "Nightclub", "Wedding Party", "Rooftop City", "Festival"]
  });

  // API configuration state
  const [apiData, setApiData] = useState({
    falApiKey: "",
    falModelId: "fal-ai/face-swap",
    vercelBlobToken: "",
    n8nWebhookUrl: "https://ki.vemasys.de/webhook/34ab9b43-892d-4ff2-a424-d2365a1bb7ea",
    stripeConnected: false,
    maxConcurrentJobs: 5,
    defaultTimeout: 30
  });

  // Payment settings state
  const [paymentData, setPaymentData] = useState({
    paypalEmail: "",
    bankAccount: "",
    preferredMethod: "stripe",
    minPayout: 25,
    revenueShare: 85, // Emilia gets 85%, platform gets 15%
    pricePerSelfie: 15,
    currency: "USD",
    taxRate: 0.08
  });

  // Content settings state
  const [contentData, setContentData] = useState({
    availableScenes: ["Beach Sunset", "Nightclub", "Wedding Party", "Rooftop City", "Festival", "Romantic Dinner", "Coffee Shop", "Park Picnic"],
    availablePoses: ["Kiss on Cheek", "Smiling Together", "Arm on Shoulder", "Laughing Together", "Looking at Each Other", "Peace Sign", "Serious Pose"],
    workingHours: {
      start: "00:00",
      end: "23:59",
      timezone: "24/7 Available"
    },
    maxOrdersPerDay: 100,
    autoAcceptOrders: true,
    contentRating: "PG-13"
  });

  useEffect(() => {
    const mockUser = localStorage.getItem("mockUser");
    if (!mockUser) {
      navigate("/auth");
    }
  }, [navigate]);

  const handleImageUpload = (type: 'header' | 'reference', file: File) => {
    setProfileData(prev => ({
      ...prev,
      [type === 'header' ? 'headerImage' : 'referenceImage']: file
    }));
    
    toast({
      title: "Image uploaded",
      description: `${type === 'header' ? 'Header' : 'Reference'} image updated successfully`,
    });
  };

  const handleSaveProfile = () => {
    localStorage.setItem('creatorProfile', JSON.stringify(profileData));
    toast({
      title: "Profile saved",
      description: "Your profile settings have been updated",
    });
  };

  const handleSaveApi = () => {
    localStorage.setItem('apiConfig', JSON.stringify(apiData));
    toast({
      title: "API configuration saved",
      description: "Your API settings have been updated",
    });
  };

  const handleSavePayment = () => {
    localStorage.setItem('creatorPayment', JSON.stringify(paymentData));
    toast({
      title: "Payment settings saved",
      description: "Your payment preferences have been updated",
    });
  };

  const handleSaveContent = () => {
    localStorage.setItem('creatorContent', JSON.stringify(contentData));
    toast({
      title: "Content settings saved",
      description: "Your content preferences have been updated",
    });
  };

  const addSpecialty = (specialty: string) => {
    if (specialty && !profileData.specialties.includes(specialty)) {
      setProfileData(prev => ({
        ...prev,
        specialties: [...prev.specialties, specialty]
      }));
    }
  };

  const removeSpecialty = (specialty: string) => {
    setProfileData(prev => ({
      ...prev,
      specialties: prev.specialties.filter(s => s !== specialty)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 transition-all duration-500">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 animate-in fade-in duration-700">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigate("/dashboard")}
                variant="outline"
                size="icon"
                className="relative overflow-hidden transition-all duration-300 hover:scale-105 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent/80"
              >
                <ArrowLeft className="h-4 w-4 transition-transform hover:-translate-x-1 duration-300" />
              </Button>
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent animate-in slide-in-from-left duration-700">
                  {t('settings.title')}
                </h1>
                <p className="text-muted-foreground text-sm animate-in slide-in-from-left duration-700 delay-100">
                  Manage your creator profile and preferences
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 animate-in slide-in-from-right duration-700">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          <Tabs defaultValue="profile" className="space-y-6 animate-in slide-in-from-bottom duration-700 delay-200">
            <TabsList className="grid w-full grid-cols-5 bg-card/50 backdrop-blur-sm border border-border/50 p-1 rounded-xl">
              <TabsTrigger 
                value="profile" 
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-300 hover:bg-accent/50 rounded-lg"
              >
                <Camera className="h-4 w-4 mr-2" />
                {t('settings.profile')}
              </TabsTrigger>
              <TabsTrigger 
                value="api" 
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-300 hover:bg-accent/50 rounded-lg"
              >
                <DollarSign className="h-4 w-4 mr-2" />
                {t('settings.apiConfig')}
              </TabsTrigger>
              <TabsTrigger 
                value="payment" 
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-300 hover:bg-accent/50 rounded-lg"
              >
                <CreditCard className="h-4 w-4 mr-2" />
                {t('settings.payment')}
              </TabsTrigger>
              <TabsTrigger 
                value="content" 
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-300 hover:bg-accent/50 rounded-lg"
              >
                <Palette className="h-4 w-4 mr-2" />
                {t('settings.content')}
              </TabsTrigger>
              <TabsTrigger 
                value="appearance" 
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-300 hover:bg-accent/50 rounded-lg"
              >
                <SettingsIcon className="h-4 w-4 mr-2" />
                Appearance
              </TabsTrigger>
            </TabsList>

            {/* Profile Settings */}
            <TabsContent value="profile" className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <CardTitle className="text-foreground">Emilia's Profile</CardTitle>
                  <CardDescription>Configure your AI creator profile and reference images for selfie generation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="stageName">Creator Name</Label>
                      <Input
                        id="stageName"
                        value={profileData.stageName}
                        onChange={(e) => setProfileData(prev => ({ ...prev, stageName: e.target.value }))}
                        className="bg-background border-border"
                        placeholder="Emilia"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                      className="bg-background border-border"
                      rows={3}
                    />
                  </div>

                  <Button onClick={handleSaveProfile} className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    {t('settings.save')} Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appearance Settings */}
            <TabsContent value="appearance" className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <CardTitle className="text-foreground">Appearance & Language</CardTitle>
                  <CardDescription>Customize your dashboard theme and language preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Theme Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="p-4 border border-border/50 bg-background/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-foreground">Dark Mode</h4>
                            <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                          </div>
                          <ThemeToggle />
                        </div>
                      </Card>
                      
                      <Card className="p-4 border border-border/50 bg-background/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-foreground">Language</h4>
                            <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                          </div>
                          <LanguageToggle />
                        </div>
                      </Card>
                    </div>
                  </div>

                  <Button onClick={() => {
                    toast({
                      title: "Appearance settings saved",
                      description: "Your theme and language preferences have been saved",
                    });
                  }} className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    {t('settings.save')} Appearance Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* API Configuration Settings */}
            <TabsContent value="api" className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">API Configuration</CardTitle>
                  <CardDescription>Configure FAL.ai, Vercel Blob, and N8N webhook settings for AI selfie generation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Button onClick={handleSaveApi} className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    {t('settings.save')} API Configuration
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payment Settings */}
            <TabsContent value="payment" className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">Payment Settings</CardTitle>
                  <CardDescription>Configure Stripe integration and revenue settings for AI-Selfie orders</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Button onClick={handleSavePayment} className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    {t('settings.save')} Payment Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Content Settings */}
            <TabsContent value="content" className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">Content & Availability Settings</CardTitle>
                  <CardDescription>Manage your available scenes, poses, and working hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Button onClick={handleSaveContent} className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    {t('settings.save')} Content Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;