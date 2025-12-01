import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Star, TrendingUp, Cpu, Monitor, HardDrive, Zap, MemoryStick, Box, ShoppingCart, Info } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const componentsData: Record<string, any> = {
  cpu: {
    title: "Processadores (CPUs)",
    icon: Cpu,
    gradient: "bg-gradient-blue-purple",
    description: "Explore nossa seleção de processadores Intel e AMD para todas as necessidades.",
    infoLink: "/library/cpu/info",
    items: [
      {
        id: 1,
        name: "Intel Core i9-14900K",
        brand: "Intel",
        price: "R$ 3.899,90",
        specs: ["24 Cores", "32 Threads", "6.0 GHz Boost"],
        rating: 4.9,
        image: "🔷"
      },
      {
        id: 2,
        name: "AMD Ryzen 9 7950X",
        brand: "AMD",
        price: "R$ 3.599,90",
        specs: ["16 Cores", "32 Threads", "5.7 GHz Boost"],
        rating: 4.8,
        image: "🔶"
      },
      {
        id: 3,
        name: "Intel Core i7-14700K",
        brand: "Intel",
        price: "R$ 2.799,90",
        specs: ["20 Cores", "28 Threads", "5.6 GHz Boost"],
        rating: 4.7,
        image: "🔷"
      },
      {
        id: 4,
        name: "AMD Ryzen 7 7800X3D",
        brand: "AMD",
        price: "R$ 2.499,90",
        specs: ["8 Cores", "16 Threads", "5.0 GHz Boost", "3D V-Cache"],
        rating: 4.9,
        image: "🔶"
      }
    ]
  },
  gpu: {
    title: "Placas de Vídeo (GPUs)",
    icon: Monitor,
    gradient: "bg-gradient-pink-orange",
    description: "Encontre a GPU ideal para gaming, renderização e trabalhos profissionais.",
    infoLink: "/library/gpu/info",
    items: [
      {
        id: 1,
        name: "NVIDIA RTX 4090",
        brand: "NVIDIA",
        price: "R$ 12.999,90",
        specs: ["24GB GDDR6X", "16384 CUDA Cores", "2.52 GHz Boost"],
        rating: 4.9,
        image: "💚"
      },
      {
        id: 2,
        name: "AMD RX 7900 XTX",
        brand: "AMD",
        price: "R$ 7.499,90",
        specs: ["24GB GDDR6", "6144 Stream Processors", "2.5 GHz Boost"],
        rating: 4.7,
        image: "🔴"
      },
      {
        id: 3,
        name: "NVIDIA RTX 4070 Ti",
        brand: "NVIDIA",
        price: "R$ 5.999,90",
        specs: ["12GB GDDR6X", "7680 CUDA Cores", "2.61 GHz Boost"],
        rating: 4.6,
        image: "💚"
      }
    ]
  },
  ram: {
    title: "Memória RAM",
    icon: MemoryStick,
    gradient: "bg-gradient-blue-purple",
    description: "Memórias DDR4 e DDR5 para máximo desempenho do seu sistema.",
    infoLink: "/library/ram/info",
    items: [
      {
        id: 1,
        name: "Corsair Vengeance DDR5",
        brand: "Corsair",
        price: "R$ 1.299,90",
        specs: ["32GB (2x16GB)", "6000MHz", "CL30", "RGB"],
        rating: 4.8,
        image: "⚡"
      },
      {
        id: 2,
        name: "G.Skill Trident Z5",
        brand: "G.Skill",
        price: "R$ 1.499,90",
        specs: ["32GB (2x16GB)", "6400MHz", "CL32", "RGB"],
        rating: 4.9,
        image: "⚡"
      },
      {
        id: 3,
        name: "Kingston Fury Beast",
        brand: "Kingston",
        price: "R$ 899,90",
        specs: ["16GB (2x8GB)", "5200MHz", "CL36"],
        rating: 4.7,
        image: "⚡"
      }
    ]
  },
  motherboard: {
    title: "Placas-Mãe",
    icon: Box,
    gradient: "bg-gradient-green-yellow",
    description: "Placas-mãe para Intel e AMD, de entry-level até high-end.",
    infoLink: "/library/motherboard/info",
    items: [
      {
        id: 1,
        name: "ASUS ROG Maximus Z790",
        brand: "ASUS",
        price: "R$ 3.299,90",
        specs: ["Socket LGA1700", "DDR5", "PCIe 5.0", "Wi-Fi 6E"],
        rating: 4.9,
        image: "🔲"
      },
      {
        id: 2,
        name: "MSI MAG X670E",
        brand: "MSI",
        price: "R$ 2.799,90",
        specs: ["Socket AM5", "DDR5", "PCIe 5.0", "Wi-Fi 6E"],
        rating: 4.8,
        image: "🔲"
      },
      {
        id: 3,
        name: "Gigabyte B650 AORUS",
        brand: "Gigabyte",
        price: "R$ 1.799,90",
        specs: ["Socket AM5", "DDR5", "PCIe 4.0", "Wi-Fi 6"],
        rating: 4.7,
        image: "🔲"
      }
    ]
  },
  psu: {
    title: "Fontes de Alimentação",
    icon: Zap,
    gradient: "bg-gradient-pink-orange",
    description: "Fontes modulares e certificadas para alimentar seu sistema com segurança.",
    infoLink: "/library/psu/info",
    items: [
      {
        id: 1,
        name: "Corsair RM1000x",
        brand: "Corsair",
        price: "R$ 1.499,90",
        specs: ["1000W", "80+ Gold", "Modular", "140mm Fan"],
        rating: 4.9,
        image: "⚡"
      },
      {
        id: 2,
        name: "EVGA SuperNOVA 850 G6",
        brand: "EVGA",
        price: "R$ 1.099,90",
        specs: ["850W", "80+ Gold", "Full Modular", "135mm Fan"],
        rating: 4.8,
        image: "⚡"
      },
      {
        id: 3,
        name: "Seasonic Focus GX-750",
        brand: "Seasonic",
        price: "R$ 899,90",
        specs: ["750W", "80+ Gold", "Full Modular", "120mm Fan"],
        rating: 4.7,
        image: "⚡"
      }
    ]
  },
  storage: {
    title: "Armazenamento",
    icon: HardDrive,
    gradient: "bg-gradient-blue-purple",
    description: "SSDs NVMe e SATA para velocidade e capacidade ideais.",
    infoLink: "/library/storage/info",
    items: [
      {
        id: 1,
        name: "Samsung 990 PRO",
        brand: "Samsung",
        price: "R$ 1.299,90",
        specs: ["2TB", "NVMe PCIe 4.0", "7450 MB/s Read", "6900 MB/s Write"],
        rating: 4.9,
        image: "💾"
      },
      {
        id: 2,
        name: "WD Black SN850X",
        brand: "Western Digital",
        price: "R$ 1.199,90",
        specs: ["2TB", "NVMe PCIe 4.0", "7300 MB/s Read", "6600 MB/s Write"],
        rating: 4.8,
        image: "💾"
      },
      {
        id: 3,
        name: "Crucial P5 Plus",
        brand: "Crucial",
        price: "R$ 899,90",
        specs: ["1TB", "NVMe PCIe 4.0", "6600 MB/s Read", "5000 MB/s Write"],
        rating: 4.7,
        image: "💾"
      }
    ]
  }
};

const ComponentDetail = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const data = componentsData[category || "cpu"];

  if (!data) {
    return <div>Categoria não encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/library")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar à Biblioteca
        </Button>

        {/* Header */}
        <Card className={`${data.gradient} rounded-3xl p-12 mb-8 border-0`}>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <data.icon className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-2">{data.title}</h1>
              <p className="text-white/90 text-lg">{data.description}</p>
            </div>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => navigate(data.infoLink)}
            >
              <Info className="w-5 h-5 mr-2" />
              Saiba Mais
            </Button>
          </div>
        </Card>

        {/* Filters */}
        <div className="mb-8 flex gap-4">
          <Button variant="outline" className="border-primary text-primary">
            Todos
          </Button>
          <Button variant="ghost">Intel</Button>
          <Button variant="ghost">AMD</Button>
          <Button variant="ghost">
            <TrendingUp className="w-4 h-4 mr-2" />
            Mais Populares
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.items.map((item: any) => (
            <Card
              key={item.id}
              className="bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-8xl">
                {item.image}
              </div>
              
              <div className="p-6">
                <Badge className="mb-2 bg-primary/10 text-primary border-0">
                  {item.brand}
                </Badge>
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                  {item.name}
                </h3>
                
                <div className="space-y-1 mb-4">
                  {item.specs.map((spec: string, index: number) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      • {spec}
                    </p>
                  ))}
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-foreground">{item.rating}</span>
                  <span className="text-sm text-muted-foreground">(234)</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-cyan-purple hover:opacity-90"
                    onClick={() => navigate("/cart")}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Comprar
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate("/simulator")}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Montar
                  </Button>
                  <Button variant="outline" size="icon">
                    <Star className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Compare Section */}
        <Card className="mt-12 bg-gradient-pink-orange rounded-3xl p-8 border-0">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Compare Processadores
            </h2>
            <p className="text-white/90 mb-6">
              Selecione até 4 processadores e compare especificações lado a lado
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Iniciar Comparação
            </Button>
          </div>
        </Card>
      </main>

      <ChatButton />
    </div>
  );
};

export default ComponentDetail;
