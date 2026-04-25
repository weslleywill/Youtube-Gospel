export interface PipelineStep {
  id: string;
  label: string;
  description: string;
  folder: string;
  skills: string[];
  outputs: string[];
}

export interface Pipeline {
  id: string;
  name: string;
  description: string;
  steps: PipelineStep[];
}

export const pipelines: Pipeline[] = [
  {
    id: "reaproveitamento",
    name: "Reaproveitamento de Conteudo",
    description:
      "1 conteudo vira pelo menos 3 adaptacoes. Comeca no IG Reel e distribui pra todas as plataformas.",
    steps: [
      {
        id: "origem",
        label: "Conteudo Original",
        description: "IG Reel gravado pelo Weslley — hook em 2 segundos, tom autentico",
        folder: "",
        skills: ["/script", "/viral", "create-viral-content", "content-humanizer"],
        outputs: ["Reel gravado", "Roteiro original"],
      },
      {
        id: "instagram",
        label: "Instagram",
        description: "Adapta o Reel pra post estatico, carrossel educativo e sequencia de Stories",
        folder: "instagram/",
        skills: ["social-content", "/repurpose", "create-viral-content"],
        outputs: ["Post estatico", "Carrossel", "Stories (3-5 slides)", "Caption + hashtags"],
      },
      {
        id: "youtube",
        label: "YouTube Shorts",
        description: "Adapta hook + corpo pra formato YouTube. Pode derivar longform se o tema render",
        folder: "youtube/",
        skills: ["/repurpose", "/script", "social-content"],
        outputs: ["Short script (< 60s)", "Titulo + descricao SEO", "Thumbnail idea", "Longform (opcional)"],
      },
      {
        id: "tiktok",
        label: "TikTok",
        description: "Hook diferente do IG (mais direto), legendas adaptadas, trending audio",
        folder: "tiktok/",
        skills: ["/repurpose", "create-viral-content", "social-content"],
        outputs: ["Script adaptado", "Legendas TikTok", "Sugestao de audio"],
      },
      {
        id: "ads",
        label: "Anuncios Pagos",
        description: "Pega as melhores pecas organicas e cria variacoes pagas (PAS/AIDA, nunca agressivo)",
        folder: "ads/",
        skills: ["/ads create", "/ads meta", "/ads tiktok", "ad-creative", "paid-ads", "/ads score"],
        outputs: ["3 headlines + 3 bodies", "Creative brief", "Targeting sugerido"],
      },
    ],
  },
  {
    id: "monetizacao",
    name: "Funil de Monetizacao",
    description:
      "Conteudo organico leva ao ebook via DM. Sem pressao, sem copy agressivo — tom de amigo.",
    steps: [
      {
        id: "organico",
        label: "Conteudo Organico",
        description: "Posts AEI (40% Autoridade, 30% Engajamento, 30% Influencia) atraem audiencia",
        folder: "",
        skills: ["social-content", "/viral", "create-viral-content", "marketing-psychology"],
        outputs: ["Posts consistentes", "Autoridade construida"],
      },
      {
        id: "engajamento",
        label: "Engajamento & DM",
        description: "Audiencia engaja, manda DM com duvida. Weslley responde e oferece o ebook quando faz sentido",
        folder: "",
        skills: ["copywriting", "/copy", "marketing-psychology"],
        outputs: ["Respostas autenticass", "Oferta natural do ebook"],
      },
      {
        id: "venda",
        label: "Venda do Ebook",
        description: "\"O Treino Que Ninguem Ve\" — R$19,90. Venda via DM com link direto. Garantia de devolucao.",
        folder: "",
        skills: ["/copy", "email-sequence"],
        outputs: ["Link de pagamento", "Confirmacao automatica"],
      },
      {
        id: "pos-venda",
        label: "Pos-Venda & Nurture",
        description: "Sequencia de emails pra manter relacionamento, pedir feedback, e preparar proximo produto",
        folder: "",
        skills: ["email-sequence", "marketing:email-sequence"],
        outputs: ["Email de boas-vindas", "Sequencia nurture (5-7 emails)", "Pedido de depoimento"],
      },
    ],
  },
  {
    id: "pesquisa-competitiva",
    name: "Pesquisa Competitiva",
    description:
      "Entende o que funciona no nicho fitness antes de criar. Espiona, analisa, encontra gaps.",
    steps: [
      {
        id: "spy-ig",
        label: "Espionar Concorrentes IG",
        description: "Scrape de 2-10 contas fitness, acha posts virais (5x+ mediana), extrai hooks",
        folder: "",
        skills: ["/spy"],
        outputs: ["Hooks virais", "Templates de hook", "Leaderboard"],
      },
      {
        id: "spy-ads",
        label: "Espionar Anuncios",
        description: "Ve o que concorrentes estao rodando na Ad Library. Hooks, CTAs, gaps de mercado",
        folder: "",
        skills: ["competitive-ads-extractor", "/ads competitor"],
        outputs: ["Relatorio de ads", "Gaps identificados", "Angulos nao explorados"],
      },
      {
        id: "analise",
        label: "Analise & Decisao",
        description: "Com os dados, decide o que criar, qual angulo usar, e o que evitar",
        folder: "",
        skills: ["marketing-psychology", "/viral"],
        outputs: ["Ideias validadas", "Angulos escolhidos", "Hooks adaptados"],
      },
    ],
  },
];

export const pipelineColors: Record<string, { bg: string; border: string; text: string; accent: string }> = {
  reaproveitamento: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    accent: "bg-orange-500",
  },
  monetizacao: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
    accent: "bg-green-500",
  },
  "pesquisa-competitiva": {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    accent: "bg-cyan-500",
  },
};
