import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatButton } from "@/components/ChatButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cpu, Monitor, HardDrive, Zap, MemoryStick, Box } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const componentInfoData: Record<string, any> = {
  cpu: {
    title: "Processadores (CPUs)",
    icon: Cpu,
    gradient: "bg-gradient-blue-purple",
    description: "O processador é o cérebro do computador",
    fullDescription: `O processador (CPU - Central Processing Unit) é o componente mais importante do computador, 
    responsável por executar todas as instruções e processar dados. É como o cérebro do sistema, 
    coordenando todas as operações e cálculos necessários para o funcionamento do computador.`,
    sections: [
      {
        title: "O que é?",
        content: `A CPU é um chip complexo composto por bilhões de transistores microscópicos que trabalham 
        em conjunto para processar informações. Ela interpreta e executa instruções de programas, 
        realiza cálculos matemáticos e lógicos, e coordena a comunicação entre todos os componentes do sistema.`
      },
      {
        title: "Função Principal",
        content: `A principal função do processador é executar instruções de programas. Isso inclui:
        • Executar operações matemáticas e lógicas
        • Gerenciar o fluxo de dados entre componentes
        • Controlar dispositivos de entrada e saída
        • Executar o sistema operacional e aplicativos
        • Processar múltiplas tarefas simultaneamente através de cores e threads`
      },
      {
        title: "Especificações Importantes",
        content: `• Núcleos (Cores): Quanto mais núcleos, melhor o desempenho em multitarefa
        • Threads: Permitem processar múltiplas instruções simultaneamente
        • Clock (GHz): Velocidade de processamento - quanto maior, mais rápido
        • Cache: Memória ultra-rápida interna para dados frequentes
        • TDP: Consumo de energia e dissipação de calor
        • Socket: Tipo de encaixe na placa-mãe (deve ser compatível)`
      },
      {
        title: "Como Escolher",
        content: `Para gaming: Priorize clock alto e cores suficientes (6-8 cores)
        Para trabalho: Mais cores para multitarefa e aplicações profissionais
        Para uso básico: Processadores entry-level são suficientes
        Considere sempre a compatibilidade com sua placa-mãe`
      }
    ]
  },
  gpu: {
    title: "Placas de Vídeo (GPUs)",
    icon: Monitor,
    gradient: "bg-gradient-pink-orange",
    description: "A GPU processa e renderiza imagens e vídeos",
    fullDescription: `A placa de vídeo (GPU - Graphics Processing Unit) é responsável por processar e 
    renderizar todas as imagens, vídeos e gráficos exibidos no monitor. É essencial para gaming, 
    edição de vídeo, modelagem 3D e outras tarefas que exigem processamento gráfico intenso.`,
    sections: [
      {
        title: "O que é?",
        content: `A GPU é um processador especializado em cálculos gráficos. Diferente da CPU que é 
        generalista, a GPU possui milhares de núcleos menores otimizados para processar muitas operações 
        em paralelo, tornando-a ideal para renderizar gráficos complexos e realizar cálculos matemáticos 
        intensivos necessários para gerar imagens em tempo real.`
      },
      {
        title: "Função Principal",
        content: `As principais funções da GPU incluem:
        • Renderizar gráficos 3D em jogos e aplicações
        • Acelerar edição de vídeo e renderização
        • Processar efeitos visuais e shaders
        • Suportar múltiplos monitores e altas resoluções
        • Executar computação paralela (IA, mineração, etc)
        • Decodificar e codificar vídeos em hardware`
      },
      {
        title: "Especificações Importantes",
        content: `• VRAM: Memória dedicada para texturas e dados gráficos
        • CUDA/Stream Processors: Quantidade de núcleos de processamento
        • Clock: Velocidade de processamento da GPU
        • Largura de banda: Velocidade de transferência de dados
        • TDP: Consumo de energia (importante para escolher a fonte)
        • Ray Tracing: Tecnologia para iluminação realista
        • DLSS/FSR: Tecnologias de upscaling com IA`
      },
      {
        title: "Como Escolher",
        content: `Para gaming 1080p: GPUs mid-range são suficientes
        Para gaming 1440p/4K: GPUs high-end são recomendadas
        Para trabalho profissional: Considere GPUs especializadas
        Verifique sempre a compatibilidade com fonte e gabinete
        Para criação de conteúdo: Priorize VRAM (12GB+)`
      }
    ]
  },
  ram: {
    title: "Memória RAM",
    icon: MemoryStick,
    gradient: "bg-gradient-blue-purple",
    description: "A RAM armazena dados temporários para acesso rápido",
    fullDescription: `A memória RAM (Random Access Memory) é a memória de trabalho do computador, 
    armazenando temporariamente dados e programas em uso para acesso ultrarrápido pelo processador. 
    Diferente do armazenamento permanente, a RAM perde seu conteúdo quando o computador é desligado.`,
    sections: [
      {
        title: "O que é?",
        content: `A RAM é um tipo de memória volátil que permite leitura e escrita rápida de dados. 
        Funciona como uma "mesa de trabalho" do computador - quanto maior, mais programas e dados 
        podem estar ativos simultaneamente. É muito mais rápida que SSDs e HDs, mas perde tudo quando 
        o PC é desligado.`
      },
      {
        title: "Função Principal",
        content: `As principais funções da RAM incluem:
        • Armazenar programas em execução temporariamente
        • Guardar dados sendo processados pela CPU
        • Permitir multitarefa fluida entre aplicações
        • Acelerar carregamento de arquivos e dados
        • Funcionar como cache para operações do sistema
        • Reduzir dependência de armazenamento mais lento`
      },
      {
        title: "Especificações Importantes",
        content: `• Capacidade: 8GB básico, 16GB recomendado, 32GB+ profissional
        • Frequência (MHz): Velocidade de operação - quanto maior, melhor
        • Latência (CL): Tempo de resposta - quanto menor, melhor
        • Tipo: DDR4 ou DDR5 (nova geração mais rápida)
        • Dual/Quad Channel: Usar pares aumenta performance
        • XMP/DOCP: Perfis de overclock automático
        • RGB: Iluminação decorativa (não afeta performance)`
      },
      {
        title: "Como Escolher",
        content: `Para gaming: 16GB DDR4 3200MHz ou DDR5 5200MHz
        Para trabalho: 32GB+ para multitarefa pesada
        Para uso básico: 8GB é suficiente
        Sempre use em dual channel (2 pentes) para melhor performance
        Verifique compatibilidade com placa-mãe e processador`
      }
    ]
  },
  motherboard: {
    title: "Placas-Mãe",
    icon: Box,
    gradient: "bg-gradient-green-yellow",
    description: "A placa-mãe conecta e integra todos os componentes",
    fullDescription: `A placa-mãe (motherboard) é a espinha dorsal do computador, conectando e permitindo 
    a comunicação entre todos os componentes. É como uma cidade com estradas que permitem o tráfego de 
    dados entre processador, memória, armazenamento e periféricos.`,
    sections: [
      {
        title: "O que é?",
        content: `A placa-mãe é uma grande placa de circuito impresso com slots, conectores e chipsets 
        que interligam todos os componentes do PC. Ela determina quais peças são compatíveis, quantos 
        dispositivos podem ser conectados e define muitas das capacidades e limitações do sistema.`
      },
      {
        title: "Função Principal",
        content: `As principais funções da placa-mãe incluem:
        • Conectar processador, RAM, GPU e outros componentes
        • Fornecer energia para os componentes via conectores
        • Gerenciar comunicação entre dispositivos via chipset
        • Oferecer conectores para armazenamento e periféricos
        • Controlar sistemas de entrada/saída (USB, rede, áudio)
        • Permitir expansão via slots PCIe e M.2
        • Gerenciar BIOS/UEFI para configuração do sistema`
      },
      {
        title: "Especificações Importantes",
        content: `• Socket: Tipo de processador compatível (Intel/AMD)
        • Chipset: Define recursos e capacidades da placa
        • Slots RAM: Quantidade e tipo (DDR4/DDR5)
        • Slots PCIe: Para GPU, SSD e placas de expansão
        • Slots M.2: Para SSDs NVMe rápidos
        • VRM: Circuito de alimentação do processador
        • Conectores: USB, rede, áudio, etc
        • Tamanho: ATX (grande), mATX (médio), ITX (pequeno)`
      },
      {
        title: "Como Escolher",
        content: `Escolha o socket compatível com seu processador
        Para gaming: Chipset mid-range com bom VRM
        Para overclock: Chipsets high-end com VRM robusto
        Verifique quantidade de slots e conectores necessários
        Considere recursos como Wi-Fi, Bluetooth, RGB
        Escolha tamanho compatível com seu gabinete`
      }
    ]
  },
  psu: {
    title: "Fontes de Alimentação",
    icon: Zap,
    gradient: "bg-gradient-pink-orange",
    description: "A fonte converte energia elétrica para o PC",
    fullDescription: `A fonte de alimentação (PSU - Power Supply Unit) converte a corrente alternada da 
    tomada em corrente contínua regulada que os componentes do computador necessitam. É um componente 
    crítico que garante estabilidade e proteção para todo o sistema.`,
    sections: [
      {
        title: "O que é?",
        content: `A PSU é uma caixa metálica com circuitos eletrônicos que transformam os 110V/220V da 
        rede elétrica nas voltagens específicas (3.3V, 5V, 12V) necessárias para cada componente do PC. 
        Ela também regula a corrente, filtra interferências e protege contra surtos elétricos.`
      },
      {
        title: "Função Principal",
        content: `As principais funções da fonte incluem:
        • Converter AC (tomada) para DC (componentes)
        • Regular voltagens de forma estável e precisa
        • Distribuir energia para todos os componentes
        • Proteger contra sobrecarga, curto-circuito e surtos
        • Dissipar calor gerado na conversão de energia
        • Fornecer energia limpa sem interferências
        • Permitir desligamento seguro quando necessário`
      },
      {
        title: "Especificações Importantes",
        content: `• Potência (W): Total de energia fornecida (importante!)
        • Certificação 80+: Eficiência energética (Bronze a Titanium)
        • Modularidade: Cabos removíveis para organização
        • Proteções: OVP, UVP, OCP, OPP, SCP
        • Rails 12V: Quantidade e amperagem para GPU/CPU
        • Ventilação: Tamanho e tipo de cooler
        • Conectores: Quantidade para componentes
        • Garantia: Fontes boas têm 5-10 anos`
      },
      {
        title: "Como Escolher",
        content: `Calcule consumo total e adicione 20-30% de margem
        Para gaming básico: 550-650W 80+ Bronze
        Para gaming avançado: 750-850W 80+ Gold
        Para high-end/workstation: 1000W+ 80+ Gold/Platinum
        Priorize marcas confiáveis e certificações
        Modular facilita organização de cabos
        NUNCA economize na fonte - protege seu investimento!`
      }
    ]
  },
  storage: {
    title: "Armazenamento",
    icon: HardDrive,
    gradient: "bg-gradient-blue-purple",
    description: "Armazena permanentemente dados e programas",
    fullDescription: `Os dispositivos de armazenamento guardam permanentemente seus arquivos, programas e 
    sistema operacional. Diferente da RAM, mantêm os dados mesmo quando o computador está desligado. 
    SSDs modernos são muito mais rápidos que HDs tradicionais.`,
    sections: [
      {
        title: "O que é?",
        content: `Armazenamento é onde ficam salvos todos os seus dados de forma permanente. HDs (Hard Drives) 
        usam discos magnéticos rotativos, enquanto SSDs (Solid State Drives) usam chips de memória flash 
        sem partes móveis. SSDs NVMe conectam direto na placa-mãe via M.2, sendo os mais rápidos.`
      },
      {
        title: "Função Principal",
        content: `As principais funções do armazenamento incluem:
        • Guardar sistema operacional e programas instalados
        • Armazenar arquivos pessoais permanentemente
        • Permitir boot do sistema operacional
        • Fornecer espaço para arquivos temporários
        • Manter bibliotecas de jogos e aplicações
        • Servir como backup de dados importantes
        • Armazenar cache de aplicações e jogos`
      },
      {
        title: "Especificações Importantes",
        content: `• Capacidade: 500GB mínimo, 1-2TB recomendado
        • Tipo: SSD NVMe (mais rápido), SSD SATA, HDD
        • Interface: M.2 NVMe PCIe 4.0 (melhor), SATA
        • Velocidade: Read/Write em MB/s - quanto maior, melhor
        • IOPS: Operações por segundo (importante para sistema)
        • TBW: Durabilidade - quanto pode escrever na vida útil
        • Cache DRAM: Melhora performance consistente
        • Garantia: SSDs bons têm 5 anos`
      },
      {
        title: "Como Escolher",
        content: `Sistema operacional: SSD NVMe 500GB-1TB (obrigatório!)
        Jogos: SSD adicional 1-2TB para tempos de carregamento
        Armazenamento em massa: HDs 2-4TB são econômicos
        Para edição de vídeo: SSD NVMe 2TB+ rápido
        Para uso básico: 500GB SSD é suficiente
        Sempre priorize SSD para sistema e programas principais`
      }
    ]
  }
};

const ComponentInfo = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const data = componentInfoData[category || "cpu"];

  if (!data) {
    return <div>Categoria não encontrada</div>;
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header userName="Mariana" />
      
      <main className="ml-20 pt-20 p-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(`/library/${category}`)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Catálogo
        </Button>

        <Card className={`${data.gradient} rounded-3xl p-12 mb-8 border-0`}>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Icon className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-3">{data.title}</h1>
              <p className="text-white/90 text-xl">{data.description}</p>
            </div>
          </div>
        </Card>

        <div className="max-w-5xl mx-auto space-y-6">
          <Card className="bg-card rounded-3xl p-8 border border-border">
            <p className="text-lg text-foreground leading-relaxed">
              {data.fullDescription}
            </p>
          </Card>

          {data.sections.map((section: any, index: number) => (
            <Card key={index} className="bg-card rounded-3xl p-8 border border-border">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-cyan-purple bg-clip-text text-transparent">
                {section.title}
              </h2>
              <p className="text-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </Card>
          ))}

          <div className="flex gap-4 justify-center pt-8">
            <Button 
              size="lg"
              className="bg-gradient-cyan-purple hover:opacity-90"
              onClick={() => navigate(`/library/${category}`)}
            >
              Ver Produtos
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary"
              onClick={() => navigate("/tutorials")}
            >
              Ver Tutoriais
            </Button>
          </div>
        </div>
      </main>

      <ChatButton />
    </div>
  );
};

export default ComponentInfo;
