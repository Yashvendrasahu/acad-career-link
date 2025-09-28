import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  BriefcaseIcon, 
  Building, 
  Bot, 
  Calendar,
  FileText,
  BarChart3,
  Shield,
  Bell
} from "lucide-react";

export const FeaturesSection = () => {
  const roleFeatures = [
    {
      role: "Students",
      icon: GraduationCap,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      features: [
        "Digital Profile & Resume Builder",
        "AI-Powered Job Recommendations",
        "One-Click Applications",
        "Real-time Application Tracking",
        "Interview Scheduling"
      ]
    },
    {
      role: "Faculty Mentors",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      features: [
        "Student Progress Monitoring",
        "Digital Approval Workflow",
        "Mentorship Tracking",
        "Performance Analytics",
        "Feedback Management"
      ]
    },
    {
      role: "Placement Cell",
      icon: BriefcaseIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      features: [
        "Opportunity Management",
        "Real-time Dashboards",
        "Interview Coordination",
        "Placement Analytics",
        "Report Generation"
      ]
    },
    {
      role: "Recruiters",
      icon: Building,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      features: [
        "Filtered Candidate Access",
        "Direct Interview Scheduling",
        "Skill-based Matching",
        "Application Management",
        "Feedback System"
      ]
    }
  ];

  const systemFeatures = [
    {
      icon: Bot,
      title: "AI-Powered Matching",
      description: "Smart algorithms match students with the best-fit opportunities based on skills, interests, and academic performance."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated interview scheduling that syncs with academic timetables and avoids conflicts."
    },
    {
      icon: FileText,
      title: "Digital Documentation",
      description: "Paperless workflow with automated certificate generation and digital approval processes."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with placement statistics, skill demand analysis, and success metrics."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Role-based access control with GDPR-compliant data handling and privacy protection."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Timely alerts via email, SMS, and push notifications for deadlines and important updates."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Every
            <span className="text-transparent bg-clip-text bg-gradient-primary"> Stakeholder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform addresses the unique needs of each role in the campus placement ecosystem.
          </p>
        </div>

        {/* Role-based Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {roleFeatures.map((role, index) => (
            <Card key={index} className="bg-gradient-card shadow-custom-md hover:shadow-custom-lg transition-custom">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full ${role.bgColor} flex items-center justify-center mx-auto mb-4`}>
                  <role.icon className={`h-8 w-8 ${role.color}`} />
                </div>
                <CardTitle className="text-xl">{role.role}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {role.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Features */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Powerful Features</h3>
          <p className="text-lg text-muted-foreground">
            Advanced technology that makes campus placement management effortless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systemFeatures.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-custom-md hover:shadow-custom-lg transition-custom group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-custom">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};