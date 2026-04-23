import React, { useState } from 'react';
import { Calendar, CheckCircle2, Image as ImageIcon, MapPin, Type, Smartphone, ChevronRight } from 'lucide-react';

// Dados do planejamento de ABRIL
const planejamentoAbril = [
  // SEMANA 1
  {
    id: 1,
    semana: 1,
    headline: "Abril começou: novos planos, mesma necessidade de ter seu veículo rastreado 24h.",
    arte: "Foto de uma pessoa entrando no carro pela manhã, com um clima ensolarado e tranquilo. No canto, o ícone do app da Anjo Monitora com um 'check' verde de monitoramento ativo.",
    legenda: "Um novo mês se inicia e, com ele, novas rotas, compromissos e viagens. Não deixe que a preocupação com o seu veículo atrapalhe a sua rotina. Com o rastreamento veicular da Anjo Monitora, você acompanha tudo em tempo real e tem assistência 24h para focar apenas no que importa: o seu caminho.\n\n👉 Comece abril com o pé direito. Clique no link da bio e faça sua cotação de rastreamento em menos de 2 minutos!"
  },
  {
    id: 2,
    semana: 1,
    headline: "SEXTA-FEIRA SANTA: Um dia de reflexão, sacrifício e amor ao próximo.",
    arte: "Imagem minimalista e respeitosa. Fundo em tons escuros de roxo (cor da marca e da data), com um feixe de luz sutil ou uma cruz minimalista iluminada. Sem elementos comerciais.",
    legenda: "Na Sexta-feira Santa, paramos para refletir sobre o maior ato de amor e sacrifício já feito pela humanidade. Que este seja um momento de paz, recolhimento e fortalecimento da fé para você e toda a sua família. A Anjo Monitora deseja um dia abençoado e de muita luz."
  },
  {
    id: 3,
    semana: 1,
    headline: "FELIZ PÁSCOA: Ele vive! Que a esperança e a renovação guiem o seu caminho.",
    arte: "Arte iluminada, mesclando o roxo da marca com tons de branco e dourado. Um símbolo de ressurreição (como a luz do amanhecer ou uma pomba branca). Visual que transmita paz e alegria.",
    legenda: "A Páscoa é o lembrete de que a vida, a luz e a esperança sempre vencem. Que o Cristo ressuscitado abençoe o seu lar, trazendo renovação, união e paz para os seus dias. Feliz Páscoa, da família Anjo Monitora para a sua!"
  },
  // SEMANA 2
  {
    id: 4,
    semana: 2,
    headline: "Acompanhe o trajeto do seu carro em tempo real, onde quer que ele esteja.",
    arte: "Mockup (imagem) de um smartphone exibindo o mapa interativo do aplicativo Anjo Monitora, com o pin do veículo acompanhando a rua.",
    legenda: "Uma preocupação a menos no seu dia a dia. Com o rastreamento contínuo da Anjo Monitora, você abre o aplicativo e vê exatamente onde o seu veículo está naquele momento, com atualização constante no mapa. Deixou o carro estacionado ou com alguém da família? Confira o endereço e tenha muito mais tranquilidade.\n\n👉 Quer ter essa visão na palma da mão? Mande um Direct e conheça nossos planos."
  },
  {
    id: 5,
    semana: 2,
    headline: "Rastreamento veicular de ponta com um custo-benefício que faz sentido para você.",
    arte: "Card estático limpo e direto. De um lado, um ícone de 'cifrão' cortado (representando economia); do outro, um ícone de localização (pin de GPS) brilhando. Texto: 'Monitoramento que cabe no seu bolso'.",
    legenda: "Você já adiou a instalação de um rastreador veicular por achar os custos altos demais no mercado tradicional? Com a Anjo Monitora, você tem acompanhamento via satélite 24h, assistência técnica (guincho, pane elétrica) e aplicativo exclusivo por um valor fixo mensal que não pesa no orçamento. Sem análise de perfil e sem burocracia.\n\n👉 Comente 'EU QUERO' e nossa equipe enviará uma oferta especial para você."
  },
  {
    id: 6,
    semana: 2,
    headline: "Informação ágil e precisa na palma da sua mão.",
    arte: "Foto de um smartphone focando no painel de coordenadas da localização exata do carro no mapa da Anjo Monitora. Selo no canto inferior: 'Localização Precisa'.",
    legenda: "A precisão da informação faz toda a diferença diante de imprevistos na rua. Graças à tecnologia de GPS via satélite, o App da Anjo Monitora fornece o histórico e o endereço atual detalhado de onde o seu veículo se encontra. É a facilidade de saber onde o seu carro está a qualquer momento.\n\n👉 Não conte apenas com a sorte, conte com o rastreamento veicular da Anjo Monitora. Link na bio para saber mais."
  },
  // SEMANA 3
  {
    id: 7,
    semana: 3,
    headline: "O pneu furou no meio do nada? Você não está sozinho.",
    arte: "Foto noturna de um motorista fora do carro, segurando o celular com expressão de alívio, enquanto as luzes amarelas de um guincho se aproximam ao fundo.",
    legenda: "Imprevistos não têm hora nem lugar para acontecer. Seja uma pane elétrica, pneu furado, chave trancada dentro do carro ou falta de combustível, os clientes Anjo Monitora contam com Assistência 24h completa. Um simples chamado no app e o socorro vai até você.\n\n👉 Salve esse post para lembrar: com o nosso rastreamento, você nunca fica na mão."
  },
  {
    id: 8,
    semana: 3,
    headline: "Feriado de Tiradentes: Pegue a estrada com a certeza de que estamos monitorando com você.",
    arte: "Visão de dentro do carro (painel) focado em uma estrada aberta e ensolarada. O ícone de localização da Anjo Monitora pulsando no canto superior.",
    legenda: "Feriado prolongado é sinônimo de descanso e viagem. Mas antes de pegar a rodovia, certifique-se de que o rastreamento do seu veículo está ativo e em dia. Com a Anjo Monitora, você viaja com cobertura nacional, localização precisa e assistência 24h pronta para te atender em qualquer lugar do Brasil.\n\n👉 Vai viajar? Deixe o monitoramento com a gente. Bom feriado!"
  },
  {
    id: 9,
    semana: 3,
    headline: "Onde seu veículo esteve? Acesse o histórico de rotas na palma da mão.",
    arte: "Mockup de um smartphone mostrando a tela do aplicativo da Anjo Monitora com o mapa e o traçado de uma rota recente. Ícones de pin de origem e destino.",
    legenda: "Com o rastreamento veicular da Anjo Monitora, você não vê apenas onde o seu carro está agora, mas também por onde ele passou. Nosso aplicativo registra o histórico de rotas, permitindo que você consulte trajetos, horários e paradas com total transparência. É mais controle e tranquilidade para o seu dia a dia.\n\n👉 Quer ter acesso a todas essas informações? Clique no link da bio e conheça nossos planos."
  },
  // SEMANA 4
  {
    id: 10,
    semana: 4,
    headline: "Sua moto também merece o melhor rastreamento veicular do mercado.",
    arte: "Foto de uma moto estacionada na rua com um alvo vermelho no chão, que se transforma em um ícone de radar/sinal de GPS roxo da Anjo Monitora.",
    legenda: "As motos estão entre os veículos mais visados nas grandes cidades. Não deixe seu patrimônio vulnerável na rua. O rastreamento para motos da Anjo Monitora utiliza um equipamento compacto, que não descarrega a sua bateria e oferece a mesma precisão de localização e assistência 24h dos carros.\n\n👉 Motociclista, não rode sem monitoramento. Chame no Direct e agende sua instalação."
  },
  {
    id: 11,
    semana: 4,
    headline: "Emprestou o carro? Saiba exatamente a velocidade que estão dirigindo.",
    arte: "Imagem do painel de um carro em movimento, com um velocímetro em destaque. Sobreposto, um alerta visual do app Anjo Monitora indicando 'Velocidade Excedida'.",
    legenda: "A segurança de quem você ama (e do seu veículo) não tem preço. Com o rastreamento veicular da Anjo Monitora, você pode configurar alertas de limite de velocidade direto no aplicativo. Se o veículo ultrapassar o limite que você definiu, você recebe uma notificação na hora. Ideal para quem divide o carro com a família ou tem motoristas parceiros.\n\n👉 Tenha esse controle hoje mesmo. Fale com nossa equipe no link da bio!"
  },
  {
    id: 12,
    semana: 4,
    headline: "Abril está acabando. O seu carro vai continuar sem rastreamento em maio?",
    arte: "Imagem de um calendário de abril com os últimos dias marcados. Um alerta de 'Atenção' focado no ícone de localização do veículo. Cores fortes para chamar atenção no feed.",
    legenda: "Mais um mês se passou. Você vai continuar contando apenas com a sorte todos os dias ao estacionar na rua ou parar no semáforo? O índice de roubos e furtos não tira folga. Instale o rastreamento veicular da Anjo Monitora hoje mesmo e comece o próximo mês com a paz de espírito que você e sua família merecem.\n\n👉 Últimos dias do mês para garantir sua instalação. Clique no link da bio e fale com a gente agora!"
  }
];

// Dados do planejamento de MAIO
const planejamentoMaio = [
  // SEMANA 1
  {
    id: 13,
    semana: 1,
    headline: "DIA DO TRABALHADOR: Seu veículo é sua principal ferramenta de trabalho?",
    arte: "Foto de um motorista de aplicativo ou entregador de moto trabalhando focados. Ícone do app Anjo Monitora no canto com a frase 'Monitoramento Ativo'.",
    legenda: "Hoje celebramos a força de quem faz acontecer no dia a dia. Se o seu carro ou moto é o seu ganha-pão, não dá para ficar à mercê da sorte nas ruas. O rastreamento veicular da Anjo Monitora garante a tranquilidade que você precisa para focar apenas nas suas corridas e entregas, com cobertura 24h e suporte rápido.\n\n👉 Valorize seu suor. Clique no link da bio e faça sua cotação!"
  },
  {
    id: 14,
    semana: 1,
    headline: "MAIO AMARELO: Atenção pela vida e tranquilidade no trajeto.",
    arte: "Arte com foco na cor amarela do movimento. Imagem de uma via segura e o ícone de rastreamento da Anjo Monitora. Texto: 'Maio Amarelo - No trânsito, escolha a vida.'",
    legenda: "A Anjo Monitora apoia o Movimento Maio Amarelo. Um trânsito seguro começa com prudência, respeito às leis e cuidado constante. Faça a sua parte ao volante e deixe o monitoramento do seu veículo com a nossa equipe especializada. Assim, você viaja com muito mais tranquilidade e foca na direção segura.\n\n👉 Apoie essa causa e compartilhe a mensagem com outros motoristas!"
  },
  {
    id: 15,
    semana: 1,
    headline: "Onde estacionou? Confira a localização do seu veículo a qualquer momento.",
    arte: "Mockup de smartphone no modo escuro mostrando o mapa da Anjo Monitora com a localização exata do carro estacionado durante a noite.",
    legenda: "O rastreamento veicular não dorme. Mesmo durante a madrugada, se bater aquela dúvida sobre a segurança do seu carro estacionado na rua, basta abrir o nosso aplicativo e conferir a localização atualizada no mapa. É você visualizando o seu veículo 24 horas por dia, 7 dias por semana, de onde estiver.\n\n👉 Não durma com dúvidas. Chame no Direct e conheça nossa tecnologia de rastreamento."
  },
  // SEMANA 2
  {
    id: 16,
    semana: 2,
    headline: "Mês das Mães: Dê de presente a tranquilidade de saber que você chegou bem.",
    arte: "Foto de uma mãe sorrindo olhando o celular, com um balão destacando a rota do veículo do filho chegando em casa. Cores acolhedoras.",
    legenda: "Mãe é sinônimo de cuidado o tempo todo. Que tal trocar o famoso 'Cheguei!' por um aplicativo onde ela pode acompanhar sua localização sempre que precisar? Ter o rastreamento da Anjo Monitora é a garantia de dar tranquilidade a quem sempre cuidou de você.\n\n👉 Surpreenda com esse cuidado. Saiba como funciona no link da bio."
  },
  {
    id: 17,
    semana: 2,
    headline: "FELIZ DIA DAS MÃES: Monitoramento para cuidar de quem você mais ama.",
    arte: "Imagem de mãe e filhos dentro do carro, prontos para um passeio. Texto na arte: 'Tranquilidade e segurança de mãe não tem preço.'",
    legenda: "O coração de mãe sempre acompanha os filhos onde quer que eles vão. Neste Dia das Mães, nossa homenagem vai para todas as mulheres que valorizam o cuidado e não abrem mão de monitorar os trajetos da família com total clareza e amor. A Anjo Monitora deseja um domingo maravilhoso!\n\n👉 Feliz Dia das Mães!"
  },
  {
    id: 18,
    semana: 2,
    headline: "Rastreamento veicular não é custo, é investimento no seu patrimônio.",
    arte: "Card comparativo limpo ilustrando um café expresso de um lado e o ícone de monitoramento da Anjo Monitora do outro. Texto: 'Menos que um café por dia.'",
    legenda: "Faça as contas: por um valor mensal extremamente acessível, você conta com localização via satélite, aplicativo completo na palma da mão e assistência 24h para emergências. Deixar seu carro sem essa transparência é assumir um risco na rua que custa caro. O rastreamento da Anjo Monitora cabe fácil no seu orçamento.\n\n👉 Comente 'VALORES' e nossa equipe te envia as opções."
  },
  // SEMANA 3
  {
    id: 19,
    semana: 3,
    headline: "Deixou o carro na oficina ou estacionamento? Acompanhe o endereço certinho.",
    arte: "Foto mostrando a fachada de uma oficina ou valet. Em sobreposição, a tela do app Anjo Monitora confirmando que o carro continua naquele mesmo endereço no mapa.",
    legenda: "Vai deixar o carro no valet ou numa oficina por vários dias? É natural sentir aquela insegurança de não saber onde ele foi parar. Mas com o App da Anjo Monitora, você pode abrir o mapa a qualquer momento durante o dia e verificar se o seu veículo continua estacionado no endereço exato onde você deixou. É muito mais proteção baseada em visibilidade real.\n\n👉 Saiba como ter seu carro no radar baixando nosso aplicativo."
  },
  {
    id: 20,
    semana: 3,
    headline: "Sua motocicleta sempre no seu radar, 24 horas por dia.",
    arte: "Foto de uma moto estacionada em uma via urbana. Destaque gráfico conectando a moto a um pino de mapa roxo no celular do usuário.",
    legenda: "As motos são incrivelmente ágeis e práticas no dia a dia, o que infelizmente também exige maior atenção na hora de deixá-las nas ruas. Ter apenas a trava comum já não tranquiliza como antes. Com o monitoramento via satélite da Anjo Monitora, sua motocicleta é rastreada de forma contínua, direto no seu celular. Trabalhe e estacione em paz.\n\n👉 Sua moto sempre rastreada. Agende sua instalação no link da bio."
  },
  {
    id: 21,
    semana: 3,
    headline: "A bateria arriou? O pneu furou? A Anjo Monitora resolve para você.",
    arte: "Motorista acionando o botão de 'Assistência' no aplicativo Anjo Monitora pelo celular encostado no volante.",
    legenda: "Rastreamento veicular é o nosso forte, mas a comodidade não para por aí. Os planos da Anjo Monitora incluem Assistência 24h com guincho, socorro mecânico emergencial, chaveiro e troca de pneu. Tudo acessível para que você nunca fique na mão no meio de um trajeto.\n\n👉 Circule com cobertura e suporte total. Chame nossa equipe no Direct!"
  },
  // SEMANA 4
  {
    id: 22,
    semana: 4,
    headline: "Tem uma pequena frota? Assuma o controle total do seu negócio.",
    arte: "Visão superior ou grade com 3 pequenos utilitários brancos e carros de frota. Texto: 'Monitoramento eficiente para o seu negócio crescer'.",
    legenda: "Se você gerencia mais de um veículo para entregas ou serviços, perder o controle das rotas significa perder dinheiro e tempo. A plataforma da Anjo Monitora permite visualizar toda a sua frota simultaneamente, checar o histórico de trajetos e ter o domínio completo da sua operação logística.\n\n👉 Fale com nossos consultores corporativos no link da bio e descubra as vantagens."
  },
  {
    id: 23,
    semana: 4,
    headline: "O Maio Amarelo termina, mas a prudência no trânsito deve durar o ano todo.",
    arte: "Semáforo na luz amarela com fundo desfocado de trânsito em movimento. Sobreposto, um selo da Anjo Monitora validando a direção segura.",
    legenda: "O mês de conscientização está chegando ao fim, mas a responsabilidade nas vias é um dever diário. Faça a sua parte dirigindo sempre de forma cautelosa. E para os imprevistos fora do seu controle – como os riscos de roubos e furtos – deixe o monitoramento da Anjo Monitora trabalhar por você e sua família.\n\n👉 Conte com nossa central 24h zelando pelo seu automóvel."
  },
  {
    id: 24,
    semana: 4,
    headline: "Maio chegou ao fim. Você vai adiar a tranquilidade da sua família de novo?",
    arte: "Visual moderno focado nos últimos dias do mês de maio em um calendário digital. Design focado em despertar ação com um relógio ou ícone de tempo.",
    legenda: "As estatísticas de roubos e furtos não dão trégua nos finais de mês. Estamos nos últimos dias de maio: esse é o momento definitivo para instalar o seu rastreador veicular Anjo Monitora e começar junho com a tecnologia jogando a seu favor. Instalação rápida e sem processos burocráticos complicados.\n\n👉 Restam poucas vagas na nossa agenda do mês! Clique no link da bio e garanta a sua."
  }
];

export default function App() {
  const [activeMonth, setActiveMonth] = useState<'abril' | 'maio'>('abril');
  const [activeTab, setActiveTab] = useState<number | 'stories'>(1);

  // Arrays correspondentes ao mês ativo
  const planejamentoAtivo = activeMonth === 'abril' ? planejamentoAbril : planejamentoMaio;
  
  // Filtrar posts baseados na tab selecionada
  const postsFiltrados = typeof activeTab === 'number' 
    ? planejamentoAtivo.filter(post => post.semana === activeTab) 
    : [];

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-900 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center shadow-sm relative z-20">
        <div className="flex items-center gap-3">
          <div className="bg-[#5B21B6] p-2 rounded-lg">
            <MapPin className="text-white w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#5B21B6] tracking-tight">Anjo Monitora</h1>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-bold text-gray-800">Planejamento de Social Media</h2>
          <p className="text-sm text-[#5B21B6] font-bold uppercase tracking-wider bg-[#EDE9FE] inline-block px-3 py-1 rounded-md mt-1">
            {activeMonth === 'abril' ? 'Abril 2026' : 'Maio 2026'}
          </p>
        </div>
      </header>

      {/* Month Selector Toggle */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
           <div className="bg-gray-100 p-1.5 rounded-xl inline-flex shadow-inner">
             <button
               onClick={() => { setActiveMonth('abril'); setActiveTab(1); }}
               className={`px-10 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                 activeMonth === 'abril' 
                   ? 'bg-[#5B21B6] text-white shadow-md transform scale-100' 
                   : 'text-gray-600 hover:text-[#5B21B6] hover:bg-white/50'
               }`}
             >
               Mês de ABRIL
             </button>
             <button
               onClick={() => { setActiveMonth('maio'); setActiveTab(1); }}
               className={`px-10 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                 activeMonth === 'maio' 
                   ? 'bg-[#5B21B6] text-white shadow-md transform scale-100' 
                   : 'text-gray-600 hover:text-[#5B21B6] hover:bg-white/50'
               }`}
             >
               Mês de MAIO
             </button>
           </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Strategy Hero */}
        <section className={`rounded-2xl p-8 mb-8 shadow-lg text-white transition-colors duration-500 ${activeMonth === 'abril' ? 'bg-gradient-to-r from-[#4C1D95] to-[#6D28D9]' : 'bg-gradient-to-r from-[#3B0764] to-[#5B21B6]'}`}>
          <h2 className="text-2xl font-bold mb-4">Estratégia do Mês: {activeMonth.toUpperCase()}</h2>
          <p className="text-[#EDE9FE] text-lg max-w-4xl leading-relaxed mb-8">
            Posicionamento focado em <strong>Tecnologia, Prevenção e Tranquilidade</strong>. 
            Substituímos o formato panfleto por conteúdo que educa e converte, falando diretamente com a necessidade de monitoramento do motorista, reforçando sempre o serviço de <strong>Rastreamento Veicular</strong>.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
              <CheckCircle2 className="w-4 h-4 text-[#A78BFA]" />
              12 Posts no Feed
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
              <Calendar className="w-4 h-4 text-[#A78BFA]" />
              3 Posts por Semana
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
              <Smartphone className="w-4 h-4 text-[#A78BFA]" />
              {activeMonth === 'abril' ? '2 Comunicados (Stories)' : '1 Comunicado (Stories)'}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <nav className="flex space-x-2 bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
            {[1, 2, 3, 4].map((semana) => (
              <button
                key={semana}
                onClick={() => setActiveTab(semana)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === semana
                    ? 'bg-[#5B21B6] text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#5B21B6]'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Semana {semana}
              </button>
            ))}
            <button
              onClick={() => setActiveTab('stories')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeTab === 'stories'
                  ? 'bg-[#5B21B6] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-[#5B21B6]'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Stories (Comunicados)
            </button>
          </nav>
        </div>

        {/* Post Grid (Feed) */}
        {typeof activeTab === 'number' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500" key={`${activeMonth}-${activeTab}`}>
            {postsFiltrados.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition-all hover:-translate-y-1">
                {/* Card Header */}
                <div className="bg-[#4C1D95] px-5 py-3 flex justify-between items-center">
                  <span className="text-white font-bold text-sm tracking-wide">POST {post.id < 10 ? `0${post.id}` : post.id}</span>
                  <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">Feed</span>
                </div>
                
                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-5 leading-snug">
                    {post.headline}
                  </h3>
                  
                  {/* Direcionamento de Arte */}
                  <div className="bg-[#F5F3FF] border border-[#EDE9FE] rounded-lg p-4 mb-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <ImageIcon className="w-4 h-4 text-[#6D28D9]" />
                      <h4 className="text-sm font-bold text-[#6D28D9]">Direcionamento de Arte</h4>
                    </div>
                    <p className="text-[13px] text-gray-700 leading-relaxed font-medium">
                      {post.arte}
                    </p>
                  </div>
                  
                  {/* Legenda */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Type className="w-4 h-4 text-[#4C1D95]" />
                      <h4 className="text-sm font-bold text-[#4C1D95]">Legenda</h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                      {post.legenda}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Stories View - ABRIL */}
        {activeTab === 'stories' && activeMonth === 'abril' && (
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 py-8 animate-in fade-in scale-in-95 duration-500">
            {/* Story 1: Sexta-feira Santa */}
            <div className="relative w-[320px] h-[640px] bg-[#2E1065] rounded-[2.5rem] p-4 shadow-2xl border-[8px] border-gray-900 flex flex-col overflow-hidden group">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
              <div className="relative z-10 flex flex-col h-full justify-center items-center text-center px-6 transition-transform group-hover:scale-105 duration-500">
                <div className="bg-[#5B21B6] text-white font-black text-2xl tracking-widest py-3 px-8 rounded-lg mb-2 shadow-lg w-full border border-[#7C3AED]">ATENÇÃO</div>
                <h3 className="text-white font-bold text-xl tracking-widest mb-12">CLIENTES</h3>
                <p className="text-white/90 text-[15px] leading-relaxed font-medium mb-8">Informamos que no dia<br/><strong className="text-white text-lg">03 de Abril</strong><br/> não haverá<br/>atendimento administrativo<br/>em razão do Feriado de<br/>Sexta-feira Santa.</p>
                <p className="text-white/90 text-[15px] leading-relaxed font-medium">Informamos que a nossa<br/>Assistência 24h seguirá<br/>operando normalmente<br/>para atender você!</p>
              </div>
            </div>

            {/* Story 2: Tiradentes */}
            <div className="relative w-[320px] h-[640px] bg-[#2E1065] rounded-[2.5rem] p-4 shadow-2xl border-[8px] border-gray-900 flex flex-col overflow-hidden group">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
              <div className="relative z-10 flex flex-col h-full justify-center items-center text-center px-6 transition-transform group-hover:scale-105 duration-500">
                <div className="bg-[#5B21B6] text-white font-black text-2xl tracking-widest py-3 px-8 rounded-lg mb-2 shadow-lg w-full border border-[#7C3AED]">ATENÇÃO</div>
                <h3 className="text-white font-bold text-xl tracking-widest mb-12">CLIENTES</h3>
                <p className="text-white/90 text-[15px] leading-relaxed font-medium mb-8">Informamos que no dia<br/><strong className="text-white text-lg">21 de Abril</strong><br/> não haverá<br/>atendimento administrativo<br/>em razão do Feriado de<br/>Tiradentes.</p>
                <p className="text-white/90 text-[15px] leading-relaxed font-medium">Informamos que a nossa<br/>Assistência 24h seguirá<br/>operando normalmente<br/>para atender você!</p>
              </div>
            </div>
          </div>
        )}

        {/* Stories View - MAIO */}
        {activeTab === 'stories' && activeMonth === 'maio' && (
          <div className="flex flex-col justify-center items-center gap-12 py-8 animate-in fade-in scale-in-95 duration-500">
            {/* Story 1: Dia do Trabalhador */}
            <div className="relative w-[320px] h-[640px] bg-[#1E1B4B] rounded-[2.5rem] p-4 shadow-2xl border-[8px] border-gray-900 flex flex-col overflow-hidden group">
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#A78BFA 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
              <div className="relative z-10 flex flex-col h-full justify-center items-center text-center px-6 transition-transform group-hover:scale-105 duration-500">
                <div className="bg-[#6D28D9] text-white font-black text-2xl tracking-widest py-3 px-8 rounded-lg mb-2 shadow-lg w-full border border-[#8B5CF6]">COMUNICADO</div>
                <h3 className="text-white font-bold text-lg tracking-widest mb-10 text-[#C4B5FD]">DIA DO TRABALHADOR</h3>
                <p className="text-white/90 text-[15px] leading-relaxed font-medium mb-8">Informamos que no dia<br/><strong className="text-white text-xl">01 de Maio</strong><br/> não haverá<br/>atendimento administrativo<br/>em razão do Feriado.</p>
                <p className="text-white/90 text-[15px] leading-relaxed font-medium">Informamos que a nossa<br/><span className="text-[#A78BFA] font-bold">Assistência 24h seguirá<br/>operando normalmente</span><br/>para atender você!</p>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
