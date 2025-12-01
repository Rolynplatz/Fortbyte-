import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  onClick?: () => void;
}

export const FeatureCard = ({ icon: Icon, title, description, gradient, onClick }: FeatureCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-3xl p-8 text-left transition-all duration-500",
        "hover:scale-105 hover:shadow-elevated hover:-translate-y-2",
        gradient
      )}
    >
      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
        <p className="text-white/90 group-hover:text-white transition-colors duration-300">{description}</p>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
    </button>
  );
};
