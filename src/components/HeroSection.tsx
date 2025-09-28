import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Campus Connect - Internship & Placement Portal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Gateway to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-green-300">
              Career Success
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Streamline internships and placements with our comprehensive campus portal. 
            Connect students, faculty, and recruiters in one unified platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 transition-custom">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-custom">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 mb-2 text-green-300" />
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-gray-200">Students Placed</div>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-8 w-8 mb-2 text-green-300" />
              <div className="text-2xl font-bold">95%</div>
              <div className="text-gray-200">Success Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 mb-2 text-green-300" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-gray-200">Partner Companies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};