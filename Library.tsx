import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Cpu, Monitor, HardDrive, Zap, MemoryStick, Box } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "CPUs / Processadores", icon: Cpu, gradient: "bg-gradient-blue-purple", slug: "cpu" },
  { name: "GPUs / Placas Série Vídeo", icon: Monitor, gradient: "bg-gradient-pink-orange", slug: "gpu" },
  { name: "RAM / Memória", icon: MemoryStick, gradient: "bg-gradient-blue-purple", slug: "ram" },
  { name: "Placas-Mãe", icon: Box, gradient: "bg-gradient-green-yellow", slug: "motherboard" },
  { name: "Fontes de Alimentação", icon: Zap, gradient: "bg-gradient-pink-orange", slug: "psu" },
  { name: "Armazenamento", icon: HardDrive, gradient: "bg-gradient-blue-purple", slug: "storage" },
];

const Library = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Marleyel" />
      
      <main className="ml-20 pt-20 p-8">
        {/* Hero Section */}
        <section className="bg-gradient-hero rounded-3xl p-12 mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">
            Biblioteca de Peças
          </h1>
          <p className="text-white/90 text-lg">
            Explore componentes, compare especificações e encontre as peças perfeitas para seu PC
          </p>
        </section>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className={`${category.gradient} p-8 rounded-3xl border-0 hover:scale-105 transition-transform duration-300 cursor-pointer group`}
                onClick={() => navigate(`/library/${category.slug}`)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              </Card>
            );
          })}
        </div>

        {/* Search Bar */}
        <Card className="bg-card rounded-3xl p-6 border border-border mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar componente..."
              className="pl-12 py-6 text-lg bg-muted border-border"
            />
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Button 
            className="bg-gradient-cyan-purple hover:opacity-90 text-white px-8 py-6 text-lg rounded-full"
            onClick={() => navigate("/compare")}
          >
            Comparar Peças
          </Button>
          <Button 
            className="bg-gradient-blue-purple hover:opacity-90 text-white px-8 py-6 text-lg rounded-full"
            onClick={() => navigate("/releases")}
          >
            Ver Lançamentos
          </Button>
        </div>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Library;
