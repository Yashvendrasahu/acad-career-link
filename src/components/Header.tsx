import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, Users, BriefcaseIcon, Building } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Students", icon: GraduationCap, href: "/students" },
    { label: "Faculty", icon: Users, href: "/faculty" },
    { label: "Placement Cell", icon: BriefcaseIcon, href: "/placement" },
    { label: "Recruiters", icon: Building, href: "/recruiters" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-primary"></div>
            <span className="text-xl font-bold">CampusConnect</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href}>
              <Button
                variant="ghost"
                className="flex items-center space-x-2"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Link to="/dashboard">
            <Button variant="default" className="bg-gradient-primary hover:opacity-90">
              Get Started
            </Button>
          </Link>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.label} to={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start flex items-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Link to="/dashboard">
                <Button variant="default" className="w-full bg-gradient-primary">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};