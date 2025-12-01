import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatButton } from "@/components/ChatButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface BuildComponent {
  type: string;
  name: string;
}

const Simulator = () => {
  const navigate = useNavigate();
  const [selectedComponents, setSelectedComponents] = useState<BuildComponent[]>([
    { type: "CPU", name: "Intel Core i9-14900K" },
    { type: "GPU", name: "NVIDIA ROG Strix RTX 4090-E" },
    { type: "RAM", name: "32GB DDR5 6000MHz" },
    { type: "Fonte", name: "Lian Li 011 Dynamic EVO" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        {/* Hero Section */}
        <section className="bg-gradient-hero rounded-3xl p-12 mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">
            Simulador de Build
          </h1>
          <p className="text-white/90 text-lg">
            Teste a compatibilidade e a performance da sua montagem antes de comprar.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Cards */}
          <div className="space-y-6">
            <Card 
              className="bg-gradient-blue-purple p-8 text-center rounded-3xl border-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate("/library")}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Selecionar Peça</h3>
            </Card>

            <Card 
              className="bg-gradient-cyan-purple p-8 text-center rounded-3xl border-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate("/compare")}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Ver Compatibilidade</h3>
            </Card>
          </div>

          {/* Center - Current Build */}
          <Card className="bg-card rounded-3xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-cyan-purple bg-clip-text text-transparent">
              Sua Montagem Atual
            </h2>
            <div className="space-y-4">
              {selectedComponents.map((component, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-muted rounded-xl border border-border"
                >
                  <div className="font-semibold text-primary min-w-[80px]">{component.type}</div>
                  <div className="flex-1 text-foreground">{component.name}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Right Cards */}
          <div className="space-y-6">
            <Card 
              className="bg-gradient-pink-orange p-8 text-center rounded-3xl border-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Performance Estimada</h3>
            </Card>

            <Card 
              className="bg-gradient-pink-orange p-8 text-center rounded-3xl border-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate("/simulator/saved")}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Salvar & Compartilhar</h3>
            </Card>
          </div>
        </div>

        {/* Performance Stats */}
        <Card className="mt-8 bg-card rounded-3xl p-8 border border-border">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Potência Total Estimada: <span className="text-primary">950W</span> | 
            FPS Médio em 4K: <span className="text-primary">120+</span>
          </h2>
        </Card>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Simulator;
