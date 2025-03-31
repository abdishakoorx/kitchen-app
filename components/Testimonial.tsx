import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Home Chef",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120&q=80",
    text: "Bottleyx has completely transformed my meal planning. I save at least 3 hours a week and have discovered amazing recipes I'd never have tried otherwise.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Busy Parent",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120&q=80",
    text: "This app has been a lifesaver for our family. The pantry tracking feature ensures we never run out of essentials, and the budget meal ideas have actually lowered our grocery bills!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophie Martinez",
    role: "Nutrition Coach",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120&q=80",
    text: "I recommend Bottleyx to all my clients. The nutrition tracking is incredibly accurate, and the recipe customization makes it easy to meet specific dietary goals.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-marble-pattern bg-cover bg-center py-24 relative">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">What Our Users Say</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Join thousands of satisfied users who have transformed their kitchen experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    image: string;
    text: string;
    rating: number;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12 border-2 border-primary">
          <AvatarImage src={testimonial.image} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
      <div className="mt-4 mb-2 flex">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${
              i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted-foreground'
            }`} 
          />
        ))}
      </div>
      <p className="italic text-sm">&quot;{testimonial.text}&quot;</p>
    </Card>
  );
};

export default Testimonials;