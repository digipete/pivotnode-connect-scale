import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Linkedin, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 2 hours.",
    });
    
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      timeline: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Let's start the 
              <span className="text-gradient"> conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to accelerate your delivery? We'd love to understand your challenges 
              and explore how we can help you pivot, build, and scale.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                      Tell us about your project
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Work Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className="mt-2"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="service">Service Interest</Label>
                          <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="embedded-teams">Embedded Teams</SelectItem>
                              <SelectItem value="augmented-expertise">Augmented Expertise</SelectItem>
                              <SelectItem value="advisory-enablement">Advisory & Enablement</SelectItem>
                              <SelectItem value="not-sure">Not sure yet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="timeline">Preferred Timeline</Label>
                          <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="When do you need to start?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediately</SelectItem>
                              <SelectItem value="1-month">Within 1 month</SelectItem>
                              <SelectItem value="2-3-months">2-3 months</SelectItem>
                              <SelectItem value="later">Later this year</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Tell us about your challenge *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          required
                          rows={6}
                          className="mt-2"
                          placeholder="What challenges are you facing? What outcomes are you looking for? Any specific requirements or constraints we should know about?"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="w-full md:w-auto"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Quick Contact */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      Quick Contact
                    </h3>
                    <div className="space-y-4">
                      <a 
                        href="mailto:hello@pivotnode.com"
                        className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5 mr-3" />
                        hello@pivotnode.com
                      </a>
                      <a 
                        href="#"
                        className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5 mr-3" />
                        LinkedIn
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-accent mr-3" />
                      <h3 className="text-xl font-semibold text-foreground">
                        Quick Response
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      We typically respond within 2 hours during business hours.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      Business hours: Mon-Fri, 9am-6pm GMT
                    </div>
                  </CardContent>
                </Card>

                {/* What Happens Next */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      What happens next?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Initial Response</p>
                          <p className="text-sm text-muted-foreground">We'll get back to you within 2 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Discovery Call</p>
                          <p className="text-sm text-muted-foreground">30-minute call to understand your needs</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Proposal</p>
                          <p className="text-sm text-muted-foreground">Tailored approach and next steps</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;