import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, UserPlus, Target, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import servicesBackground from "@/assets/services-background.jpg";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Embedded Teams",
      subtitle: "End-to-end delivery teams that hit the ground running",
      description: "Get a complete, cross-functional team that integrates with your organization from day one. From discovery through to launch and iteration, our embedded teams deliver at pace while transferring knowledge to your internal team.",
      ideal: "Ideal for projects where delivery pace and quality matter",
      includes: [
        "Product discovery and strategy",
        "Technical architecture and development",
        "Design and user experience",
        "Quality assurance and testing",
        "DevOps and infrastructure",
        "Ongoing iteration and optimization"
      ],
      engagement: "3-12 months",
      teamSize: "4-8 people"
    },
    {
      icon: UserPlus,
      title: "Augmented Expertise",
      subtitle: "Senior talent that strengthens your team from within",
      description: "Access senior technologists, designers, and delivery professionals who join your existing team to fill capability gaps or provide additional capacity during critical periods.",
      ideal: "Best for targeted skill gaps or burst capacity",
      includes: [
        "Senior software engineers",
        "Technical architects and leads",
        "Product and UX designers",
        "DevOps and platform engineers",
        "Delivery and product managers",
        "Technical specialists (AI/ML, Security, etc.)"
      ],
      engagement: "1-6 months",
      teamSize: "1-3 people"
    },
    {
      icon: Target,
      title: "Advisory & Enablement",
      subtitle: "Strategic guidance that builds lasting capability",
      description: "We help shape your technology roadmap, modernize your ways of working, and build internal capability that creates lasting competitive advantage.",
      ideal: "Designed for leaders who want more than just bums on seats",
      includes: [
        "Technology strategy and roadmapping",
        "Engineering practices optimization",
        "Team structure and scaling guidance",
        "Process improvement and automation",
        "Technical training and mentoring",
        "Organizational transformation support"
      ],
      engagement: "2-6 months",
      teamSize: "1-2 advisors"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={servicesBackground}
              alt="Services background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Flexible support,
              <span className="text-gradient"> exactly where you need it</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you need a complete delivery team, specialized expertise, or strategic guidance, 
              we adapt to your unique challenges and goals.
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="space-y-24">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                          <p className="text-accent font-medium">{service.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <p className="text-primary font-semibold mb-8">
                        {service.ideal}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Typical Engagement</h4>
                          <p className="text-muted-foreground">{service.engagement}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Team Size</h4>
                          <p className="text-muted-foreground">{service.teamSize}</p>
                        </div>
                      </div>
                      
                      <Link to="/contact">
                        <Button variant="hero" size="lg">
                          Discuss This Service
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                    
                    {/* What's Included */}
                    <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                      <Card className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-8">
                          <h3 className="text-2xl font-semibold text-foreground mb-6">
                            What's Included
                          </h3>
                          <div className="space-y-4">
                            {service.includes.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Not sure which service fits?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific challenges and find the right approach. 
              We often combine services for maximum impact.
            </p>
            <Link to="/contact">
              <Button variant="professional" size="lg" className="bg-white text-primary hover:bg-white/90">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;