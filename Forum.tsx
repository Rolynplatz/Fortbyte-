import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const forumPosts = [
  {
    title: "Qual a melhor GPU para jogos em 1440p?",
    author: "TechGamer2024",
    replies: 24,
    views: 342,
    likes: 18,
  },
  {
    title: "Dúvida sobre compatibilidade de RAM",
    author: "PCBuilder",
    replies: 15,
    views: 198,
    likes: 12,
  },
  {
    title: "Review: Intel i9-14900K vs AMD Ryzen 9 7950X",
    author: "HardwareExpert",
    replies: 45,
    views: 756,
    likes: 67,
  },
];

const Forum = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        {/* Hero Section */}
        <section className="bg-gradient-hero rounded-3xl p-12 mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">
            Fórum da Comunidade
          </h1>
          <p className="text-white/90 text-lg">
            Tire dúvidas, compartilhe experiências e aprenda com outros entusiastas
          </p>
        </section>

        <div className="max-w-5xl mx-auto">
          {/* New Post Button */}
          <div className="mb-8 flex justify-end">
            <Button 
              className="bg-gradient-pink-orange hover:opacity-90 text-white px-8 py-6 text-lg rounded-full"
              onClick={() => navigate("/forum/new")}
            >
              Nova Discussão
            </Button>
          </div>

          {/* Forum Posts */}
          <div className="space-y-4">
            {forumPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">por {post.author}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.replies} respostas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>{post.views} visualizações</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{post.likes} curtidas</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-16 h-16 rounded-xl bg-gradient-blue-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Forum;
