import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const releases = [
  {
    id: 1,
    name: "NVIDIA RTX 5090",
    category: "GPU",
    release: "Janeiro 2025",
    status: "Em breve",
    image: "💚",
    features: ["Ada Lovelace Next-Gen", "48GB GDDR7", "Full Ray Tracing"]
  },
  {
    id: 2,
    name: "Intel Core Ultra 9 285K",
    category: "CPU",
    release: "Disponível agora",
    status: "Lançado",
    image: "🔷",
    features: ["Arrow Lake", "24 Cores", "AI Acceleration"]
  },
  {
    id: 3,
    name: "AMD Ryzen 9 9950X",
    category: "CPU",
    release: "Dezembro 2024",
    status: "Lançado",
    image: "🔶",
    features: ["Zen 5", "16 Cores", "3D V-Cache"]
  },
  {
    id: 4,
    name: "Corsair Vengeance DDR5 8000MHz",
    category: "RAM",
    release: "Disponível agora",
    status: "Lançado",
    image: "⚡",
    features: ["8000MHz", "CL38", "RGB Premium"]
  },
];

const Releases = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/library")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar à Biblioteca
        </Button>

        <section className="bg-gradient-hero rounded-3xl p-12 mb-8 text-center">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-3">
            Lançamentos e Novidades
          </h1>
          <p className="text-white/90 text-lg">
            Fique por dentro dos componentes mais recentes do mercado
          </p>
        </section>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {releases.map((release) => (
              <Card
                key={release.id}
                className="bg-card rounded-3xl border border-border hover:border-primary transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-9xl relative">
                  {release.image}
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      release.status === "Lançado" 
                        ? "bg-green-500 text-white" 
                        : "bg-yellow-500 text-white"
                    } border-0`}
                  >
                    {release.status}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary border-0">
                    {release.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {release.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {release.release}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {release.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-cyan-purple hover:opacity-90"
                      onClick={() => navigate("/library")}
                    >
                      Ver Detalhes
                    </Button>
                    {release.status === "Lançado" && (
                      <Button 
                        variant="outline"
                        className="flex-1 border-primary text-primary"
                        onClick={() => navigate("/cart")}
                      >
                        Comprar
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-pink-orange rounded-3xl p-8 border-0">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Receba Notificações
              </h2>
              <p className="text-white/90 mb-6">
                Cadastre-se para receber alertas sobre novos lançamentos e ofertas especiais
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Inscrever-se
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <ChatButton />
    </div>
  );
};

export default Releases;
