import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Shield, Bell, Award, BookOpen, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        <section className="bg-gradient-hero rounded-3xl p-12 mb-8 text-center">
          <div className="w-24 h-24 rounded-full bg-white mx-auto mb-4 flex items-center justify-center text-primary text-4xl font-bold">
            M
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Mariana Silva
          </h1>
          <p className="text-white/90 text-lg">
            mariana.silva@email.com
          </p>
        </section>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-card border border-border">
              <TabsTrigger value="profile">Perfil</TabsTrigger>
              <TabsTrigger value="stats">Estatísticas</TabsTrigger>
              <TabsTrigger value="achievements">Conquistas</TabsTrigger>
              <TabsTrigger value="settings">Configurações</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card className="bg-card rounded-3xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informações Pessoais
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4" />
                        Nome Completo
                      </Label>
                      <Input id="name" defaultValue="Mariana Silva" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </Label>
                      <Input id="email" defaultValue="mariana.silva@email.com" />
                    </div>
                  </div>
                  <Button className="bg-gradient-cyan-purple hover:opacity-90">
                    Salvar Alterações
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="stats" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card rounded-3xl p-6 border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-cyan-purple flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Tutoriais</p>
                      <p className="text-3xl font-bold text-foreground">12</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Concluídos</p>
                </Card>

                <Card className="bg-card rounded-3xl p-6 border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-pink-orange flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Quizzes</p>
                      <p className="text-3xl font-bold text-foreground">8</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Aprovados</p>
                </Card>

                <Card className="bg-card rounded-3xl p-6 border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-blue-purple flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Montagens</p>
                      <p className="text-3xl font-bold text-foreground">5</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Salvas</p>
                </Card>
              </div>

              <Card className="bg-card rounded-3xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Progresso nos Módulos
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">Hardware Básico</span>
                      <span className="text-primary font-semibold">100%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-cyan-purple h-2 rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">Montagem de PCs</span>
                      <span className="text-primary font-semibold">65%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-pink-orange h-2 rounded-full" style={{ width: "65%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">Manutenção Avançada</span>
                      <span className="text-primary font-semibold">30%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-blue-purple h-2 rounded-full" style={{ width: "30%" }} />
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Primeiro Passo", desc: "Complete seu primeiro tutorial", unlocked: true },
                  { name: "Expert em Hardware", desc: "Complete todos os tutoriais básicos", unlocked: true },
                  { name: "Quiz Master", desc: "Acerte 10 quizzes seguidos", unlocked: true },
                  { name: "Construtor", desc: "Salve sua primeira montagem", unlocked: true },
                  { name: "Colaborador", desc: "Participe de 5 discussões no fórum", unlocked: false },
                  { name: "Guru da Tech", desc: "Complete todos os módulos avançados", unlocked: false },
                ].map((achievement, index) => (
                  <Card
                    key={index}
                    className={`bg-card rounded-3xl p-6 border ${
                      achievement.unlocked ? "border-primary" : "border-border opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-full ${
                        achievement.unlocked ? "bg-gradient-cyan-purple" : "bg-muted"
                      } flex items-center justify-center`}>
                        <Award className={`w-8 h-8 ${achievement.unlocked ? "text-white" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{achievement.name}</h3>
                        <Badge className={achievement.unlocked ? "bg-primary" : "bg-muted"}>
                          {achievement.unlocked ? "Desbloqueado" : "Bloqueado"}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="bg-card rounded-3xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Bell className="w-6 h-6" />
                  Notificações
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Novos Tutoriais</p>
                      <p className="text-sm text-muted-foreground">Receba notificações sobre novos conteúdos</p>
                    </div>
                    <Button variant="outline">Ativar</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Respostas no Fórum</p>
                      <p className="text-sm text-muted-foreground">Notificações de respostas às suas perguntas</p>
                    </div>
                    <Button variant="outline">Ativar</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Lançamentos de Produtos</p>
                      <p className="text-sm text-muted-foreground">Novos componentes na biblioteca</p>
                    </div>
                    <Button variant="outline">Ativar</Button>
                  </div>
                </div>
              </Card>

              <Card className="bg-card rounded-3xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Privacidade e Segurança
                </h2>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    Alterar Senha
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Autenticação em Duas Etapas
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-destructive border-destructive hover:bg-destructive hover:text-white">
                    Excluir Conta
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <ChatButton />
    </div>
  );
};

export default Profile;
