import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  FileText, 
  Search, 
  Bell, 
  Calendar,
  TrendingUp,
  Award,
  BookOpen
} from "lucide-react";

const Students = () => {
  const features = [
    {
      icon: User,
      title: "Digital Profile",
      description: "Create and maintain your comprehensive digital profile with resume builder, skills assessment, and portfolio showcase."
    },
    {
      icon: Search,
      title: "Smart Job Search",
      description: "AI-powered job recommendations based on your skills, interests, and academic performance."
    },
    {
      icon: FileText,
      title: "One-Click Applications",
      description: "Apply to multiple opportunities with a single click. No more repetitive form filling."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Never miss a deadline with intelligent alerts for applications, interviews, and important updates."
    },
    {
      icon: Calendar,
      title: "Interview Management",
      description: "Schedule and manage interviews with automatic calendar integration and reminder system."
    },
    {
      icon: TrendingUp,
      title: "Application Tracking",
      description: "Track your application status in real-time with detailed progress indicators."
    }
  ];

  const benefits = [
    "Access to 1000+ exclusive internship opportunities",
    "Personalized career guidance from AI counselor",
    "Direct communication with industry mentors",
    "Skill development recommendations",
    "Interview preparation resources",
    "Placement guarantee programs"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Your Career Journey
                <span className="block text-green-300">Starts Here</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Discover internships, build your profile, and land your dream job with our student-centric platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Create Profile
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Browse Opportunities
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Everything You Need to
                <span className="text-transparent bg-clip-text bg-gradient-primary"> Succeed</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive suite of tools is designed specifically for student success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gradient-card shadow-custom-md hover:shadow-custom-lg transition-custom">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Why Students Choose CampusConnect</h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of successful students who have accelerated their careers with us.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-card p-8 rounded-lg shadow-custom-lg">
                  <div className="text-center">
                    <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-muted-foreground mb-6">
                      Create your profile in under 5 minutes and start exploring opportunities.
                    </p>
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full">
                      Create Student Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Students;