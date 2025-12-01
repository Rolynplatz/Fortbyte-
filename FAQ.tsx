import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Search, BookOpen, Cpu, Users, ShoppingCart } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "geral",
      title: "Perguntas Gerais",
      icon: HelpCircle,
      gradient: "bg-gradient-cyan-purple",
      faqs: [
        {
          question: "O que é o Fortbyte?",
          answer: "O Fortbyte é uma plataforma educacional completa focada em ensinar montagem e manutenção de computadores. Oferecemos tutoriais interativos, simulador de builds, quizzes educacionais e uma comunidade ativa para ajudar pessoas de todos os níveis a aprenderem sobre hardware.",
        },
        {
          question: "O uso da plataforma é gratuito?",
          answer: "Sim! Todo o conteúdo educacional da plataforma é 100% gratuito. Acreditamos que o conhecimento sobre tecnologia deve ser acessível a todos.",
        },
        {
          question: "Preciso de conhecimento prévio?",
          answer: "Não! Nossa plataforma foi desenvolvida para atender desde iniciantes absolutos até usuários avançados. Temos conteúdo adaptado para diferentes níveis de conhecimento.",
        },
        {
          question: "Como faço para criar uma conta?",
          answer: "Atualmente a plataforma está em fase beta e não requer cadastro. Em breve implementaremos um sistema completo de contas com perfis personalizados e acompanhamento de progresso.",
        },
      ],
    },
    {
      id: "tutoriais",
      title: "Tutoriais e Aprendizado",
      icon: BookOpen,
      gradient: "bg-gradient-pink-orange",
      faqs: [
        {
          question: "Como funcionam os tutoriais?",
          answer: "Nossos tutoriais são organizados em módulos temáticos, cada um contendo várias lições em vídeo. Você pode acompanhar seu progresso através de barras de avanço e materiais de apoio para cada aula.",
        },
        {
          question: "Os tutoriais têm certificado?",
          answer: "Em breve implementaremos um sistema de certificação para usuários que completarem módulos específicos. Fique atento às novidades!",
        },
        {
          question: "Posso baixar os materiais de apoio?",
          answer: "Sim! Cada lição oferece materiais de apoio que podem ser baixados para consulta offline, incluindo PDFs, diagramas e checklists.",
        },
        {
          question: "Com que frequência novos tutoriais são adicionados?",
          answer: "Adicionamos novos conteúdos semanalmente, incluindo tutoriais sobre novos componentes e tecnologias emergentes no mercado de hardware.",
        },
      ],
    },
    {
      id: "simulador",
      title: "Simulador de Build",
      icon: Cpu,
      gradient: "bg-gradient-blue-purple",
      faqs: [
        {
          question: "Como usar o simulador?",
          answer: "O simulador permite que você monte virtualmente um PC completo. Selecione cada componente (CPU, GPU, RAM, etc.) e o sistema automaticamente verifica compatibilidade e estima performance.",
        },
        {
          question: "O simulador verifica compatibilidade?",
          answer: "Sim! Nosso simulador possui um sistema inteligente de verificação que alerta sobre incompatibilidades entre componentes, como soquete de CPU incompatível com placa-mãe ou fonte insuficiente.",
        },
        {
          question: "Posso salvar minhas builds?",
          answer: "Sim! Você pode salvar quantas configurações quiser e compartilhá-las com a comunidade ou amigos através de um link único.",
        },
        {
          question: "Os preços são atualizados?",
          answer: "Os preços são estimativas baseadas em valores médios de mercado. Recomendamos consultar varejistas específicos para valores exatos e disponibilidade.",
        },
      ],
    },
    {
      id: "comunidade",
      title: "Fórum e Comunidade",
      icon: Users,
      gradient: "bg-gradient-green-yellow",
      faqs: [
        {
          question: "Como participar do fórum?",
          answer: "Acesse a seção Fórum no menu lateral. Você pode ler discussões existentes, criar novos tópicos e interagir com outros membros da comunidade.",
        },
        {
          question: "Existem regras de conduta?",
          answer: "Sim! Mantemos uma política de respeito mútuo. Não toleramos spam, linguagem ofensiva ou compartilhamento de conteúdo ilegal. Seja educado e colaborativo!",
        },
        {
          question: "Como posso ajudar outros usuários?",
          answer: "Compartilhe seu conhecimento respondendo dúvidas no fórum, participando de discussões e compartilhando suas builds e experiências.",
        },
        {
          question: "Posso denunciar conteúdo inadequado?",
          answer: "Sim! Cada post possui uma opção de denúncia. Nossa equipe de moderação analisa todas as denúncias rapidamente.",
        },
      ],
    },
    {
      id: "compras",
      title: "Biblioteca e Comparações",
      icon: ShoppingCart,
      gradient: "bg-gradient-warm",
      faqs: [
        {
          question: "A plataforma vende componentes?",
          answer: "Não vendemos componentes diretamente. Nossa biblioteca serve como catálogo educacional e referência. Fornecemos links para varejistas confiáveis onde você pode adquirir os produtos.",
        },
        {
          question: "Como usar a comparação de peças?",
          answer: "Na página de Comparação, você pode selecionar até 3 componentes do mesmo tipo e visualizar lado a lado especificações, preços e performance estimada.",
        },
        {
          question: "As especificações são confiáveis?",
          answer: "Sim! Todas as especificações são baseadas em dados oficiais dos fabricantes e atualizadas regularmente.",
        },
        {
          question: "Vocês recebem comissão de vendas?",
          answer: "Alguns links podem conter código de afiliado, o que nos ajuda a manter a plataforma gratuita sem afetar o preço para o usuário.",
        },
      ],
    },
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.faqs.length > 0);

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
              <HelpCircle className="w-16 h-16 mx-auto mb-4 text-white animate-pulse-slow" />
              <h1 className="text-6xl font-bold text-white mb-4 animate-scale-in">
                Perguntas Frequentes
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Encontre respostas para as dúvidas mais comuns sobre a plataforma
              </p>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="px-8 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Card className="p-6 backdrop-glass border-border">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar por pergunta ou palavra-chave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-background border-border text-lg"
              />
            </div>
          </Card>
        </section>

        {/* FAQ Categories */}
        <section className="px-8 mb-12">
          {filteredCategories.length === 0 ? (
            <Card className="p-12 backdrop-glass border-border text-center">
              <p className="text-muted-foreground text-lg">
                Nenhuma pergunta encontrada. Tente outro termo de busca.
              </p>
            </Card>
          ) : (
            <div className="space-y-8">
              {filteredCategories.map((category, catIndex) => (
                <div
                  key={category.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${catIndex * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${category.gradient} flex items-center justify-center shadow-glow-cyan`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gradient">{category.title}</h2>
                  </div>
                  
                  <Card className="backdrop-glass border-border overflow-hidden">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${category.id}-${faqIndex}`} className="border-b border-border last:border-0">
                          <AccordionTrigger className="px-6 py-4 hover:bg-accent/50 transition-colors duration-300">
                            <span className="text-left font-semibold text-foreground">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Contact CTA */}
        <section className="px-8 mb-12 animate-fade-in">
          <Card className="p-12 backdrop-glass border-border text-center bg-gradient-to-br from-primary/10 to-transparent">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Não encontrou sua resposta?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Nossa equipe está pronta para ajudar! Entre em contato conosco ou visite nossa central de suporte.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => window.location.href = '/contact'} size="lg">
                Entrar em Contato
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/support'} size="lg">
                Central de Suporte
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

export default FAQ;
