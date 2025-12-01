import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Filter } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const allContent = [
  { id: 1, title: "Intel Core i9-14900K", type: "Componente", category: "CPU", url: "/library/cpu" },
  { id: 2, title: "Introdução ao Hardware", type: "Tutorial", category: "Módulo 1", url: "/tutorials/module/1" },
  { id: 3, title: "Como escolher processador", type: "Discussão", category: "Fórum", url: "/forum" },
  { id: 4, title: "Quiz Básico de Hardware", type: "Quiz", category: "Iniciante", url: "/quizzes/1" },
  { id: 5, title: "RTX 4090", type: "Componente", category: "GPU", url: "/library/gpu" },
  { id: 6, title: "Montagem Passo a Passo", type: "Tutorial", category: "Módulo 2", url: "/tutorials/module/2" },
  { id: 7, title: "DDR5 32GB", type: "Componente", category: "RAM", url: "/library/ram" },
  { id: 8, title: "Compatibilidade de Peças", type: "Tutorial", category: "Módulo 3", url: "/tutorials/module/3" },
];

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [results, setResults] = useState(allContent);

  useEffect(() => {
    const searchQuery = searchParams.get("q") || "";
    setQuery(searchQuery);
    
    if (searchQuery.trim()) {
      const filtered = allContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults(allContent);
    }
  }, [searchParams]);

  const handleSearch = () => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        <section className="bg-gradient-hero rounded-3xl p-12 mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">
            Buscar no Portal
          </h1>
          <p className="text-white/90 text-lg mb-6">
            Encontre componentes, tutoriais, discussões e quizzes
          </p>
          
          <div className="max-w-2xl mx-auto flex gap-3">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Digite o que você procura..."
                className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
            </div>
            <Button 
              size="lg"
              onClick={handleSearch}
              className="bg-white text-primary hover:bg-white/90 h-14 px-8"
            >
              <SearchIcon className="w-5 h-5 mr-2" />
              Buscar
            </Button>
          </div>
        </section>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {query ? `Resultados para "${query}"` : "Todos os Conteúdos"}
              <span className="text-muted-foreground ml-2 text-lg">
                ({results.length} {results.length === 1 ? "resultado" : "resultados"})
              </span>
            </h2>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
          </div>

          {results.length === 0 ? (
            <Card className="bg-card rounded-3xl p-12 text-center border border-border">
              <p className="text-muted-foreground text-lg mb-4">
                Nenhum resultado encontrado para "{query}"
              </p>
              <Button onClick={() => { setQuery(""); navigate("/search"); }}>
                Ver Todos os Conteúdos
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((item) => (
                <Card
                  key={item.id}
                  className="bg-card rounded-3xl p-6 border border-border hover:border-primary transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(item.url)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.category}
                      </p>
                    </div>
                    <Badge className="bg-gradient-cyan-purple text-white border-0">
                      {item.type}
                    </Badge>
                  </div>
                  <Button className="w-full bg-gradient-pink-orange hover:opacity-90">
                    Ver Detalhes
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <ChatButton />
    </div>
  );
};

export default Search;
