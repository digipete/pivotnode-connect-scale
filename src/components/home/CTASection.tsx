import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to make your pivot?
          </h2>
          
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help you adapt, scale, and deliver. 
            No generic solutions — just the right expertise at the right time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button 
                variant="default" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto bg-white text-primary hover:bg-white/95 hover:text-primary shadow-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Discovery Call
              </Button>
            </Link>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/30 hover:border-white/70 transition-all duration-300"
            >
              View Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-8 text-white/70 text-sm">
            <p>Typical response time: Within 2 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;