import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const NewDiscussion = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Discussão criada!",
      description: "Sua discussão foi publicada no fórum com sucesso.",
    });
    navigate("/forum");
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/forum")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Fórum
        </Button>

        <section className="bg-gradient-hero rounded-3xl p-12 mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">
            Nova Discussão
          </h1>
          <p className="text-white/90 text-lg">
            Compartilhe suas dúvidas e conhecimentos com a comunidade
          </p>
        </section>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <Card className="bg-card rounded-3xl p-8 border border-border">
            <div className="space-y-6">
              <div>
                <Label htmlFor="title" className="text-lg font-semibold">
                  Título da Discussão
                </Label>
                <Input
                  id="title"
                  placeholder="Ex: Qual a melhor GPU para jogos em 1440p?"
                  className="mt-2 text-lg"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="content" className="text-lg font-semibold">
                  Conteúdo
                </Label>
                <Textarea
                  id="content"
                  placeholder="Descreva sua dúvida ou compartilhe seu conhecimento em detalhes..."
                  className="mt-2 min-h-[300px] text-base"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground mb-3">Dicas para uma boa discussão:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Seja claro e específico no título</li>
                  <li>• Forneça contexto e detalhes relevantes</li>
                  <li>• Seja respeitoso com outros membros</li>
                  <li>• Use formatação para facilitar a leitura</li>
                  <li>• Pesquise antes para evitar duplicações</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="mt-8 flex gap-4">
            <Button 
              type="button"
              size="lg"
              variant="outline"
              className="flex-1 border-primary text-primary"
              onClick={() => navigate("/forum")}
            >
              Cancelar
            </Button>
            <Button 
              type="submit"
              size="lg"
              className="flex-1 bg-gradient-pink-orange hover:opacity-90"
            >
              <Send className="w-5 h-5 mr-2" />
              Publicar Discussão
            </Button>
          </div>
        </form>
      </main>

      <ChatButton />
    </div>
  );
};

export default NewDiscussion;
