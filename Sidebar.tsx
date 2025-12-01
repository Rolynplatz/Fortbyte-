import { Home, Cpu, Book, GraduationCap, MessageCircle, Star, Package } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Início", href: "/", icon: Home },
  { name: "Simulador", href: "/simulator", icon: Cpu },
  { name: "Biblioteca", href: "/library", icon: Book },
  { name: "Tutoriais", href: "/tutorials", icon: GraduationCap },
  { name: "Quizzes", href: "/quizzes", icon: Star },
  { name: "Fórum", href: "/forum", icon: MessageCircle },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-20 backdrop-glass border-r border-sidebar-border/50">
      <div className="flex h-full flex-col items-center py-8 gap-8">
        <button 
          onClick={() => window.location.href = '/'}
          className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-cyan-purple shadow-glow-cyan hover:shadow-glow-purple hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <Package className="w-7 h-7 text-white" />
        </button>
        
        <nav className="flex-1 flex flex-col gap-4">
          {navigation.map((item, index) => (
            <div 
              key={item.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <NavLink
                to={item.href}
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300",
                  "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent hover:scale-110"
                )}
                activeClassName="bg-sidebar-accent text-primary shadow-glow-cyan scale-110"
              >
                <item.icon className="w-5 h-5" />
                <span className="sr-only">{item.name}</span>
              </NavLink>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};
