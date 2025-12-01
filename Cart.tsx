import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2, ShoppingCart, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: string;
  priceNum: number;
  category: string;
  image: string;
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Intel Core i9-14900K",
      price: "R$ 3.899,90",
      priceNum: 3899.90,
      category: "CPU",
      image: "🔷"
    },
    {
      id: 2,
      name: "NVIDIA RTX 4090",
      price: "R$ 12.999,90",
      priceNum: 12999.90,
      category: "GPU",
      image: "💚"
    }
  ]);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.priceNum, 0);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continuar Comprando
        </Button>

        <section className="bg-gradient-hero rounded-3xl p-12 mb-8 text-center">
          <ShoppingCart className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-3">
            Carrinho de Compras
          </h1>
          <p className="text-white/90 text-lg">
            Revise seus itens antes de finalizar a compra
          </p>
        </section>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <Card className="bg-card rounded-3xl p-12 text-center border border-border">
                <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Carrinho Vazio
                </h2>
                <p className="text-muted-foreground mb-6">
                  Adicione produtos para começar sua compra
                </p>
                <Button 
                  className="bg-gradient-cyan-purple hover:opacity-90"
                  onClick={() => navigate("/library")}
                >
                  Ir para Biblioteca
                </Button>
              </Card>
            ) : (
              cartItems.map((item) => (
                <Card
                  key={item.id}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-5xl flex-shrink-0">
                      {item.image}
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-sm text-primary font-semibold mb-1">
                        {item.category}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.name}
                      </h3>
                      <div className="text-2xl font-bold text-primary">
                        {item.price}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      className="border-destructive text-destructive hover:bg-destructive hover:text-white"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-card rounded-3xl p-6 border border-border sticky top-24">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Resumo do Pedido
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-foreground">
                  <span>Subtotal ({cartItems.length} itens)</span>
                  <span className="font-semibold">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span>Frete</span>
                  <span className="font-semibold text-green-500">Grátis</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-foreground text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">
                      R$ {total.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              </div>

              <Button 
                size="lg"
                className="w-full bg-gradient-cyan-purple hover:opacity-90 mb-3"
                disabled={cartItems.length === 0}
                onClick={() => navigate("/checkout")}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Finalizar Compra
              </Button>

              <Button 
                size="lg"
                variant="outline"
                className="w-full border-primary text-primary"
                onClick={() => navigate("/simulator")}
              >
                Adicionar ao Simulador
              </Button>
            </Card>
          </div>
        </div>

        {/* Continue Shopping */}
        <Card className="mt-8 max-w-6xl mx-auto bg-gradient-pink-orange rounded-3xl p-8 border-0">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Monte Seu PC Completo
            </h2>
            <p className="text-white/90 mb-6">
              Adicione todos os componentes necessários para sua build perfeita
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => navigate("/library")}
            >
              Ver Mais Componentes
            </Button>
          </div>
        </Card>
      </main>

      <ChatButton />
    </div>
  );
};

export default Cart;
