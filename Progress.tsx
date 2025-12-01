import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Star, Award, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const modules = [
  { id: 1, name: "Fundamentos", completed: 2, total: 4, progress: 50 },
  { id: 2, name: "Montagem", completed: 0, total: 6, progress: 0 },
  { id: 3, name: "Software", completed: 0, total: 5, progress: 0 },
  { id: 4, name: "Otimização", completed: 0, total: 4, progress: 0 },
];

const achievements = [
  { id: 1, name: "Primeira Aula", description: "Complete sua primeira aula", unlocked: true, icon: "🎓" },
  { id: 2, name: "Quiz Master", description: "Acerte 100% em um quiz", unlocked: true, icon: "🏆" },
  { id: 3, name: "Estudante Dedicado", description: "Complete 10 aulas", unlocked: false, icon: "📚" },
  { id: 4, name: "Expert em Hardware", description: "Complete todos os módulos", unlocked: false, icon: "⭐" },
];

const Progress = () => {
  const navigate = useNavigate();

  const totalCompleted = modules.reduce((sum, m) => sum + m.completed, 0);
  const totalLessons = modules.reduce((sum, m) => sum + m.total, 0);
  const overallProgress = (totalCompleted / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/tutorials")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos Tutoriais
        </Button>

        <section className="bg-gradient-hero rounded-3xl p-12 mb-8 text-center">
          <Trophy className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-3">
            Seu Progresso
          </h1>
          <p className="text-white/90 text-lg">
            Acompanhe seu aprendizado e conquistas
          </p>
        </section>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Overall Progress */}
          <Card className="bg-card rounded-3xl p-8 border border-border">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Progresso Geral</h2>
                <p className="text-muted-foreground">
                  {totalCompleted} de {totalLessons} aulas concluídas
                </p>
              </div>
              <div className="text-5xl font-bold text-primary">
                {Math.round(overallProgress)}%
              </div>
            </div>
            <ProgressBar value={overallProgress} className="h-4" />
          </Card>

          {/* Modules Progress */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Progresso por Módulo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module) => (
                <Card
                  key={module.id}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all cursor-pointer"
                  onClick={() => navigate(`/tutorials/module/${module.id}`)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{module.name}</h3>
                    <Badge className="bg-primary/10 text-primary border-0">
                      {module.completed}/{module.total}
                    </Badge>
                  </div>
                  <ProgressBar value={module.progress} className="h-3 mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {module.progress}% completo
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Conquistas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className={`bg-card rounded-2xl p-6 border text-center transition-all ${
                    achievement.unlocked
                      ? "border-primary shadow-lg"
                      : "border-border opacity-60"
                  }`}
                >
                  <div className="text-6xl mb-4">{achievement.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {achievement.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {achievement.description}
                  </p>
                  <Badge
                    className={`${
                      achievement.unlocked
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    } border-0`}
                  >
                    {achievement.unlocked ? "Desbloqueada" : "Bloqueada"}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-blue-purple rounded-2xl p-6 border-0 text-center">
              <Target className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">{totalCompleted}</div>
              <p className="text-white/90">Aulas Concluídas</p>
            </Card>
            <Card className="bg-gradient-pink-orange rounded-2xl p-6 border-0 text-center">
              <Star className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">2</div>
              <p className="text-white/90">Conquistas</p>
            </Card>
            <Card className="bg-gradient-cyan-purple rounded-2xl p-6 border-0 text-center">
              <Award className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">85%</div>
              <p className="text-white/90">Média nos Quizzes</p>
            </Card>
          </div>

          {/* Continue Learning */}
          <Card className="bg-gradient-green-yellow rounded-3xl p-8 border-0">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Continue Aprendendo!
              </h2>
              <p className="text-white/90 mb-6">
                Você está indo muito bem! Continue assim para desbloquear mais conquistas
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => navigate("/tutorials")}
              >
                Continuar Estudando
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <ChatButton />
    </div>
  );
};

export default Progress;
