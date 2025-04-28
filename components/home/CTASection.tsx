import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const CTA = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-background to-background/20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl p-8 md:p-12 overflow-hidden relative backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg">
          {/* Gradients and blurs for glassmorphism effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 mix-blend-overlay"></div>
          
          {/* Semi-transparent light reflection effect */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full rotate-12 transform -skew-x-12 blur-xl"></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Ready to Transform Your Kitchen Experience?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Join thousands of home chefs who are saving time, reducing waste, and discovering amazing recipes.
            </p>
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <FeaturePoint text="Free 14-day full access trial" />
              <FeaturePoint text="No credit card required" />
              <FeaturePoint text="Cancel anytime" />
            </div>
           
            <Button className="text-lg px-8 cursor-pointer">
              <span>Get Started For Free</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturePoint = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="rounded-full bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm p-1">
        <Check className="h-4 w-4 text-primary" />
      </div>
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default CTA;