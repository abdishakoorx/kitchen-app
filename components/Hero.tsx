import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="relative min-h-[500px] w-full bg-gray-200 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 z-0 grid-pattern" />

        {/* Hero content */}
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 flex justify-center items-center text-center">
          <div className="max-w-3xl">
            {/* Small icon/logo */}
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-2 rounded-md">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#16a34a"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 12L11 15L16 9"
                    stroke="#16a34a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Your Smart Kitchen Companion
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your cooking experience with AI-powered recipe
              suggestions, meal planning, and smart pantry management. Simplify
              your kitchen life.
            </p>
            <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
              <Button className="bg-secondary hover:bg-secondary cursor-pointer text-white shadow-lg flex items-center gap-2 px-8 py-6 text-lg rounded-full transition-all duration-200 hover:scale-105">
                <span>Plan Your First Meal</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <a className="text-lg text-gray-700 hover:text-secondary cursor-pointer flex items-center gap-1 font-medium hover:underline transition-colors duration-200">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
