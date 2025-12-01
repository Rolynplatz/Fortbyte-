import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LifeBuoy, Book, MessageCircle, Video, FileText, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

  const supportOptions = [
    {
      icon: Book,
      title: "Base de Conhecimento",
      description: "Acesse nossa biblioteca completa de artigos e guias detalhados.",
      action: "Ver Tutoriais",
      path: "/tutorials",
      gradient: "bg-gradient-cyan-purple",
    },
    {
      icon: MessageCircle,
      title: "Fórum da Comunidade",
      description: "Tire dúvidas com outros usuários e especialistas.",
      action: "Acessar Fórum",
      path: "/forum",
      gradient: "bg-gradient-pink-orange",
    },
    {
      icon: FileText,
      title: "Perguntas Frequentes",
      description: "Respostas rápidas para as dúvidas mais comuns.",
      action: "Ver FAQ",
      path: "/faq",
      gradient: "bg-gradient-blue-purple",
    },
    {
      icon: Video,
      title: "Video Tutoriais",
      description: "Aprenda através de tutoriais em vídeo passo a passo.",
      action: "Assistir Vídeos",
      path: "/tutorials",
      gradient: "bg-gradient-green-yellow",
    },
    {
      icon: Headphones,
      title: "Chat ao Vivo",
      description: "Converse com nosso assistente virtual em tempo real.",
      action: "Iniciar Chat",
      path: "#",
      gradient: "bg-gradient-warm",
      isChat: true,
    },
    {
      icon: LifeBuoy,
      title: "Contato Direto",
      description: "Entre em contato com nossa equipe de suporte.",
      action: "Enviar Mensagem",
      path: "/contact",
      gradient: "bg-gradient-cool",
    },
  ];

  const guides = [
    {
      title: "Primeiros Passos",
      description: "Aprenda a navegar pela plataforma e começar seus estudos.",
      topics: ["Criar conta", "Navegar tutoriais", "Usar simulador", "Participar do fórum"],
    },
    {
      title: "Montagem de PC",
      description: "Guia completo desde a escolha de componentes até a montagem final.",
      topics: ["Escolher componentes", "Compatibilidade", "Montagem física", "Primeiro boot"],
    },
    {
      title: "Solução de Problemas",
      description: "Resolva os problemas mais comuns em hardware e montagem.",
      topics: ["PC não liga", "Problemas de temperatura", "Erros de boot", "Performance baixa"],
    },
  ];

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
              <LifeBuoy className="w-16 h-16 mx-auto mb-4 text-white animate-pulse-slow" />
              <h1 className="text-6xl font-bold text-white mb-4 animate-scale-in">
                Central de Suporte
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Estamos aqui para ajudar você! Escolha a melhor forma de obter suporte.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="px-8 mb-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient animate-fade-in">
            Como Podemos Ajudar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <Card
                key={index}
                className="p-8 backdrop-glass border-border hover:shadow-card-hover transition-all duration-500 hover:scale-105 animate-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  if (option.isChat) {
                    // Chat button will handle this
                    const chatButton = document.querySelector('[class*="fixed bottom-8 right-8"]');
                    if (chatButton instanceof HTMLElement) chatButton.click();
                  } else {
                    navigate(option.path);
                  }
                }}
              >
                <div className={`w-16 h-16 rounded-2xl ${option.gradient} flex items-center justify-center mb-4 shadow-glow-cyan group-hover:scale-110 transition-transform duration-300`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{option.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{option.description}</p>
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                  {option.action}
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Guides */}
        <section className="px-8 mb-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient animate-fade-in">
            Guias Populares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <Card
                key={index}
                className="p-8 backdrop-glass border-border hover:shadow-card-hover transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-3 text-foreground">{guide.title}</h3>
                <p className="text-muted-foreground mb-4">{guide.description}</p>
                <ul className="space-y-2">
                  {guide.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Support */}
        <section className="px-8 mb-12 animate-fade-in">
          <Card className="p-12 backdrop-glass border-border text-center bg-gradient-to-br from-destructive/10 to-transparent border-destructive/20">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Precisa de Ajuda Urgente?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Se você está enfrentando um problema crítico ou precisa de suporte imediato, nossa equipe está disponível.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/contact')} size="lg" variant="destructive">
                Contato de Emergência
              </Button>
              <Button variant="outline" onClick={() => navigate('/forum')} size="lg">
                Postar no Fórum
              </Button>
            </div>
          </Card>
        </section>

        {/* Status */}
        <section className="px-8 mb-12 animate-fade-in">
          <Card className="p-8 backdrop-glass border-border">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Status da Plataforma</h3>
                <p className="text-muted-foreground">Todos os sistemas operando normalmente</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse-slow" />
                <span className="text-success font-semibold">Online</span>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Support;
