import { Utensils, Calendar, ShoppingCart, RefrigeratorIcon, Calculator, Users } from "lucide-react";
import Image from "next/image";

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative p-6 rounded-xl backdrop-blur-md bg-white/30 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden group">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-[url('/marble-texture.jpg')] opacity-5 mix-blend-overlay"></div>
      
      {/* Feature content */}
      <div className="relative z-10">
        <div className="w-14 h-14 mb-5 rounded-full bg-green-100/80 flex items-center justify-center text-secondary backdrop-blur-sm">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-green-500/10"></div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Utensils className="w-7 h-7" />,
      title: "Smart Recipe Builder",
      description: "Create personalized recipes based on your preferences, dietary restrictions, and available ingredients in your pantry."
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Meal Planning",
      description: "Plan balanced meals for the week with automated shopping lists and prep instructions tailored to your schedule."
    },
    {
      icon: <ShoppingCart className="w-7 h-7" />,
      title: "Grocery Assistant",
      description: "Smart shopping lists that organize items by store section and find the best deals based on your location."
    },
    {
      icon: <RefrigeratorIcon className="w-7 h-7" />,
      title: "Pantry Management",
      description: "Track your ingredients, get expiration alerts, and receive suggestions to use items before they spoil."
    },
    {
      icon: <Calculator className="w-7 h-7" />,
      title: "Nutrition Optimizer",
      description: "Monitor nutritional intake and get recommendations to meet your health goals without sacrificing flavor."
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Community Recipes",
      description: "Share creations, join cooking challenges, and learn from expert chefs in our growing community."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">      
      {/* Wooden texture accent */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-[url('/wooden-texture.jpg')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tertiary">
            Smart Features for Modern Cooking
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered tools transform your kitchen experience, making cooking more efficient, nutritious, and enjoyable.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        {/* Additional feature highlight */}
        <div className="mt-16 p-8 rounded-2xl backdrop-blur-xl bg-white/20 border border-white/20 shadow-xl relative overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 bg-[url('/marble-texture.jpg')] opacity-5 mix-blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 kitchen-heading">Weekly Meal Prep Made Simple</h3>
              <p className="text-gray-700 mb-6">
                Our AI analyzes your preferences, schedule, and nutritional needs to create the perfect meal plan. Save time, reduce waste, and eat better with smart suggestions tailored just for you.
              </p>
              <button className="bg-primary cursor-pointer text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition-colors duration-300">
                Try Meal Planning
                <Calendar className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-100 p-4 flex items-center justify-center">
                <Image height={400} width={400} src="/meal-planning-calendar.jpg" alt="Meal Planning Calendar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-green-300/10 blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-amber-300/10 blur-3xl"></div>
    </section>
  );
};

export default Features;