import { cn } from "@/lib/utils";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  href,
  className
}: FeatureCardProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "feature-card block p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-kitchen-green opacity-75 group-hover:w-full group-hover:opacity-10 transition-all duration-500"></div>
      <div className="feature-icon bg-kitchen-cream/50 group-hover:bg-kitchen-cream p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-center text-kitchen-green group-hover:scale-105 transition-transform">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
      <div className="mt-4 w-full flex justify-center">
        <span className="text-kitchen-orange text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Explore →
        </span>
      </div>
    </Link>
  );
};

export default FeatureCard;