import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface HeaderProps {
  userName?: string;
}

export const Header = ({ userName = "Usuário" }: HeaderProps) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <header className="fixed top-0 right-0 left-20 z-30 h-20 backdrop-glass border-b border-border/50">
      <div className="flex items-center justify-between h-full px-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/profile")}
            className="flex items-center gap-3 hover:scale-105 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-cyan-purple flex items-center justify-center text-white font-semibold cursor-pointer shadow-glow-cyan group-hover:shadow-glow-purple transition-all duration-300">
              {userName.charAt(0)}
            </div>
            <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">Olá, {userName}!</span>
          </button>
        </div>
        
        <form onSubmit={handleSearch} className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar no portal..."
            className="pl-10 bg-card/50 border-border focus:ring-primary focus:border-primary transition-all duration-300 hover:bg-card"
          />
        </form>
      </div>
    </header>
  );
};
