import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Trophy } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const quizzes = [
  { title: "Quiz: Conhecimentos Básicos", questions: 10, difficulty: "Fácil" },
  { title: "Quiz: Avançado", questions: 15, difficulty: "Difícil" },
  { title: "Quiz: Hardware Moderno", questions: 12, difficulty: "Médio" },
];

const Quizzes = () => {
  const navigate = useNavigate();
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        {/* Hero Section */}
        <section className="bg-gradient-hero rounded-3xl p-12 mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">
            Quizzes
          </h1>
          <p className="text-white/90 text-lg">
            Teste seus conhecimentos sobre montagem de computadores
          </p>
        </section>

        <div className="max-w-4xl mx-auto">
          {/* Quizzes Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-cyan-purple bg-clip-text text-transparent">
              Quizzes Disponíveis
            </h2>
            <div className="space-y-4">
              {quizzes.map((quiz, index) => (
                <Card
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedQuiz(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-blue-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{quiz.title}</h3>
                        <p className="text-muted-foreground">
                          {quiz.questions} questões • {quiz.difficulty}
                        </p>
                      </div>
                    </div>
                    <Button 
                      className="bg-gradient-pink-orange hover:opacity-90"
                      onClick={() => navigate(`/quizzes/${index}`)}
                    >
                      Iniciar
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Stats Card */}
          <Card className="bg-gradient-blue-purple rounded-3xl p-8 text-center border-0">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Trophy className="w-12 h-12 text-white" />
              <h3 className="text-3xl font-bold text-white">Sua Pontuação</h3>
            </div>
            <p className="text-white/90 text-lg">Complete os quizzes para ganhar pontos e badges!</p>
          </Card>
        </div>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Quizzes;
