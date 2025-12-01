import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle2, ArrowLeft, ArrowRight, Download, BookOpen } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const lessonsData: Record<string, any> = {
  "1": {
    title: "Aula 1: Introdução ao Hardware",
    moduleId: "1",
    moduleName: "Módulo 1: Fundamentos",
    duration: "35 min",
    description: "Nesta aula você aprenderá os conceitos fundamentais sobre hardware de computadores, entendendo a função de cada componente e como eles trabalham juntos.",
    topics: [
      "O que é hardware?",
      "Componentes principais de um PC",
      "Como os componentes se comunicam",
      "Tipos de computadores"
    ],
    nextLessonId: "2",
    prevLessonId: null
  },
  "2": {
    title: "Aula 2: Processadores (CPUs)",
    moduleId: "1",
    moduleName: "Módulo 1: Fundamentos",
    duration: "42 min",
    description: "Aprenda tudo sobre processadores: como funcionam, diferenças entre Intel e AMD, e como escolher o melhor CPU para suas necessidades.",
    topics: [
      "Arquitetura de processadores",
      "Cores e threads",
      "Clock e performance",
      "Intel vs AMD"
    ],
    nextLessonId: "3",
    prevLessonId: "1"
  },
  "3": {
    title: "Aula 3: Placas de Vídeo (GPUs)",
    moduleId: "1",
    moduleName: "Módulo 1: Fundamentos",
    duration: "38 min",
    description: "Entenda como funcionam as placas de vídeo, suas especificações e como escolher a GPU ideal para jogos e trabalho profissional.",
    topics: [
      "Arquitetura de GPUs",
      "VRAM e largura de banda",
      "Ray tracing e DLSS",
      "NVIDIA vs AMD"
    ],
    nextLessonId: "4",
    prevLessonId: "2"
  }
};

const LessonDetail = () => {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const [completed, setCompleted] = useState(false);
  const lesson = lessonsData[lessonId || "1"];

  if (!lesson) {
    return <div>Aula não encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(`/tutorials/module/${lesson.moduleId}`)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao {lesson.moduleName}
        </Button>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <Card className="bg-card rounded-3xl overflow-hidden border border-border">
              <div className="aspect-video bg-gradient-blue-purple flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-black/40" />
                <Button 
                  size="lg"
                  className="relative z-10 w-20 h-20 rounded-full bg-white hover:bg-white/90 text-primary shadow-2xl"
                  onClick={() => setCompleted(true)}
                >
                  <Play className="w-10 h-10 ml-1" />
                </Button>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <Badge className="bg-white/20 text-white border-0">
                    {lesson.duration}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-2 text-foreground">{lesson.title}</h1>
                <p className="text-muted-foreground">{lesson.description}</p>
              </div>
            </Card>

            {/* Lesson Content */}
            <Card className="bg-card rounded-3xl p-8 border border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">O que você vai aprender</h2>
              <div className="space-y-4">
                {lesson.topics.map((topic: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-cyan-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-foreground text-lg">{topic}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border flex gap-4">
                <Button 
                  variant="outline" 
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '#';
                    link.download = `material-aula-${lessonId}.pdf`;
                    alert("Material de apoio em breve!");
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Material de Apoio
                </Button>
                <Button 
                  className="flex-1 bg-gradient-pink-orange hover:opacity-90"
                  onClick={() => setCompleted(!completed)}
                >
                  {completed ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Aula Concluída
                    </>
                  ) : (
                    <>
                      Marcar como Concluída
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex gap-4">
              {lesson.prevLessonId ? (
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => navigate(`/tutorials/lesson/${lesson.prevLessonId}`)}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Aula Anterior
                </Button>
              ) : (
                <div className="flex-1" />
              )}
              
              {lesson.nextLessonId ? (
                <Button
                  className="flex-1 bg-gradient-cyan-purple hover:opacity-90"
                  onClick={() => navigate(`/tutorials/lesson/${lesson.nextLessonId}`)}
                >
                  Próxima Aula
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  className="flex-1 bg-gradient-cyan-purple hover:opacity-90"
                  onClick={() => navigate(`/tutorials/module/${lesson.moduleId}`)}
                >
                  Concluir Módulo
                  <CheckCircle2 className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info */}
            <Card className="bg-gradient-blue-purple rounded-3xl p-6 border-0">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Continue Aprendendo
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Você está progredindo bem! Continue assistindo as aulas.
                </p>
                <Button 
                  className="w-full bg-white text-primary hover:bg-white/90"
                  onClick={() => navigate(`/tutorials/module/${lesson.moduleId}`)}
                >
                  Ver Todas as Aulas
                </Button>
              </div>
            </Card>

            {/* Quiz */}
            <Card className="bg-card rounded-3xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Teste seus Conhecimentos
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Complete um quiz sobre esta aula e ganhe pontos!
              </p>
              <Button 
                className="w-full bg-gradient-pink-orange hover:opacity-90"
                onClick={() => navigate("/quizzes")}
              >
                Fazer Quiz
              </Button>
            </Card>

            {/* Forum */}
            <Card className="bg-card rounded-3xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Dúvidas?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Participe do fórum e tire suas dúvidas com a comunidade.
              </p>
              <Button 
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => navigate("/forum")}
              >
                Ir para o Fórum
              </Button>
            </Card>
          </div>
        </div>
      </main>

      <ChatButton />
    </div>
  );
};

export default LessonDetail;
