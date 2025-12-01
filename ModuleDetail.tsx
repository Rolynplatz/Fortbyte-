import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Clock, CheckCircle2, Lock, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const modulesData: Record<string, any> = {
  "1": {
    title: "Módulo 1: Fundamentos",
    description: "Aprenda os conceitos básicos de hardware e como os componentes funcionam",
    color: "bg-gradient-blue-purple",
    lessons: [
      { id: 1, title: "Aula 1: Introdução ao Hardware", duration: "35 min", completed: true, locked: false },
      { id: 2, title: "Aula 2: Processadores (CPUs)", duration: "42 min", completed: true, locked: false },
      { id: 3, title: "Aula 3: Placas de Vídeo (GPUs)", duration: "38 min", completed: false, locked: false },
      { id: 4, title: "Aula 4: Memória RAM", duration: "35 min", completed: false, locked: true },
    ]
  },
  "2": {
    title: "Módulo 2: Montagem",
    description: "Passo a passo completo para montar seu computador do zero",
    color: "bg-gradient-pink-orange",
    lessons: [
      { id: 5, title: "Aula 1: Ferramentas Necessárias", duration: "28 min", completed: false, locked: false },
      { id: 6, title: "Aula 2: Instalando o Processador", duration: "45 min", completed: false, locked: false },
      { id: 7, title: "Aula 3: Instalando a Memória RAM", duration: "32 min", completed: false, locked: true },
      { id: 8, title: "Aula 4: Montando na Placa-Mãe", duration: "50 min", completed: false, locked: true },
      { id: 9, title: "Aula 5: Cabos e Conectores", duration: "40 min", completed: false, locked: true },
      { id: 10, title: "Aula 6: Primeira Inicialização", duration: "35 min", completed: false, locked: true },
    ]
  },
  "3": {
    title: "Módulo 3: Software",
    description: "Instalação de sistemas operacionais e configuração de drivers",
    color: "bg-gradient-cyan-purple",
    lessons: [
      { id: 11, title: "Aula 1: Criando Pendrive Bootável", duration: "30 min", completed: false, locked: false },
      { id: 12, title: "Aula 2: Instalando Windows", duration: "48 min", completed: false, locked: false },
      { id: 13, title: "Aula 3: Drivers Essenciais", duration: "35 min", completed: false, locked: true },
      { id: 14, title: "Aula 4: Atualizações do Sistema", duration: "28 min", completed: false, locked: true },
      { id: 15, title: "Aula 5: Software Básico", duration: "42 min", completed: false, locked: true },
    ]
  },
  "4": {
    title: "Módulo 4: Otimização",
    description: "Maximize a performance e mantenha seu PC funcionando perfeitamente",
    color: "bg-gradient-green-yellow",
    lessons: [
      { id: 16, title: "Aula 1: Gerenciamento Térmico", duration: "38 min", completed: false, locked: false },
      { id: 17, title: "Aula 2: Overclock Seguro", duration: "52 min", completed: false, locked: false },
      { id: 18, title: "Aula 3: Manutenção Preventiva", duration: "35 min", completed: false, locked: true },
      { id: 19, title: "Aula 4: Diagnóstico de Problemas", duration: "45 min", completed: false, locked: true },
    ]
  }
};

const ModuleDetail = () => {
  const navigate = useNavigate();
  const { moduleId } = useParams();
  const module = modulesData[moduleId || "1"];

  if (!module) {
    return <div>Módulo não encontrado</div>;
  }

  const completedLessons = module.lessons.filter((l: any) => l.completed).length;
  const totalLessons = module.lessons.length;
  const progress = (completedLessons / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/tutorials")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos Módulos
        </Button>

        {/* Module Header */}
        <Card className={`${module.color} rounded-3xl p-12 mb-8 border-0`}>
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white border-0 mb-4">
              {completedLessons} de {totalLessons} aulas concluídas
            </Badge>
            <h1 className="text-4xl font-bold text-white mb-4">{module.title}</h1>
            <p className="text-white/90 text-lg mb-6">{module.description}</p>
            
            {/* Progress Bar */}
            <div className="bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
              <div 
                className="bg-white h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-white/80 text-sm mt-2">{Math.round(progress)}% completo</p>
          </div>
        </Card>

        {/* Lessons List */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Aulas do Módulo</h2>
          <div className="space-y-4">
            {module.lessons.map((lesson: any) => (
              <Card
                key={lesson.id}
                className={`bg-card rounded-2xl p-6 border transition-all duration-300 ${
                  lesson.locked 
                    ? "border-border opacity-60 cursor-not-allowed" 
                    : "border-border hover:border-primary cursor-pointer"
                }`}
                onClick={() => !lesson.locked && navigate(`/tutorials/lesson/${lesson.id}`)}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                    lesson.completed 
                      ? "bg-gradient-cyan-purple" 
                      : lesson.locked 
                      ? "bg-muted" 
                      : "bg-gradient-blue-purple"
                  }`}>
                    {lesson.locked ? (
                      <Lock className="w-8 h-8 text-muted-foreground" />
                    ) : lesson.completed ? (
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{lesson.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{lesson.duration}</span>
                      {lesson.completed && (
                        <>
                          <span>•</span>
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            Concluída
                          </Badge>
                        </>
                      )}
                      {lesson.locked && (
                        <>
                          <span>•</span>
                          <Badge variant="outline" className="bg-muted text-muted-foreground">
                            Bloqueada
                          </Badge>
                        </>
                      )}
                    </div>
                  </div>

                  {!lesson.locked && (
                    <Button 
                      className="bg-gradient-pink-orange hover:opacity-90"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/tutorials/lesson/${lesson.id}`);
                      }}
                    >
                      {lesson.completed ? "Revisar" : "Assistir"}
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Module Actions */}
          <div className="mt-8 flex gap-4">
            <Button 
              size="lg" 
              className="flex-1 bg-gradient-cyan-purple hover:opacity-90"
              onClick={() => {
                const firstUncompletedLesson = module.lessons.find((l: any) => !l.completed && !l.locked);
                if (firstUncompletedLesson) {
                  navigate(`/tutorials/lesson/${firstUncompletedLesson.id}`);
                }
              }}
            >
              Continuar Aprendendo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => navigate("/quizzes")}
            >
              Quiz do Módulo
            </Button>
          </div>
        </div>
      </main>

      <ChatButton />
    </div>
  );
};

export default ModuleDetail;
