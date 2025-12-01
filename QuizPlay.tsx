import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const quizzesData: Record<string, any> = {
  "0": {
    title: "Quiz: Conhecimentos Básicos",
    questions: [
      {
        question: "Qual é a função principal da CPU?",
        options: [
          "Armazenar dados permanentemente",
          "Processar instruções e cálculos",
          "Exibir imagens na tela",
          "Conectar à internet"
        ],
        correct: 1
      },
      {
        question: "O que significa RAM?",
        options: [
          "Random Access Memory",
          "Rapid Access Module",
          "Read And Modify",
          "Remote Access Machine"
        ],
        correct: 0
      },
      {
        question: "Qual componente é responsável por renderizar gráficos em jogos?",
        options: [
          "CPU",
          "RAM",
          "GPU",
          "SSD"
        ],
        correct: 2
      },
      {
        question: "O que é um SSD?",
        options: [
          "Sistema de Som Digital",
          "Solid State Drive - armazenamento rápido",
          "Suporte de Software Dinâmico",
          "Sistema de Segurança de Dados"
        ],
        correct: 1
      },
      {
        question: "Qual a função da fonte de alimentação?",
        options: [
          "Armazenar energia",
          "Converter e distribuir energia elétrica",
          "Refrigerar o sistema",
          "Processar dados"
        ],
        correct: 1
      },
      {
        question: "O que conecta todos os componentes do PC?",
        options: [
          "Gabinete",
          "Fonte de alimentação",
          "Placa-mãe",
          "Processador"
        ],
        correct: 2
      },
      {
        question: "Para que serve a memória cache da CPU?",
        options: [
          "Armazenar arquivos permanentemente",
          "Guardar dados frequentes para acesso rápido",
          "Renderizar gráficos",
          "Conectar periféricos"
        ],
        correct: 1
      },
      {
        question: "O que significa dual channel para RAM?",
        options: [
          "Dois tipos de memória diferentes",
          "Usar dois pentes de RAM para dobrar velocidade",
          "Memória com dois lados",
          "RAM com dois conectores"
        ],
        correct: 1
      },
      {
        question: "Qual a diferença entre HDD e SSD?",
        options: [
          "HDD é mais rápido",
          "SSD tem partes móveis",
          "SSD é mais rápido e sem partes móveis",
          "São exatamente iguais"
        ],
        correct: 2
      },
      {
        question: "O que é TDP de um processador?",
        options: [
          "Tipo de Processador Digital",
          "Thermal Design Power - consumo e dissipação de calor",
          "Taxa de Dados por Processamento",
          "Tempo de Duração Programada"
        ],
        correct: 1
      }
    ]
  },
  "1": {
    title: "Quiz: Avançado",
    questions: [
      {
        question: "O que é PCIe 5.0?",
        options: [
          "Versão do Windows",
          "Interface de conexão de alta velocidade para componentes",
          "Tipo de processador",
          "Modelo de placa de vídeo"
        ],
        correct: 1
      },
      {
        question: "Qual a vantagem do 3D V-Cache nos processadores AMD?",
        options: [
          "Gráficos 3D melhores",
          "Cache adicional empilhado verticalmente para melhor performance",
          "Suporte a monitores 3D",
          "Reduz consumo de energia"
        ],
        correct: 1
      },
      {
        question: "O que é DLSS da NVIDIA?",
        options: [
          "Tipo de memória VRAM",
          "Tecnologia de upscaling com IA para melhorar FPS",
          "Sistema de refrigeração",
          "Formato de vídeo"
        ],
        correct: 1
      },
      {
        question: "Qual a diferença entre DDR4 e DDR5?",
        options: [
          "DDR5 é mais rápida e eficiente",
          "DDR4 é mais recente",
          "São exatamente iguais",
          "DDR5 é mais lenta"
        ],
        correct: 0
      },
      {
        question: "O que significa certificação 80+ Gold em fontes?",
        options: [
          "Cor dourada",
          "Eficiência energética de pelo menos 90%",
          "Garantia de 80 meses",
          "Potência de 80 watts"
        ],
        correct: 1
      }
    ]
  },
  "2": {
    title: "Quiz: Hardware Moderno",
    questions: [
      {
        question: "Qual a principal vantagem dos SSDs NVMe sobre SATA?",
        options: [
          "Mais baratos",
          "Velocidades muito superiores via PCIe",
          "Maior capacidade",
          "Mais duráveis"
        ],
        correct: 1
      },
      {
        question: "O que é Ray Tracing?",
        options: [
          "Marca de GPU",
          "Técnica de iluminação realista que simula reflexos de luz",
          "Tipo de monitor",
          "Sistema de refrigeração"
        ],
        correct: 1
      },
      {
        question: "Para que serve XMP/DOCP na RAM?",
        options: [
          "Aumentar capacidade",
          "Perfil de overclock automático para atingir frequências anunciadas",
          "Reduzir temperatura",
          "Melhorar RGB"
        ],
        correct: 1
      },
      {
        question: "Qual socket a Intel usa para processadores de 14ª geração?",
        options: [
          "AM5",
          "AM4",
          "LGA1700",
          "LGA1200"
        ],
        correct: 2
      },
      {
        question: "O que diferencia GPUs para gaming de GPUs profissionais?",
        options: [
          "Apenas o preço",
          "Drivers e otimizações específicas para aplicações profissionais",
          "Cor da placa",
          "Tamanho físico"
        ],
        correct: 1
      }
    ]
  }
};

const QuizPlay = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();
  const quiz = quizzesData[quizId || "0"];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  if (!quiz) {
    return <div>Quiz não encontrado</div>;
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  const handleAnswer = (index: number) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);
    
    if (index === question.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    const percentage = (score / quiz.questions.length) * 100;
    return (
      <div className="min-h-screen bg-background">
        <Sidebar />
        <Header userName="Mariana" />
        
        <main className="ml-20 pt-20 p-8">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-hero rounded-3xl p-12 text-center border-0">
              <h1 className="text-5xl font-bold text-white mb-6">
                Quiz Concluído!
              </h1>
              <div className="text-8xl font-bold text-white mb-6">
                {score}/{quiz.questions.length}
              </div>
              <p className="text-2xl text-white/90 mb-8">
                Você acertou {percentage.toFixed(0)}% das questões
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => navigate("/quizzes")}
                >
                  Voltar aos Quizzes
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => window.location.reload()}
                >
                  Tentar Novamente
                </Button>
              </div>
            </Card>
          </div>
        </main>

        <ChatButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/quizzes")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Sair do Quiz
        </Button>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card rounded-3xl p-8 border border-border mb-6">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-2xl font-bold text-foreground">{quiz.title}</h2>
                <span className="text-lg font-semibold text-muted-foreground">
                  {currentQuestion + 1}/{quiz.questions.length}
                </span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {question.question}
              </h3>
              
              <div className="space-y-3">
                {question.options.map((option: string, index: number) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === question.correct;
                  const showCorrect = answered && isCorrect;
                  const showWrong = answered && isSelected && !isCorrect;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={answered}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center justify-between ${
                        showCorrect
                          ? "border-green-500 bg-green-500/10"
                          : showWrong
                          ? "border-red-500 bg-red-500/10"
                          : isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border bg-muted hover:border-primary hover:bg-muted/80"
                      } ${answered ? "cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <span className="text-foreground font-medium">{option}</span>
                      {showCorrect && <CheckCircle className="w-6 h-6 text-green-500" />}
                      {showWrong && <XCircle className="w-6 h-6 text-red-500" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {answered && (
              <Button 
                size="lg"
                className="w-full bg-gradient-cyan-purple hover:opacity-90"
                onClick={handleNext}
              >
                {currentQuestion < quiz.questions.length - 1 ? "Próxima Questão" : "Ver Resultado"}
              </Button>
            )}
          </Card>

          <Card className="bg-gradient-pink-orange rounded-2xl p-6 border-0">
            <p className="text-white text-center">
              <strong>Pontuação atual:</strong> {score} acertos
            </p>
          </Card>
        </div>
      </main>

      <ChatButton />
    </div>
  );
};

export default QuizPlay;
