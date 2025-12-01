import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const modules = [
  {
    id: 1,
    title: "Módulo 1: Fundamentos",
    description: "Aprenda os conceitos básicos de hardware",
    lessons: 4,
    duration: "2h 30min",
    color: "bg-gradient-blue-purple",
  },
  {
    id: 2,
    title: "Módulo 2: Montagem",
    description: "Passo a passo completo de montagem",
    lessons: 6,
    duration: "4h 15min",
    color: "bg-gradient-pink-orange",
  },
  {
    id: 3,
    title: "Módulo 3: Software",
    description: "Instalação de sistemas e drivers",
    lessons: 5,
    duration: "3h 20min",
    color: "bg-gradient-cyan-purple",
  },
  {
    id: 4,
    title: "Módulo 4: Otimização",
    description: "Performance e manutenção",
    lessons: 4,
    duration: "2h 45min",
    color: "bg-gradient-green-yellow",
  },
];

const Tutorials = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        {/* Hero Section */}
        <section className="bg-gradient-hero rounded-3xl p-12 mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">
            Tutoriais
          </h1>
          <p className="text-white/90 text-lg">
            Aprenda com nossos guias completos sobre montagem e manutenção de PCs
          </p>
        </section>

        <div className="max-w-6xl mx-auto">
          {/* Modules Grid */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold bg-gradient-cyan-purple bg-clip-text text-transparent">
                Módulos do Curso
              </h2>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => navigate("/progress")}
              >
                Ver Progresso
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module) => (
                <Card
                  key={module.id}
                  className="bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => navigate(`/tutorials/module/${module.id}`)}
                >
                  <div className={`${module.color} p-6`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{module.title}</h3>
                    <p className="text-white/90 mb-4">{module.description}</p>
                    <div className="flex items-center gap-4 text-sm text-white/80">
                      <span>{module.lessons} aulas</span>
                      <span>•</span>
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-card">
                    <Button 
                      className="w-full bg-gradient-cyan-purple hover:opacity-90"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/tutorials/module/${module.id}`);
                      }}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Começar Módulo
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Quick Access */}
          <section>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-pink-orange bg-clip-text text-transparent">
              Acesso Rápido
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card 
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 cursor-pointer group"
                onClick={() => navigate("/library")}
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-blue-purple mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Biblioteca de Peças</h3>
                  <p className="text-muted-foreground text-sm">Explore componentes</p>
                </div>
              </Card>

              <Card 
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 cursor-pointer group"
                onClick={() => navigate("/quizzes")}
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-pink-orange mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Teste seu Conhecimento</h3>
                  <p className="text-muted-foreground text-sm">Faça um quiz</p>
                </div>
              </Card>

              <Card 
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 cursor-pointer group"
                onClick={() => navigate("/forum")}
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-cyan-purple mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Tire suas Dúvidas</h3>
                  <p className="text-muted-foreground text-sm">Acesse o fórum</p>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Tutorials;
