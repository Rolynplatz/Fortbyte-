import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const navigate = useNavigate();
  const [orderComplete, setOrderComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Sidebar />
        <Header userName="Mariana" />
        
        <main className="ml-20 pt-20 p-8">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-hero rounded-3xl p-12 text-center border-0">
              <CheckCircle2 className="w-24 h-24 text-white mx-auto mb-6" />
              <h1 className="text-5xl font-bold text-white mb-4">
                Pedido Confirmado!
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Seu pedido foi realizado com sucesso. Em breve você receberá um email de confirmação.
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => navigate("/")}
                >
                  Voltar ao Início
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => navigate("/library")}
                >
                  Continuar Comprando
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
          onClick={() => navigate("/cart")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Carrinho
        </Button>

        <section className="bg-gradient-hero rounded-3xl p-12 mb-8 text-center">
          <CreditCard className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-3">
            Finalizar Compra
          </h1>
          <p className="text-white/90 text-lg">
            Complete seus dados para finalizar o pedido
          </p>
        </section>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Info */}
            <Card className="bg-card rounded-3xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Dados Pessoais</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome completo" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(00) 00000-0000" required />
                </div>
                <div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="000.000.000-00" required />
                </div>
              </div>
            </Card>

            {/* Address */}
            <Card className="bg-card rounded-3xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Endereço de Entrega</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" placeholder="00000-000" required />
                </div>
                <div>
                  <Label htmlFor="street">Rua</Label>
                  <Input id="street" placeholder="Nome da rua" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="number">Número</Label>
                    <Input id="number" placeholder="123" required />
                  </div>
                  <div>
                    <Label htmlFor="complement">Complemento</Label>
                    <Input id="complement" placeholder="Apto 45" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="city">Cidade</Label>
                  <Input id="city" placeholder="Sua cidade" required />
                </div>
              </div>
            </Card>

            {/* Payment */}
            <Card className="bg-card rounded-3xl p-8 border border-border lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">Dados de Pagamento</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="cardNumber">Número do Cartão</Label>
                  <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
                </div>
                <div>
                  <Label htmlFor="cardName">Nome no Cartão</Label>
                  <Input id="cardName" placeholder="Como está no cartão" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Validade</Label>
                    <Input id="expiry" placeholder="MM/AA" required />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" required />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 flex gap-4">
            <Button 
              type="button"
              size="lg"
              variant="outline"
              className="flex-1 border-primary text-primary"
              onClick={() => navigate("/cart")}
            >
              Cancelar
            </Button>
            <Button 
              type="submit"
              size="lg"
              className="flex-1 bg-gradient-cyan-purple hover:opacity-90"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Confirmar Pedido
            </Button>
          </div>
        </form>
      </main>

      <ChatButton />
    </div>
  );
};

export default Checkout;
