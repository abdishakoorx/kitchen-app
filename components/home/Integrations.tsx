import { Card, CardContent } from "@/components/ui/card";
import { Refrigerator, ShoppingBag, CalendarCheck, Smartphone } from "lucide-react";
import Link from "next/link";

const Integrations = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Kitchen Integrations</h2>
          <p className="text-lg text-muted-foreground">
            Connect your favorite services and devices for a seamless cooking experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <IntegrationCard 
            icon={<Refrigerator className="h-10 w-10 text-primary" />}
            title="Smart Refrigerators"
            description="Sync with Samsung Family Hub, LG InstaView, and other smart fridges to track ingredients."
            partners="Samsung, LG, GE"
          />
          
          <IntegrationCard 
            icon={<ShoppingBag className="h-10 w-10 text-primary" />}
            title="Grocery Delivery"
            description="Order ingredients directly through Instacart, Amazon Fresh, and local grocery partners."
            partners="Instacart, Amazon Fresh, Walmart"
          />
          
          <IntegrationCard 
            icon={<CalendarCheck className="h-10 w-10 text-primary" />}
            title="Calendar Apps"
            description="Sync meal plans with Google Calendar, Apple Calendar, or Microsoft Outlook."
            partners="Google, Apple, Microsoft"
          />
          
          <IntegrationCard 
            icon={<Smartphone className="h-10 w-10 text-primary" />}
            title="Smart Home Systems"
            description="Control your kitchen through Alexa, Google Home, and Apple HomeKit."
            partners="Amazon, Google, Apple"
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-base text-muted-foreground">
            More integrations are being added regularly. Have a suggestion? <Link href="/" className="text-secondary hover:underline">Let us know!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const IntegrationCard = ({ 
  icon, 
  title, 
  description, 
  partners 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  partners: string 
}) => {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 h-full">
      <CardContent className="p-6 flex flex-col items-center text-center h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <div className="w-full pt-4 border-t border-gray-100">
          <p className="text-sm font-medium">Partners: {partners}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Integrations;