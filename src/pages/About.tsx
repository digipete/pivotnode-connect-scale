import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Adaptability",
      description: "We thrive in changing environments and pivot quickly to meet new challenges."
    },
    {
      icon: Users,
      title: "Connection",
      description: "We integrate deeply with your team, becoming an extension of your capability."
    },
    {
      icon: Target,
      title: "Delivery",
      description: "We focus on tangible outcomes and measurable impact, not just activity."
    }
  ];

  const whyChoose = [
    "No lengthy procurement processes — we move fast",
    "Senior talent with proven track records",
    "Flexible engagement models that scale with your needs",
    "Focus on capability transfer, not dependency creation",
    "Real impact, measured and delivered"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                The smartest 
                <span className="text-gradient"> node in the network</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We help ambitious teams pivot, build, and scale through people-first technology and delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    PivotNode was born from a simple observation: most consultancy models are broken. 
                    Organizations need expertise that integrates, not just advises. They need teams 
                    that deliver, not just strategize.
                  </p>
                  <p className="mb-6">
                    We built PivotNode as a modern technology consultancy that adapts to the way 
                    teams actually work. Whether you need an embedded squad for a critical project, 
                    senior expertise to fill capability gaps, or strategic guidance to transform 
                    your ways of working — we plug in exactly where you need us.
                  </p>
                  <p>
                    Our approach is simple: understand deeply, integrate seamlessly, deliver reliably. 
                    We're not here to create dependency — we're here to accelerate your capability 
                    and help you build lasting competitive advantage.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the smartest node in the network — helping ambitious teams pivot, 
                  build, and scale through people-first technology and delivery.
                </p>
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-2">Founded</h4>
                  <p className="text-muted-foreground">2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and every relationship we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Why clients choose 
                  <span className="text-gradient"> PivotNode</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We're not your typical consultancy. We're built for the modern world 
                  of fast-moving, outcome-focused organizations.
                </p>
                
                <div className="space-y-4">
                  {whyChoose.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Our Approach</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">1. Understand</h4>
                    <p className="text-muted-foreground">We take time to deeply understand your context, challenges, and goals before proposing solutions.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">2. Integrate</h4>
                    <p className="text-muted-foreground">Our team becomes an extension of yours, working within your processes and culture.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">3. Deliver</h4>
                    <p className="text-muted-foreground">We focus on tangible outcomes and measurable impact, not just activity or reports.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">4. Enable</h4>
                    <p className="text-muted-foreground">We transfer capability to your team, ensuring lasting impact beyond our engagement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;