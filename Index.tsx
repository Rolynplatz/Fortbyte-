import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { ChatButton } from "@/components/ChatButton";
import { Button } from "@/components/ui/button";
import { Cpu, BookOpen, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl mx-8 mt-8 mb-12 animate-fade-in">
          <div className="bg-gradient-hero p-16 text-center relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
            <div className="relative z-10">
              <h1 className="text-6xl font-bold text-white mb-4 animate-scale-in">
                Bem-vindo ao Fortbyte!
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Seu hub de tecnologia, dúvidas, avaliações e aprendizado!
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 hover:scale-105 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-elevated"
                  onClick={() => navigate("/simulator")}
                >
                  Começar Agora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 hover:scale-105 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
                  onClick={() => navigate("/tutorials")}
                >
                  Ver Tutoriais
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mb-12">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <FeatureCard
              icon={Cpu}
              title="Componentes"
              description="Monte seu computador personalizado!"
              gradient="bg-gradient-blue-purple"
              onClick={() => navigate("/library")}
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <FeatureCard
              icon={BookOpen}
              title="Tutoriais"
              description="Aprenda com nossos guias passo a passo."
              gradient="bg-gradient-pink-orange"
              onClick={() => navigate("/tutorials")}
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <FeatureCard
              icon={MessageSquare}
              title="Fórum"
              description="Tire dúvidas e compartilhe experiências."
              gradient="bg-gradient-cyan-purple"
              onClick={() => navigate("/forum")}
            />
          </div>
        </section>

        {/* About Section */}
        <section className="px-8 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-card rounded-3xl p-12 border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
            <h2 className="text-4xl font-bold text-center mb-6 text-gradient">
              Sobre Nós
            </h2>
            <p className="text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed text-lg mb-8">
              O objetivo é ensinar jovens sobre a manutenção e reparo de hardware, preenchendo uma lacuna de 
              conhecimento técnico que existe mesmo entre os "nativos digitais". Nossa plataforma oferece 
              tutoriais, quizzes e fóruns interativos, com conteúdo adaptado a diferentes níveis de aprendizado. 
              Além de capacitar os usuários, o projeto promove a sustentabilidade, incentivando o reaproveitamento 
              de peças e a redução do lixo eletrônico.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline"
                className="hover:scale-105 transition-transform duration-300"
                onClick={() => navigate("/tutorials")}
              >
                Explorar Tutoriais
              </Button>
              <Button 
                variant="outline"
                className="hover:scale-105 transition-transform duration-300"
                onClick={() => navigate("/quizzes")}
              >
                Testar Conhecimento
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
