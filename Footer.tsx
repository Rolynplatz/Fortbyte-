import { Package, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas novidades em breve.",
      });
      setEmail("");
    }
  };

  const links = {
    platform: [
      { name: "Início", path: "/" },
      { name: "Simulador", path: "/simulator" },
      { name: "Biblioteca", path: "/library" },
      { name: "Tutoriais", path: "/tutorials" },
      { name: "Quizzes", path: "/quizzes" },
      { name: "Fórum", path: "/forum" },
    ],
    resources: [
      { name: "Sobre Nós", path: "/about" },
      { name: "FAQ", path: "/faq" },
      { name: "Contato", path: "/contact" },
      { name: "Suporte", path: "/support" },
      { name: "Lançamentos", path: "/releases" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-cyan-purple flex items-center justify-center shadow-glow-cyan">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Fortbyte</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Sua plataforma completa para aprender sobre hardware, montar PCs e compartilhar conhecimento.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Plataforma</h3>
            <ul className="space-y-2">
              {links.platform.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Receba novidades e dicas sobre hardware.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border"
              />
              <Button type="submit" className="w-full" size="sm">
                Inscrever
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>contato@fortbyte.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+55 (11) 9999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>São Paulo, Brasil</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Fortbyte. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <button className="hover:text-primary transition-colors duration-300">
              Política de Privacidade
            </button>
            <button className="hover:text-primary transition-colors duration-300">
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
