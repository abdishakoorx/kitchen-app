import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  featured?: boolean;
}

export const PricingCard = ({
  title,
  description,
  price,
  period,
  features,
  buttonText,
  buttonVariant,
  featured = false,
}: PricingCardProps) => {
  return (
    <Card
      className={`relative overflow-hidden transition-all ${
        featured ? "border-primary shadow-lg shadow-primary/20 scale-105" : ""
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0 -mr-16 mt-3 w-[170px] transform rotate-45 z-10">
          <div className="bg-blue-600 py-1 text-center text-xs font-semibold uppercase text-primary-foreground shadow-sm">
            Popular
          </div>
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="rounded-full bg-primary/20 p-1">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-8">
        <Button variant={buttonVariant} className="w-full cursor-pointer">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function Pricing() {
  return (
    <div className="py-24 bg-gradient-to-b from-background/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that&apos;s right for your kitchen needs
          </p>
          <div className="mt-6 inline-block rounded-full p-1">
            <div className="flex text-sm">
              <span className="py-1 px-4 rounded-full bg-primary text-white">
                Monthly
              </span>
              <span className="py-1 px-4 cursor-pointer">
                Yearly (Save 20%)
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <PricingCard
            title="Free"
            description="Perfect for getting started"
            price="$0"
            period="forever"
            features={[
              "Basic recipe access",
              "Limited meal planning",
              "1 kitchen profile",
              "Community forum access",
            ]}
            buttonText="Get Started"
            buttonVariant="outline"
          />

          {/* Premium Plan */}
          <PricingCard
            title="Premium"
            description="For serious home chefs"
            price="$9.99"
            period="per month"
            features={[
              "All free features",
              "Unlimited meal planning",
              "AI-powered recommendations",
              "Pantry management",
              "Smart shopping lists",
            ]}
            buttonText="Start Free Trial"
            buttonVariant="default"
            featured={true}
          />

          {/* Family Plan */}
          <PricingCard
            title="Family"
            description="For households that cook together"
            price="$14.99"
            period="per month"
            features={[
              "All premium features",
              "Up to 5 kitchen profiles",
              "Advanced nutrition tracking",
              "Recipe collaboration tools",
              "Priority customer support",
            ]}
            buttonText="Start Free Trial"
            buttonVariant="outline"
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}
