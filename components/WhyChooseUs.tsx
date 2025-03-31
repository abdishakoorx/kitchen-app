import { CheckCircle, Award, Users, Star } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-background to-background/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Bottleyx</h2>
          <p className="text-lg text-muted-foreground">
            We&quot;re building the most intelligent kitchen companion to make cooking enjoyable, efficient, and waste-free
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <div className="flex gap-4">
              <Award className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Award-Winning AI Technology</h3>
                <p className="text-muted-foreground">
                  Our proprietary AI has been recognized for its ability to generate restaurant-quality recipes from simple pantry ingredients.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex gap-4">
              <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Personalized Experience</h3>
                <p className="text-muted-foreground">
                  The more you use Bottleyx, the more it learns your taste preferences and dietary needs for truly tailored suggestions.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex gap-4">
              <Users className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Passionate Team</h3>
                <p className="text-muted-foreground">
                  Founded by chefs and engineers who believe technology should make cooking more enjoyable and accessible, not complicated.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex gap-4">
              <Star className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Commitment to Quality</h3>
                <p className="text-muted-foreground">
                  Every recipe is tested and verified by our culinary team to ensure reliable, delicious results every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;