import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  console.log("Index component rendering");
  return (
    <div className="min-h-screen bg-background">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-primary">PivotNode Test</h1>
        <p className="text-muted-foreground">If you can see this, React is working!</p>
      </div>
      {/* Temporarily commenting out other components */}
      {/* <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer /> */}
    </div>
  );
};

export default Index;
