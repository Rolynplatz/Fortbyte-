import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const availableComponents = [
  { id: 1, name: "Intel Core i9-14900K", category: "CPU", price: "R$ 3.899,90", specs: { cores: "24", threads: "32", clock: "6.0 GHz" } },
  { id: 2, name: "AMD Ryzen 9 7950X", category: "CPU", price: "R$ 3.599,90", specs: { cores: "16", threads: "32", clock: "5.7 GHz" } },
  { id: 3, name: "Intel Core i7-14700K", category: "CPU", price: "R$ 2.799,90", specs: { cores: "20", threads: "28", clock: "5.6 GHz" } },
];

const Compare = () => {
  const navigate = useNavigate();
  const [selectedComponents, setSelectedComponents] = useState<typeof availableComponents>([]);

  const addComponent = (component: typeof availableComponents[0]) => {
    if (selectedComponents.length < 4 && !selectedComponents.find(c => c.id === component.id)) {
      setSelectedComponents([...selectedComponents, component]);
    }
  };

  const removeComponent = (id: number) => {
    setSelectedComponents(selectedComponents.filter(c => c.id !== id));
  };

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
          <h1 className="text-4xl font-bold text-white mb-3">
            Comparar Componentes
          </h1>
          <p className="text-white/90 text-lg">
            Compare especificações lado a lado para tomar a melhor decisão
          </p>
        </section>

        <div className="max-w-7xl mx-auto">
          {/* Available Components */}
          <Card className="bg-card rounded-3xl p-8 border border-border mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Adicionar Componentes ({selectedComponents.length}/4)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {availableComponents.map((component) => (
                <Button
                  key={component.id}
                  variant="outline"
                  className="h-auto p-4 text-left flex flex-col items-start gap-2"
                  onClick={() => addComponent(component)}
                  disabled={selectedComponents.length >= 4 || selectedComponents.some(c => c.id === component.id)}
                >
                  <div className="font-semibold text-foreground">{component.name}</div>
                  <div className="text-sm text-muted-foreground">{component.price}</div>
                  <Plus className="w-4 h-4 ml-auto" />
                </Button>
              ))}
            </div>
          </Card>

          {/* Comparison Table */}
          {selectedComponents.length > 0 && (
            <Card className="bg-card rounded-3xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Comparação</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-foreground">Especificação</th>
                      {selectedComponents.map((component) => (
                        <th key={component.id} className="p-4 text-center relative">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={() => removeComponent(component.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                          <div className="font-semibold text-foreground mb-2">{component.name}</div>
                          <div className="text-sm text-primary">{component.price}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold text-foreground">Cores</td>
                      {selectedComponents.map((component) => (
                        <td key={component.id} className="p-4 text-center text-foreground">
                          {component.specs.cores}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold text-foreground">Threads</td>
                      {selectedComponents.map((component) => (
                        <td key={component.id} className="p-4 text-center text-foreground">
                          {component.specs.threads}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold text-foreground">Clock Boost</td>
                      {selectedComponents.map((component) => (
                        <td key={component.id} className="p-4 text-center text-foreground">
                          {component.specs.clock}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4"></td>
                      {selectedComponents.map((component) => (
                        <td key={component.id} className="p-4 text-center">
                          <Button 
                            className="bg-gradient-cyan-purple hover:opacity-90 w-full"
                            onClick={() => navigate("/cart")}
                          >
                            Comprar
                          </Button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {selectedComponents.length === 0 && (
            <Card className="bg-muted rounded-3xl p-12 text-center border border-border">
              <p className="text-muted-foreground text-lg">
                Adicione componentes acima para começar a comparação
              </p>
            </Card>
          )}
        </div>
      </main>

      <ChatButton />
    </div>
  );
};

export default Compare;
