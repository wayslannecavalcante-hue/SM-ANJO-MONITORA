import React, { useState } from 'react';
import { Calendar, CheckCircle2, Image as ImageIcon, MapPin, Type } from 'lucide-react';

// Dados do planejamento
const planejamento = [
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
    headline: "Seu carro saiu do lugar sem você? A gente te avisa na hora.",
    arte: "Mockup (imagem) de um smartphone exibindo uma notificação push da Anjo Monitora sobre um mapa de ruas. Texto de apoio: 'Alerta de Movimento Ativado'.",
    legenda: "Com a função de Cerca Virtual e Alerta de Ignição da Anjo Monitora, você tem o controle total na palma da mão. Estacionou na rua? Ative o alerta pelo app. Se o veículo for ligado ou movimentado, você recebe uma notificação imediata e nossa central de rastreamento já fica a postos. É tecnologia trabalhando pela sua paz de espírito.\n\n👉 Quer ter esse controle no seu celular? Mande um Direct e conheça nossos planos de rastreamento veicular."
  },
  {
    id: 5,
    semana: 2,
    headline: "Rastreamento veicular de ponta com um custo-benefício que faz sentido para você.",
    arte: "Card estático limpo e direto. De um lado, um ícone de 'cifrão' cortado (representando economia); do outro, um ícone de localização (pin de GPS) brilhando. Texto: 'Monitoramento que cabe no seu bolso'.",
    legenda: "Você já adiou a instalação de um rastreador veicular por achar os custos altos demais no mercado tradicional? Com a Anjo Monitora, você tem rastreamento 24h, assistência técnica (guincho, pane elétrica) e equipe de pronta resposta por um valor fixo mensal que não pesa no orçamento. Sem análise de perfil e sem burocracia.\n\n👉 Comente 'EU QUERO' e nossa equipe enviará uma oferta especial para você."
  },
  {
    id: 6,
    semana: 2,
    headline: "Mais um veículo recuperado. Mais uma família tranquila.",
    arte: "Foto de um carro (com a placa borrada) junto à viatura de apoio da Anjo Monitora. Um selo forte na imagem escrito: 'RECUPERADO COM SUCESSO'.",
    legenda: "A agilidade faz toda a diferença. Quando recebemos o alerta de furto deste cliente, nossa central de monitoramento 24h agiu em segundos, rastreando o sinal via satélite e coordenando a recuperação junto às autoridades locais. O resultado? Patrimônio de volta e cliente aliviado.\n\n👉 Não conte com a sorte, conte com o rastreamento veicular da Anjo Monitora. Link na bio para saber mais."
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

export default function App() {
  const [activeTab, setActiveTab] = useState(1);

  const postsFiltrados = planejamento.filter(post => post.semana === activeTab);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-900 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-[#5B21B6] p-2 rounded-lg">
            <MapPin className="text-white w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#5B21B6] tracking-tight">Anjo Monitora</h1>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-bold text-gray-800">Planejamento de Social Media</h2>
          <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Abril 2026</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Strategy Hero */}
        <section className="bg-gradient-to-r from-[#4C1D95] to-[#6D28D9] text-white rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Estratégia do Mês</h2>
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
          </div>
        </section>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <nav className="flex space-x-2 bg-white p-1.5 rounded-xl shadow-sm border border-gray-100">
            {[1, 2, 3, 4].map((semana) => (
              <button
                key={semana}
                onClick={() => setActiveTab(semana)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === semana
                    ? 'bg-[#5B21B6] text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#5B21B6]'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Semana {semana}
              </button>
            ))}
          </nav>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postsFiltrados.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
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
                <div className="bg-[#F5F3FF] border border-[#EDE9FE] rounded-lg p-4 mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <ImageIcon className="w-4 h-4 text-[#6D28D9]" />
                    <h4 className="text-sm font-bold text-[#6D28D9]">Direcionamento de Arte</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
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
      </main>
    </div>
  );
}
