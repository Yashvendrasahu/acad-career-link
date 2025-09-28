import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Briefcase, 
  Calendar, 
  Bell,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  Building
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Applications Sent", value: "12", icon: Briefcase, change: "+3 this week" },
    { label: "Interviews Scheduled", value: "4", icon: Calendar, change: "2 upcoming" },
    { label: "Profile Views", value: "89", icon: Users, change: "+15 this week" },
    { label: "Opportunities Matched", value: "23", icon: TrendingUp, change: "5 new today" }
  ];

  const recentApplications = [
    { company: "Tech Mahindra", role: "Software Developer Intern", status: "Interview Scheduled", date: "2024-01-15", type: "Internship" },
    { company: "Infosys", role: "Data Analyst", status: "Under Review", date: "2024-01-12", type: "Full-time" },
    { company: "Wipro", role: "Web Developer", status: "Shortlisted", date: "2024-01-10", type: "Internship" },
    { company: "TCS", role: "System Engineer", status: "Applied", date: "2024-01-08", type: "Full-time" }
  ];

  const upcomingInterviews = [
    { company: "Tech Mahindra", role: "Software Developer Intern", date: "Jan 20, 2024", time: "10:00 AM", type: "Technical Round" },
    { company: "Amazon", role: "SDE Intern", date: "Jan 22, 2024", time: "2:00 PM", type: "HR Round" }
  ];

  const recommendedJobs = [
    { company: "Microsoft", role: "Software Engineer Intern", location: "Bangalore", stipend: "₹50,000/month", match: "95%" },
    { company: "Google", role: "Product Manager Intern", location: "Hyderabad", stipend: "₹60,000/month", match: "92%" },
    { company: "Meta", role: "Frontend Developer", location: "Pune", stipend: "₹45,000/month", match: "88%" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Interview Scheduled": return "bg-blue-100 text-blue-800";
      case "Shortlisted": return "bg-green-100 text-green-800";
      case "Under Review": return "bg-yellow-100 text-yellow-800";
      case "Applied": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Yashu! 👋</h1>
          <p className="text-muted-foreground">Here's what's happening with your applications and profile.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card shadow-custom-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Applications */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-custom-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5" />
                  <span>Recent Applications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((application, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{application.role}</h4>
                          <p className="text-sm text-muted-foreground">{application.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(application.status)}>
                          {application.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{application.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Applications
                </Button>
              </CardContent>
            </Card>

            {/* Recommended Jobs */}
            <Card className="bg-gradient-card shadow-custom-md mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Recommended for You</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedJobs.map((job, index) => (
                    <div key={index} className="p-4 bg-background rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{job.role}</h4>
                          <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">{job.match} match</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-primary">{job.stipend}</span>
                        <Button size="sm">Apply Now</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Interviews */}
            <Card className="bg-gradient-card shadow-custom-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Interviews</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingInterviews.map((interview, index) => (
                    <div key={index} className="p-3 bg-background rounded-lg">
                      <h4 className="font-semibold text-sm">{interview.role}</h4>
                      <p className="text-xs text-muted-foreground">{interview.company}</p>
                      <div className="flex justify-between items-center mt-2">
                        <div className="text-xs">
                          <p className="font-medium">{interview.date}</p>
                          <p className="text-muted-foreground">{interview.time}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">{interview.type}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  View Calendar
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card shadow-custom-md">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="sm">
                  Update Profile
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  Search Jobs
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  Practice Interview
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="bg-gradient-card shadow-custom-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Recent Notifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <div className="text-sm">
                      <p className="font-medium">Application Shortlisted</p>
                      <p className="text-muted-foreground text-xs">Wipro - 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-4 w-4 text-blue-500 mt-1" />
                    <div className="text-sm">
                      <p className="font-medium">Interview Reminder</p>
                      <p className="text-muted-foreground text-xs">Tomorrow at 10:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-4 w-4 text-orange-500 mt-1" />
                    <div className="text-sm">
                      <p className="font-medium">Deadline Approaching</p>
                      <p className="text-muted-foreground text-xs">Microsoft application - 3 days left</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  View All
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;