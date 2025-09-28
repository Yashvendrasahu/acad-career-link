import { Card, CardContent } from "@/components/ui/card";

export const StatsSection = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Students Registered",
      description: "Active students across 200+ colleges"
    },
    {
      number: "95%",
      label: "Placement Success Rate",
      description: "Industry-leading placement statistics"
    },
    {
      number: "1,200+",
      label: "Partner Companies",
      description: "From startups to Fortune 500"
    },
    {
      number: "₹12L",
      label: "Average Package",
      description: "Competitive salary placements"
    },
    {
      number: "48hrs",
      label: "Average Response Time",
      description: "Quick turnaround for applications"
    },
    {
      number: "99.5%",
      label: "System Uptime",
      description: "Reliable, always-on platform"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Results, 
            <span className="text-green-300"> Trusted Platform</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of successful students and hundreds of satisfied institutions 
            who have transformed their placement process with CampusConnect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-custom">
              <CardContent className="p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-primary-foreground/70">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};