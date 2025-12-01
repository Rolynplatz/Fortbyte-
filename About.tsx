import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Target, Users, Lightbulb, Heart, Award, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Nossa Missão",
      description: "Democratizar o conhecimento sobre hardware e capacitar pessoas a construir e manter seus próprios computadores.",
      gradient: "bg-gradient-cyan-purple",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Utilizamos tecnologia de ponta para criar experiências de aprendizado interativas e eficazes.",
      gradient: "bg-gradient-pink-orange",
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Construímos uma comunidade colaborativa onde todos podem aprender e compartilhar conhecimento.",
      gradient: "bg-gradient-blue-purple",
    },
    {
      icon: Heart,
      title: "Sustentabilidade",
      description: "Promovemos o reaproveitamento de peças e a redução do lixo eletrônico através da educação.",
      gradient: "bg-gradient-green-yellow",
    },
  ];

  const stats = [
    { number: "10k+", label: "Usuários Ativos" },
    { number: "500+", label: "Tutoriais" },
    { number: "1000+", label: "PCs Montados" },
    { number: "98%", label: "Satisfação" },
  ];

  const team = [
    { name: "João Silva", role: "Fundador & CEO", specialty: "Hardware Specialist" },
    { name: "Maria Santos", role: "CTO", specialty: "Software Engineering" },
    { name: "Pedro Costa", role: "Head of Education", specialty: "Content Creator" },
    { name: "Ana Lima", role: "Community Manager", specialty: "User Experience" },
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
              <h1 className="text-6xl font-bold text-white mb-4 animate-scale-in">
                Sobre o Fortbyte
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Capacitando a próxima geração de entusiastas e profissionais de hardware
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-8 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-6 text-center backdrop-glass border-border hover:shadow-card-hover transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="px-8 mb-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient animate-fade-in">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-8 backdrop-glass border-border hover:shadow-card-hover transition-all duration-500 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${value.gradient} flex items-center justify-center mb-4 shadow-glow-cyan group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="px-8 mb-12 animate-fade-in">
          <Card className="p-12 backdrop-glass border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-gradient text-center">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  O Fortbyte nasceu da percepção de que, mesmo em uma era digital, existe uma lacuna significativa 
                  no conhecimento técnico sobre hardware entre os chamados "nativos digitais". Muitos jovens crescem 
                  utilizando tecnologia diariamente, mas poucos compreendem como ela funciona por dentro.
                </p>
                <p>
                  Fundado em 2024, nossa plataforma foi criada com a missão de preencher essa lacuna através de 
                  educação acessível, prática e interativa. Acreditamos que qualquer pessoa pode aprender a montar, 
                  manter e reparar computadores com as ferramentas e orientação adequadas.
                </p>
                <p>
                  Além de capacitar nossos usuários, promovemos a sustentabilidade através do incentivo ao 
                  reaproveitamento de componentes e à redução do lixo eletrônico. Cada PC montado ou reparado 
                  representa não apenas conhecimento adquirido, mas também um passo em direção a um futuro mais 
                  sustentável.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Team Section */}
        <section className="px-8 mb-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient animate-fade-in">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="p-6 text-center backdrop-glass border-border hover:shadow-card-hover transition-all duration-500 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-cyan-purple mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-glow-cyan group-hover:shadow-glow-purple transition-all duration-300">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-lg text-foreground mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.specialty}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 mb-12 animate-fade-in">
          <Card className="p-12 backdrop-glass border-border text-center bg-gradient-to-br from-card to-card/50">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-primary animate-float" />
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              Pronto para Começar?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Junte-se a milhares de pessoas que já estão aprendendo e construindo seus próprios computadores.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/simulator">
                <button className="px-8 py-3 bg-gradient-cyan-purple text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-glow-cyan hover:shadow-glow-purple">
                  Começar Agora
                </button>
              </a>
              <a href="/tutorials">
                <button className="px-8 py-3 bg-card border border-border text-foreground rounded-full font-semibold hover:scale-105 transition-all duration-300">
                  Ver Tutoriais
                </button>
              </a>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default About;
