import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, UserPlus, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: Users,
      title: "Embedded Teams",
      description: "End-to-end delivery teams that hit the ground running — from discovery through to launch and iteration.",
      highlight: "Ideal for projects where delivery pace and quality matter."
    },
    {
      icon: UserPlus,
      title: "Augmented Expertise",
      description: "Senior technologists, designers, and delivery pros who join your team to strengthen capability from within.",
      highlight: "Best for targeted skill gaps or burst capacity."
    },
    {
      icon: Target,
      title: "Advisory & Enablement",
      description: "We help shape your roadmap, modernise your ways of working, and build internal capability that lasts.",
      highlight: "Designed for leaders who want more than just bums on seats."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Flexible support, 
            <span className="text-gradient"> exactly where you need it</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer scalable support in three key areas, each designed to adapt to your unique challenges and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <p className="text-sm font-medium text-accent mb-6">
                    {service.highlight}
                  </p>
                  
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-accent group">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button 
              variant="default" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent-hover text-white shadow-lg transition-all duration-300"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
