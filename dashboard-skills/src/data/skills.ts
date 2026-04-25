export type SkillScope = "local" | "global";
export type SkillCategory =
  | "Conteúdo & Vídeo"
  | "Copywriting"
  | "Ads & Campanhas"
  | "Social Media"
  | "Email Marketing"
  | "Psicologia & Estratégia"
  | "Análise Competitiva"
  | "Gestão de Sessão"
  | "Ads Sub-skill";

export interface SkillCommand {
  command: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  displayName: string;
  description: string;
  category: SkillCategory;
  scope: SkillScope;
  source: string;
  commands: SkillCommand[];
  triggers: string[];
  dependencies: string[];
  parentSkill?: string;
}

export const skills: Skill[] = [
  // ============================================
  // CONTEÚDO & VÍDEO
  // ============================================
  {
    id: "script",
    name: "script",
    displayName: "/script",
    description:
      "Gera roteiros de vídeo prontos pra gravar na SUA voz — calibrado a partir dos seus vídeos reais, hooks de concorrentes e audiência específica.",
    category: "Conteúdo & Vídeo",
    scope: "local",
    source: "tenfoldmarc",
    commands: [
      {
        command: "/script",
        description: "Gera roteiro de vídeo na sua voz (setup na 1ª vez)",
      },
    ],
    triggers: ["/script"],
    dependencies: ["yt-dlp", "ffmpeg", "Whisper", "Apify MCP"],
  },
  {
    id: "repurpose",
    name: "repurpose",
    displayName: "/repurpose",
    description:
      "Cola a URL de qualquer Reel do Instagram → baixa, transcreve, mantém o hook original e reescreve o corpo na sua voz ou novo ângulo.",
    category: "Conteúdo & Vídeo",
    scope: "local",
    source: "tenfoldmarc",
    commands: [
      {
        command: "/repurpose [url_do_reel]",
        description: "Baixa, transcreve e reescreve um Reel na sua voz",
      },
    ],
    triggers: ["/repurpose"],
    dependencies: ["yt-dlp", "ffmpeg", "Whisper"],
  },
  {
    id: "viral",
    name: "viral",
    displayName: "/viral",
    description:
      "Gera 10 ideias de vídeo viral com pesquisa real (Reddit, Google Trends, TikTok) — cada ideia soa como algo que VOCÊ diria.",
    category: "Conteúdo & Vídeo",
    scope: "local",
    source: "tenfoldmarc",
    commands: [
      {
        command: "/viral",
        description: "Gera 10 ideias de vídeo viral com hooks pesquisados",
      },
    ],
    triggers: ["/viral"],
    dependencies: ["Apify MCP (opcional)"],
  },
  {
    id: "create-viral-content",
    name: "create-viral-content",
    displayName: "Viral Content Optimizer",
    description:
      "Transforma rascunhos esquecíveis em conteúdo que gera compartilhamentos. Hook architecture, detecção de IA, otimização por plataforma.",
    category: "Conteúdo & Vídeo",
    scope: "local",
    source: "coreyhaines31/marketingskills",
    commands: [
      {
        command: "Auto-ativa em conteúdo social",
        description:
          "Otimiza hooks, elimina marcas de IA, adapta por plataforma",
      },
    ],
    triggers: [
      "make this viral",
      "social media post",
      "hook",
      "engagement",
      "scroll-stopping",
    ],
    dependencies: [],
  },

  // ============================================
  // COPYWRITING
  // ============================================
  {
    id: "copy",
    name: "copy",
    displayName: "/copy",
    description:
      "Copywriting com 14 princípios core, 8 tipos de hook, 10 fórmulas de headline, 12+ templates de ads. Treinada em 100+ cartas de venda lendárias.",
    category: "Copywriting",
    scope: "local",
    source: "tenfoldmarc",
    commands: [
      {
        command: "/copy",
        description:
          "Escreve copy pra qualquer formato (landing page, VSL, email, ads, cold email)",
      },
    ],
    triggers: ["copy", "landing page", "VSL", "sales letter"],
    dependencies: [],
  },
  {
    id: "copywriting",
    name: "copywriting",
    displayName: "Copywriting (Marketing)",
    description:
      "Copy de marketing clara e persuasiva. Estrutura de página, headlines, CTAs, value proposition, subheadlines.",
    category: "Copywriting",
    scope: "local",
    source: "coreyhaines31/marketingskills",
    commands: [
      {
        command: "Auto-ativa em pedidos de copy",
        description:
          "Escreve copy pra homepage, landing, pricing, feature, about",
      },
    ],
    triggers: [
      "write copy",
      "improve this copy",
      "headline help",
      "CTA copy",
      "value proposition",
    ],
    dependencies: [],
  },

  // ============================================
  // ADS & CAMPANHAS
  // ============================================
  {
    id: "ad-creative",
    name: "ad-creative",
    displayName: "Ad Creative Generator",
    description:
      "Gera variações de anúncios em escala — headlines, descriptions, primary text. Itera com base em dados reais de performance.",
    category: "Ads & Campanhas",
    scope: "local",
    source: "coreyhaines31/marketingskills",
    commands: [
      {
        command: "Auto-ativa em pedidos de ads",
        description:
          "Gera copy pra Google RSAs, Meta Ads, LinkedIn, TikTok, Twitter/X",
      },
    ],
    triggers: [
      "ad copy",
      "ad creative",
      "generate headlines",
      "bulk ad copy",
      "ad variations",
    ],
    dependencies: [],
  },
  {
    id: "paid-ads",
    name: "paid-ads",
    displayName: "Paid Ads Strategy",
    description:
      "Cria, otimiza e escala campanhas pagas. Estrutura, budget, audiência, retargeting, reporting.",
    category: "Ads & Campanhas",
    scope: "local",
    source: "coreyhaines31/marketingskills",
    commands: [
      {
        command: "Auto-ativa em campanhas pagas",
        description:
          "Strategy completa: Google Ads, Meta, LinkedIn, Twitter/X, TikTok",
      },
    ],
    triggers: [
      "PPC",
      "paid media",
      "ROAS",
      "CPA",
      "ad campaign",
      "retargeting",
      "ad budget",
    ],
    dependencies: [],
  },
  {
    id: "claude-ads",
    name: "claude-ads",
    displayName: "Claude Ads Suite",
    description:
      "Suite completa de ads com 17 sub-skills. 225+ checks, scoring 0-100, auditoria multi-plataforma, geração de criativos com IA.",
    category: "Ads & Campanhas",
    scope: "local",
    source: "AgriciDaniel/claude-ads",
    commands: [
      {
        command: "/ads audit",
        description: "Auditoria completa multi-plataforma (6 agentes paralelos)",
      },
      {
        command: "/ads google",
        description: "Análise de Google Ads",
      },
      {
        command: "/ads meta",
        description: "Análise de Meta/Facebook Ads",
      },
      {
        command: "/ads tiktok",
        description: "Análise de TikTok Ads",
      },
      {
        command: "/ads youtube",
        description: "Análise de YouTube Ads",
      },
      {
        command: "/ads linkedin",
        description: "Análise de LinkedIn Ads",
      },
      {
        command: "/ads microsoft",
        description: "Análise de Microsoft/Bing Ads",
      },
      {
        command: "/ads apple",
        description: "Análise de Apple Search Ads",
      },
      {
        command: "/ads creative",
        description: "Auditoria de qualidade criativa",
      },
      {
        command: "/ads landing",
        description: "Análise de landing page",
      },
      {
        command: "/ads budget",
        description: "Otimização de alocação de budget",
      },
      {
        command: "/ads plan [tipo]",
        description: "Planejamento estratégico por indústria",
      },
      {
        command: "/ads competitor",
        description: "Inteligência de ads dos concorrentes",
      },
      {
        command: "/ads dna [url]",
        description: "Extrai DNA da marca do site → brand-profile.json",
      },
      {
        command: "/ads create",
        description: "Gera conceitos de campanha + copy briefs",
      },
      {
        command: "/ads generate",
        description: "Gera imagens de anúncios com IA",
      },
      {
        command: "/ads photoshoot",
        description: "Fotografia de produto (5 estilos)",
      },
    ],
    triggers: ["/ads"],
    dependencies: [],
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  {
    id: "social-content",
    name: "social-content",
    displayName: "Social Content Manager",
    description:
      "Cria conteúdo pra redes sociais, calendário editorial, repurposing multi-canal. LinkedIn, Twitter/X, IG, TikTok, Facebook.",
    category: "Social Media",
    scope: "local",
    source: "coreyhaines31/marketingskills",
    commands: [
      {
        command: "Auto-ativa em conteúdo social",
        description:
          "Content pillars, hooks, repurposing, calendário, analytics",
      },
    ],
    triggers: [
      "social media",
      "content calendar",
      "what should I post",
      "repurpose this content",
      "grow my following",
    ],
    dependencies: [],
  },

  // ============================================
  // EMAIL MARKETING
  // ============================================
  {
    id: "email-sequence",
    name: "email-sequence",
    displayName: "Email Sequence Builder",
    description:
      "Cria sequências de email: welcome, nurture, re-engagement, pós-compra, educacional, vendas. Timing, subject lines, copy.",
    category: "Email Marketing",
    scope: "local",
    source: "coreyhaines31/marketingskills",
    commands: [
      {
        command: "Auto-ativa em sequências de email",
        description:
          "Welcome series, drip campaign, nurture, automação, lifecycle",
      },
    ],
    triggers: [
      "email sequence",
      "drip campaign",
      "nurture sequence",
      "welcome sequence",
      "email funnel",
    ],
    dependencies: [],
  },

  // ============================================
  // PSICOLOGIA & ESTRATÉGIA
  // ============================================
  {
    id: "marketing-psychology",
    name: "marketing-psychology",
    displayName: "Marketing Psychology",
    description:
      "Aplica princípios psicológicos ao marketing: 60+ modelos mentais, vieses cognitivos, persuasão, pricing psychology.",
    category: "Psicologia & Estratégia",
    scope: "local",
    source: "coreyhaines31/marketingskills",
    commands: [
      {
        command: "Auto-ativa em psicologia de marketing",
        description:
          "Vieses, persuasão, pricing, nudges, comportamento do consumidor",
      },
    ],
    triggers: [
      "psychology",
      "cognitive bias",
      "persuasion",
      "why people buy",
      "scarcity",
      "social proof",
    ],
    dependencies: [],
  },

  // ============================================
  // ANÁLISE COMPETITIVA
  // ============================================
  {
    id: "spy",
    name: "spy",
    displayName: "/spy",
    description:
      "Espiona concorrentes no Instagram. Scrape de posts, encontra outliers virais (5x+ mediana), transcreve hooks, cria templates.",
    category: "Análise Competitiva",
    scope: "local",
    source: "tenfoldmarc",
    commands: [
      {
        command: "/spy @handle1 @handle2 ...",
        description:
          "Analisa 2-10 contas IG, acha virais, extrai hooks e templates",
      },
    ],
    triggers: ["/spy"],
    dependencies: ["Apify MCP", "yt-dlp", "Whisper", "ffmpeg"],
  },
  {
    id: "competitive-ads-extractor",
    name: "competitive-ads-extractor",
    displayName: "Competitive Ads Extractor",
    description:
      "Extrai e analisa ads dos concorrentes via Facebook Ad Library e LinkedIn. Screenshots, padrões, gaps de mercado.",
    category: "Análise Competitiva",
    scope: "local",
    source: "ComposioHQ",
    commands: [
      {
        command: "Auto-ativa em pesquisa de ads",
        description:
          "Scrape de Ad Library, screenshots, análise de messaging e gaps",
      },
    ],
    triggers: [
      "competitor ads",
      "ad library",
      "what ads are they running",
    ],
    dependencies: [],
  },

  // ============================================
  // GESTÃO DE SESSÃO
  // ============================================
  {
    id: "memory",
    name: "memory",
    displayName: "/memory",
    description:
      "Gestão unificada de memória do projeto: scan de conversa, deduplicação, detecção de contradições, scoring de confiança.",
    category: "Gestão de Sessão",
    scope: "local",
    source: "SomeStay07",
    commands: [
      {
        command: "/memory update [topic]",
        description:
          "Escaneia a conversa e persiste aprendizados na memória",
      },
      {
        command: "/memory prune [type]",
        description:
          "Encontra duplicatas, contradições, entradas obsoletas",
      },
      {
        command: "/memory prune dedup",
        description: "Scan de duplicatas apenas",
      },
      {
        command: "/memory prune contradictions",
        description: "Scan de contradições apenas",
      },
      {
        command: "/memory prune stale",
        description: "Scan de entradas obsoletas apenas",
      },
      {
        command: "/memory prune health",
        description: "Check de saúde do CLAUDE.md",
      },
      {
        command: "/memory prune --fix",
        description: "Auto-aplica fixes seguros",
      },
      {
        command: "/memory reflect",
        description: "Captura correções e feedback focado da conversa",
      },
      {
        command: "/memory status",
        description: "Visão geral da saúde da memória (sem mudanças)",
      },
    ],
    triggers: [
      "/memory",
      "update memory",
      "clean memory",
      "remember this",
    ],
    dependencies: [],
  },
  {
    id: "standup",
    name: "standup",
    displayName: "/standup",
    description:
      "Protocolo de início de sessão. Lê STATUS.md, último session log, detecta handoffs pendentes. Constrói memória de trabalho completa.",
    category: "Gestão de Sessão",
    scope: "local",
    source: "gyoung55/cowork-session-skills",
    commands: [
      {
        command: "/standup",
        description:
          "Inicia sessão: lê estado atual, prioridades, threads abertas",
      },
    ],
    triggers: ["/standup"],
    dependencies: ["STATUS.md", "session-logs/"],
  },
  {
    id: "conclude",
    name: "conclude",
    displayName: "/conclude",
    description:
      "Protocolo de encerramento. Captura tudo: progresso, decisões, contexto, arquivos modificados, threads abertas. Escreve session log.",
    category: "Gestão de Sessão",
    scope: "local",
    source: "gyoung55/cowork-session-skills",
    commands: [
      {
        command: "/conclude",
        description:
          "Encerra sessão: session log, atualiza STATUS.md, handoffs",
      },
    ],
    triggers: ["conclude", "wrap up", "end session"],
    dependencies: ["STATUS.md", "session-logs/"],
  },

  // ============================================
  // SKILLS GLOBAIS (Anthropic Plugins)
  // ============================================
  {
    id: "marketing-draft-content",
    name: "marketing:draft-content",
    displayName: "Draft Content (Global)",
    description:
      "Drafts multi-plataforma: blog posts, social media, email newsletters, landing pages, press releases, case studies.",
    category: "Social Media",
    scope: "global",
    source: "Anthropic Plugin",
    commands: [
      {
        command: "Auto-ativa em pedidos de draft",
        description: "Drafts com formatação e SEO por canal",
      },
    ],
    triggers: ["draft a blog post", "write a newsletter", "content draft"],
    dependencies: [],
  },
  {
    id: "marketing-campaign-plan",
    name: "marketing:campaign-plan",
    displayName: "Campaign Plan (Global)",
    description:
      "Brief completo de campanha: objetivos, audiência, messaging, canais, calendário, métricas de sucesso.",
    category: "Ads & Campanhas",
    scope: "global",
    source: "Anthropic Plugin",
    commands: [
      {
        command: "Auto-ativa em planejamento de campanha",
        description: "Brief completo com channel strategy e KPIs",
      },
    ],
    triggers: ["campaign plan", "product launch", "campaign brief"],
    dependencies: [],
  },
  {
    id: "marketing-performance-report",
    name: "marketing:performance-report",
    displayName: "Performance Report (Global)",
    description:
      "Relatório de performance: métricas chave, análise de tendência, wins/misses, recomendações priorizadas.",
    category: "Ads & Campanhas",
    scope: "global",
    source: "Anthropic Plugin",
    commands: [
      {
        command: "Auto-ativa em relatórios de performance",
        description: "KPIs, trends, otimizações recomendadas",
      },
    ],
    triggers: [
      "performance report",
      "campaign results",
      "marketing metrics",
    ],
    dependencies: [],
  },
  {
    id: "marketing-email-sequence-global",
    name: "marketing:email-sequence",
    displayName: "Email Sequence (Global)",
    description:
      "Sequências avançadas com branching logic, exit conditions, benchmarks de performance.",
    category: "Email Marketing",
    scope: "global",
    source: "Anthropic Plugin",
    commands: [
      {
        command: "Auto-ativa em email sequences",
        description: "Onboarding, lead nurture, re-engagement, cart abandonment",
      },
    ],
    triggers: ["email sequence", "drip campaign", "onboarding emails"],
    dependencies: [],
  },
  {
    id: "content-humanizer",
    name: "content-humanizer",
    displayName: "Content Humanizer (Global)",
    description:
      "Faz conteúdo gerado por IA soar genuinamente humano. Remove clichês de IA, adiciona personalidade.",
    category: "Conteúdo & Vídeo",
    scope: "global",
    source: "Anthropic Plugin",
    commands: [
      {
        command: "Auto-ativa em humanização",
        description: "Remove marcas de IA, adiciona voz real",
      },
    ],
    triggers: [
      "humanize",
      "sounds robotic",
      "too AI",
      "make it human",
    ],
    dependencies: [],
  },
  {
    id: "detect-ai",
    name: "detect-ai",
    displayName: "Detect AI (Global)",
    description:
      "Analisa texto pra detectar se foi escrito por IA. Score 0-100 com métricas detalhadas.",
    category: "Conteúdo & Vídeo",
    scope: "global",
    source: "Anthropic Plugin",
    commands: [
      {
        command: "Auto-ativa em detecção de IA",
        description: "Score 0-100 + métricas de naturalidade",
      },
    ],
    triggers: ["detect AI", "is this AI", "AI score", "check content"],
    dependencies: [],
  },
];

export const categories: SkillCategory[] = [
  "Conteúdo & Vídeo",
  "Copywriting",
  "Ads & Campanhas",
  "Social Media",
  "Email Marketing",
  "Psicologia & Estratégia",
  "Análise Competitiva",
  "Gestão de Sessão",
];

export const categoryIcons: Record<SkillCategory, string> = {
  "Conteúdo & Vídeo": "🎬",
  Copywriting: "✍️",
  "Ads & Campanhas": "📢",
  "Social Media": "📱",
  "Email Marketing": "📧",
  "Psicologia & Estratégia": "🧠",
  "Análise Competitiva": "🔍",
  "Gestão de Sessão": "⚙️",
  "Ads Sub-skill": "📢",
};

export const categoryColors: Record<SkillCategory, string> = {
  "Conteúdo & Vídeo": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Copywriting: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Ads & Campanhas": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Social Media": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "Email Marketing": "bg-green-500/20 text-green-400 border-green-500/30",
  "Psicologia & Estratégia":
    "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Análise Competitiva": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Gestão de Sessão": "bg-gray-500/20 text-gray-400 border-gray-500/30",
  "Ads Sub-skill": "bg-blue-500/20 text-blue-400 border-blue-500/30",
};
