import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@fortbyte.com",
      subtitle: "Resposta em até 24h",
      gradient: "bg-gradient-cyan-purple",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 9999-9999",
      subtitle: "Seg-Sex, 9h-18h",
      gradient: "bg-gradient-pink-orange",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP",
      subtitle: "Brasil",
      gradient: "bg-gradient-blue-purple",
    },
  ];

  const faqs = [
    {
      question: "Como funciona a plataforma?",
      answer: "Nossa plataforma oferece tutoriais interativos, simulador de montagem e uma comunidade ativa.",
    },
    {
      question: "O conteúdo é gratuito?",
      answer: "Sim! Todo o conteúdo educacional da plataforma é gratuito para todos os usuários.",
    },
    {
      question: "Como posso contribuir?",
      answer: "Você pode participar do fórum, compartilhar builds e ajudar outros usuários.",
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
              <MessageCircle className="w-16 h-16 mx-auto mb-4 text-white animate-pulse-slow" />
              <h1 className="text-6xl font-bold text-white mb-4 animate-scale-in">
                Entre em Contato
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Estamos aqui para ajudar! Envie sua mensagem e responderemos o mais rápido possível.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="px-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="p-6 backdrop-glass border-border hover:shadow-card-hover transition-all duration-500 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl ${info.gradient} flex items-center justify-center mb-4 shadow-glow-cyan group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.content}</p>
                <p className="text-muted-foreground text-sm">{info.subtitle}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form & FAQ */}
        <section className="px-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 backdrop-glass border-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-bold mb-6 text-gradient">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Nome</label>
                  <Input
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">E-mail</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Assunto</label>
                  <Input
                    placeholder="Sobre o que deseja falar?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Mensagem</label>
                  <Textarea
                    placeholder="Descreva sua dúvida ou sugestão..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </Card>

            {/* FAQ Section */}
            <div className="space-y-6">
              <Card className="p-8 backdrop-glass border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-3xl font-bold mb-6 text-gradient">Perguntas Frequentes</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0">
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-6"
                  onClick={() => window.location.href = '/faq'}
                >
                  Ver Todas as Perguntas
                </Button>
              </Card>

              <Card className="p-8 backdrop-glass border-border bg-gradient-to-br from-primary/10 to-transparent animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-foreground">Horário de Atendimento</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Segunda a Sexta:</strong> 9h - 18h</p>
                  <p><strong className="text-foreground">Sábado:</strong> 10h - 14h</p>
                  <p><strong className="text-foreground">Domingo:</strong> Fechado</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="px-8 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="p-12 backdrop-glass border-border text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Outras Formas de Contato</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Você também pode nos encontrar através do nosso fórum ou chat ao vivo disponível no canto inferior direito da tela.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => window.location.href = '/forum'}>
                Visitar Fórum
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/support'}>
                Central de Ajuda
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Contact;
