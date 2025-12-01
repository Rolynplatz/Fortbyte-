import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Trash2, Edit, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const savedBuilds = [
  {
    id: 1,
    name: "Gaming Beast",
    date: "15/11/2025",
    power: "950W",
    fps: "120+",
    budget: "R$ 15.000",
    components: ["Intel i9-14900K", "RTX 4090", "32GB DDR5", "2TB NVMe"],
  },
  {
    id: 2,
    name: "Budget Gaming",
    date: "10/11/2025",
    power: "650W",
    fps: "90+",
    budget: "R$ 6.500",
    components: ["Ryzen 5 7600", "RTX 4060 Ti", "16GB DDR5", "1TB NVMe"],
  },
  {
    id: 3,
    name: "Workstation Pro",
    date: "05/11/2025",
    power: "850W",
    fps: "60+",
    budget: "R$ 12.000",
    components: ["Ryzen 9 7950X", "RTX 4070 Ti", "64GB DDR5", "4TB NVMe"],
  },
];

const BuildSaved = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/simulator")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Simulador
        </Button>

        {/* Header */}
        <section className="bg-gradient-hero rounded-3xl p-12 mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">
            Minhas Montagens Salvas
          </h1>
          <p className="text-white/90 text-lg">
            Gerencie suas configurações de PC salvas
          </p>
        </section>

        <div className="max-w-6xl mx-auto">
          {/* Builds Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {savedBuilds.map((build) => (
              <Card
                key={build.id}
                className="bg-card rounded-3xl border border-border hover:border-primary transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {build.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Salvo em {build.date}
                      </p>
                    </div>
                    <Badge className="bg-gradient-cyan-purple text-white border-0">
                      {build.budget}
                    </Badge>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-muted rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="w-4 h-4 text-primary" />
                        <p className="text-sm text-muted-foreground">Potência</p>
                      </div>
                      <p className="text-lg font-bold text-foreground">{build.power}</p>
                    </div>
                    <div className="bg-muted rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="w-4 h-4 text-primary" />
                        <p className="text-sm text-muted-foreground">FPS 4K</p>
                      </div>
                      <p className="text-lg font-bold text-foreground">{build.fps}</p>
                    </div>
                  </div>

                  {/* Components */}
                  <div className="space-y-2 mb-6">
                    {build.components.map((component, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {component}
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-cyan-purple hover:opacity-90"
                      onClick={() => navigate("/simulator")}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.origin + "/simulator/saved");
                        alert("Link copiado para a área de transferência!");
                      }}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Compartilhar
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-destructive text-destructive hover:bg-destructive hover:text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* New Build */}
          <Card className="bg-gradient-pink-orange rounded-3xl p-8 border-0">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Criar Nova Montagem
              </h2>
              <p className="text-white/90 mb-6">
                Use o simulador para criar uma nova configuração de PC personalizada
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => navigate("/simulator")}
              >
                Abrir Simulador
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <ChatButton />
    </div>
  );
};

export default BuildSaved;
