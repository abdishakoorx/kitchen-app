import { CheckCircle, Award, Users, Star } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Award-Winning AI Technology",
      description: "Our AI has been recognized for its ability to generate restaurant-quality recipes from simple pantry ingredients."
    },
    {
      icon: CheckCircle,
      title: "Personalized Experience",
      description: "The more you use Bottleyx, the more it learns your taste preferences and dietary needs for truly tailored suggestions."
    },
    {
      icon: Users,
      title: "Passionate Team",
      description: "Founded by experts who believe technology should make cooking more enjoyable and accessible to everyone."
    },
    {
      icon: Star,
      title: "Commitment to Quality",
      description: "Every recipe is tested and verified by our culinary team to ensure reliable, delicious results every single time."
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-background to-background/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Bottleyx</h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re building the most intelligent kitchen companion to make cooking enjoyable, efficient, and waste-free
          </p>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex gap-4">
                <feature.icon className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;