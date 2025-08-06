import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  console.log("HeroSection rendering");
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-accent">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-accent/85" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your{" "}
            <span className="text-gradient bg-gradient-to-r from-white to-accent-foreground bg-clip-text text-transparent">
              pivot point
            </span>{" "}
            for change
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            We deliver high-performing teams, individual experts, and strategic services 
            that plug in exactly where our clients need them. Adapt fast, integrate deeply, 
            deliver reliably.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto bg-white text-primary hover:bg-white/90"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Explore Services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-white/70 text-sm mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {/* Placeholder for client logos */}
              <div className="h-8 w-24 bg-white/20 rounded"></div>
              <div className="h-8 w-24 bg-white/20 rounded"></div>
              <div className="h-8 w-24 bg-white/20 rounded"></div>
              <div className="h-8 w-24 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;