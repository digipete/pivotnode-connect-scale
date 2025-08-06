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
              variant="default" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto bg-white text-primary hover:bg-white/95 hover:text-primary shadow-lg"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/30 hover:border-white/70 transition-all duration-300"
            >
              Explore Services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-white/80 text-sm mb-6 font-medium">Trusted by innovative companies worldwide</p>
            <div className="flex items-center justify-center space-x-8 flex-wrap gap-4">
              {/* Enhanced client logo placeholders */}
              <div className="h-10 w-28 bg-white/30 rounded-lg flex items-center justify-center">
                <span className="text-white/60 text-xs font-semibold">CLIENT 1</span>
              </div>
              <div className="h-10 w-28 bg-white/30 rounded-lg flex items-center justify-center">
                <span className="text-white/60 text-xs font-semibold">CLIENT 2</span>
              </div>
              <div className="h-10 w-28 bg-white/30 rounded-lg flex items-center justify-center">
                <span className="text-white/60 text-xs font-semibold">CLIENT 3</span>
              </div>
              <div className="h-10 w-28 bg-white/30 rounded-lg flex items-center justify-center">
                <span className="text-white/60 text-xs font-semibold">CLIENT 4</span>
              </div>
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