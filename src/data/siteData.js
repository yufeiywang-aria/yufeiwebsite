import profilePhoto from "../assets/profile-yufei.jpg";

export const profile = {
  englishName: "Yufei Wang",
  chineseName: "Wang Yufei / 王钰霏",
  headline: "Tourism Research · Digital Media · AIGC Practice",
  shortTitle: "Tourism Research & AIGC Practice",
  email: "17346667688@163.com",
  photo: profilePhoto,
  lastUpdated: "2026/07/19",
  skills: [
    "NVivo",
    "LaTeX",
    "Codex",
    "AIGC Design",
    "Web Design",
    "Video Editing",
  ],
  links: [{ label: "Email", href: "mailto:17346667688@163.com" }],
  about: [
    "I am Yufei Wang (王钰霏), an undergraduate student in Hotel Management at Hainan University and Tourism Development and Management at Arizona State University. My academic interests lie at the intersection of tourism research, digital media, AIGC practice, and Hainan-focused destination studies.",
    "My current research and project experience covers women's outdoor adventure, pet-friendly group travel, Hainan destination branding, cultural tourism innovation, and AI-assisted visual communication. I am especially interested in how tourism experiences are shaped by bodies, emotions, communities, technologies, and local contexts.",
    "This website serves as a living portfolio of my research projects, selected creative works, practical experience, awards, certificates, and downloadable materials.",
  ],
  callout:
    "Research details, project images, PDFs, and videos will continue to be updated as materials are finalized.",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "news", label: "News" },
  { id: "research-projects", label: "Research Projects" },
  { id: "selected-projects", label: "Selected Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "awards", label: "Awards" },
  { id: "certificates", label: "Certificates" },
  { id: "downloads", label: "Downloads" },
];

export const news = [
  {
    time: "2026.06",
    content: [
      { text: "My first-author paper, " },
      { text: "Making Strangers Familiar: Pet-Mediated Interaction in Organized Pet Group Tours", highlight: true },
      { text: ", was accepted to the 2026 Tourism Geography Annual Conference! Still happily exploring how pets make strangers familiar in travel." },
    ],
  },
  {
    time: "2026.04",
    content: [
      { text: "My first-author paper, " },
      { text: "Knowing What the Body Is Capable of", highlight: true },
      { text: ", was accepted to the English forum of the 2026 Tourism Science Annual Conference. I presented and defended it in English - nervous, but worth it!" },
    ],
  },
  {
    time: "2026.03",
    content: [
      { text: "I attended Prof. Joseph M. Cheer's publication workshop and received encouraging feedback on my women's outdoor adventure project~" },
    ],
  },
  {
    time: "2025.10",
    content: [
      { text: "Glad to receive the " },
      { text: "Science and Innovation Scholarship", highlight: true },
      { text: " from Hainan University! Only two students in my college received it." },
    ],
  },
  {
    time: "2025.09",
    content: [
      { text: "I joined the " },
      { text: "Hainan, Naturally Yours", highlight: true },
      { text: " destination branding white paper project with David, thinking about how Hainan can better tell its own story." },
    ],
  },
  {
    time: "2025.07",
    content: [
      { text: "I spent a month in Shenzhen conducting " },
      { text: "ESIEC enterprise fieldwork", highlight: true },
      { text: " - meeting real businesses, real people, and many unexpected stories~" },
    ],
  },
  {
    time: "2025.06",
    content: [
      { text: "I started working as a research assistant in Prof. Li Ping's group, focusing on women's outdoor leisure, embodied experience, and transformative learning." },
    ],
  },
  {
    time: "2025.06",
    content: [
      { text: "I joined the Student Research Support Center, supporting paper collection editing, academic events, and research communication." },
    ],
  },
  {
    time: "2025.03",
    content: [
      { text: "I supported conference services during the " },
      { text: "2025 Boao Forum for Asia", highlight: true },
      { text: " and got a closer look at how a major international event works." },
    ],
  },
  {
    time: "2024.11",
    content: [
      { text: "I started working as an " },
      { text: "Arizona State University Research Aide", highlight: true },
      { text: " - my first systematic experience in cross-cultural academic collaboration." },
    ],
  },
  {
    time: "2024.07",
    content: [
      { text: "I interned at " },
      { text: "Hilton Shenzhen Shekou", highlight: true },
      { text: ", getting my first real taste of hotel marketing and business operations." },
    ],
  },
  {
    time: "2024.06",
    content: [
      { text: "I joined a summer teaching volunteer program, spent meaningful time with children, and understood educational practice more concretely~" },
    ],
  },
  {
    time: "2023.10",
    content: [
      { text: "I received the " },
      { text: "Red Cross First Aid Certificate & CPR+AED Certificate", highlight: true },
      { text: " and started learning first aid and emergency response more systematically." },
    ],
  },
];

/**
 * @typedef {Object} LocalizedText
 * @property {string} en
 * @property {string} zh
 */

export const researchProjects = [
  {
    id: "cyborg-ai-companion",
    title: { en: "Cyborg AI Emotional Companion Project", zh: "" },
    status: { en: "Research & Competition Project", zh: "" },
    image: "/assets/projects/cyborg-ai-companion.jpg",
    imageTone: "blue",
    description: {
      en: "This research project investigates user attachment, emotional satisfaction, and ethical concerns in AI virtual companion platforms. Based on 587 survey responses, SPSS analysis, and platform comment analysis, the project examines how users form emotional dependence on AI companions and how platforms may better address interaction design, privacy protection, and ethical risks.",
      zh: "",
    },
    abstract: {
      en: "This research project investigates user attachment, emotional satisfaction, and ethical concerns in AI virtual companion platforms.",
      zh: "",
    },
    materials: [
      {
        label: { en: "Proposal", zh: "" },
        href: "/assets/project-files/cyborg-ai-companion-proposal.pdf",
      },
      {
        label: { en: "PPT PDF", zh: "" },
        href: "/assets/project-files/cyborg-ai-companion-ppt.pdf",
      },
    ],
    tags: ["AIGC", "AICompanion", "UserAttachment", "Ethics"],
    links: [],
  },
  {
    id: "hainan-destination-branding",
    title: { en: "Hainan Destination Branding White Paper", zh: "" },
    status: { en: "Research Project · Branding Proposal", zh: "" },
    image: "/assets/projects/hainan-branding.jpg",
    imageTone: "pink",
    description: {
      en: "This project explores differentiated branding pathways for Hainan by benchmarking tropical destinations such as Bali, Cebu, Phuket, and Da Nang. I contributed to international faculty feedback research, slogan evaluation, and the development of the “Hainan, Naturally Yours” branding proposal. The project produced a 32-page printed white paper and later extended into visual communication and AI-assisted storytelling practices.",
      zh: "",
    },
    abstract: {
      en: "This project explores differentiated branding pathways for Hainan by benchmarking tropical destinations and developing the “Hainan, Naturally Yours” proposal.",
      zh: "",
    },
    materials: [
      {
        label: { en: "PDF White Paper", zh: "" },
        href: "/assets/project-files/hainan-branding-white-paper.pdf",
      },
    ],
    tags: ["HainanBranding", "DestinationMarketing", "WhitePaper", "PlaceNarratives"],
    links: [],
  },
  {
    id: "womens-adventure-research",
    title: { en: "Women’s Adventure, Embodiment, and Transformative Experience", zh: "" },
    status: { en: "Research Program · Two Related Studies", zh: "" },
    image: "/assets/projects/women-outdoor-adventure.png",
    imageTone: "pink",
    description: {
      en: "This research program brings together two related studies of women’s outdoor adventure. Drawing on 31 in-depth interviews and a 512-sample survey, the studies examine how embodied experience, flow, skill development, and transformative learning reshape women’s understanding of bodily capability, identity, empowerment, and psychological well-being.",
      zh: "",
    },
    abstract: {
      en: "Two related studies examine embodiment, identity construction, flow, learning, and empowerment in women’s outdoor adventure.",
      zh: "",
    },
    subResults: [
      {
        en: "Knowing What the Body Is Capable of: Embodied Understanding and Identity Construction in Women’s Outdoor Adventure",
        zh: "",
      },
      {
        en: "Flow, Learning, and Empowerment: A Mixed-Methods Study of Female Adventure Tourists’ Transformative Experiences",
        zh: "",
      },
    ],
    materials: [
      {
        label: { en: "Study 1 Abstract", zh: "" },
        href: "/assets/project-files/women-outdoor-adventure-abstract.pdf",
      },
      {
        label: { en: "Study 1 Poster", zh: "" },
        href: "/assets/project-files/women-outdoor-adventure-poster.png",
      },
      {
        label: { en: "Study 2 Abstract", zh: "" },
        href: "/assets/project-files/female-flow-learning-abstract.pdf",
      },
    ],
    tags: [
      "WomenOutdoorAdventure",
      "Embodiment",
      "IdentityWork",
      "FlowExperience",
      "TransformativeLearning",
      "MixedMethods",
    ],
    links: [],
  },
  {
    id: "pet-mediated-tours",
    title: { en: "Pet-Mediated Interaction in Organized Pet Group Tours", zh: "" },
    status: { en: "Conference Paper · First Author", zh: "" },
    image: "/assets/projects/pet-mediated-tours.png",
    imageTone: "green",
    description: {
      en: "This study explores how pets mediate interaction among strangers in organized pet group tours. Based on 21 semi-structured interviews with Chinese pet owners, it examines how pets create low-pressure openings for communication, shared care, and temporary familiarity, while also revealing the limits of multispecies sociality. The paper was accepted by the 2026 Annual Conference of the Tourism Geography Committee, Geographical Society of China.",
      zh: "",
    },
    abstract: {
      en: "This study explores how pets mediate interaction among strangers in organized pet group tours.",
      zh: "",
    },
    materials: [
      {
        label: { en: "Abstract", zh: "" },
        href: "/assets/project-files/pet-mediated-tours-abstract.pdf",
      },
      {
        label: { en: "Poster", zh: "" },
        href: "/assets/project-files/pet-mediated-tours-poster.pdf",
      },
    ],
    tags: ["Selected", "PetTourism", "PetMediatedInteraction", "GroupTours", "QualitativeResearch"],
    links: [],
  },
];

export const selectedProjects = [
  {
    id: "hainan-ftp-animation",
    title: { en: "Hainan Free Trade Port AI Animation", zh: "海南自贸港 AIGC 动画" },
    status: { en: "AI Storytelling · Visual Communication", zh: "" },
    image: "/assets/projects/hainan-ftp-animation.png",
    imageTone: "pink",
    description: {
      en: "This project transforms research on public understanding of the Hainan Free Trade Port into an AI-assisted animated story. Based on interviews and background research, I led project coordination and contributed to the script, narrative structure, character and scene design, visual generation, and post-production. The final animation explores how complex policy-related information can be communicated through accessible digital storytelling.",
      zh: "",
    },
    materials: [
      {
        label: { en: "View Production Process", zh: "" },
        url: "/assets/selected-projects/hainan-ai-animation/production-process.pdf",
        type: "pdf",
      },
      {
        label: { en: "Watch Video", zh: "" },
        url: "/assets/project-files/hainan-ftp-animation-video.mp4",
        type: "video",
      },
    ],
    tags: ["Selected", "AIAnimation", "DigitalStorytelling", "HainanFTP", "VisualCommunication"],
    links: [],
  },
  {
    id: "pixel-hainan",
    title: { en: "Pixel Hainan: An Interactive Cultural Exploration Prototype", zh: "" },
    status: { en: "Interactive 3D Prototype · Web Game", zh: "" },
    image: "/assets/selected-projects/pixel-hainan/cover.png",
    imageTone: "blue",
    description: {
      en: "Pixel Hainan is a web-based 3D cultural exploration prototype that presents Hainan through an interactive pixel world. Players travel across themed areas, interact with cultural sites, complete small tasks, and collect cultural records. I developed the project concept, cultural content structure, interaction design, and working prototype using Three.js and web technologies.",
      zh: "",
    },
    materials: [
      {
        label: { en: "Play Web Game", zh: "" },
        url: "https://yufeiywang-aria.github.io/pixel-hainan/",
        type: "external",
      },
      {
        label: { en: "Watch Demo", zh: "" },
        url: "https://share.weiyun.com/urMtGKFJ",
        type: "external",
      },
    ],
    tags: ["Selected", "Three.js", "InteractiveDesign", "CulturalHeritage", "Web3D"],
    links: [],
  },
  {
    id: "unity-halloween-mini-game",
    title: { en: "Unity 3D Halloween Interactive Mini Game", zh: "" },
    status: { en: "Interactive 3D Game · Course Project", zh: "" },
    image: "/assets/selected-projects/unity-halloween/cover.png",
    imageTone: "blue",
    description: {
      en: "This course project is a Halloween-themed 3D interactive mini game developed in Unity. I built a low-poly environment and implemented character movement, camera control, scene exploration, collectible interactions, obstacle collisions, and a basic game UI. I also used Codex to support C# scripting and asset integration, exploring how game engines can turn visual concepts into playable interactive experiences.",
      zh: "",
    },
    materials: [
      {
        label: { en: "Watch Demo", zh: "" },
        url: "https://share.weiyun.com/kQUQBECX",
        type: "external",
      },
    ],
    tags: ["Selected", "Unity", "GameDesign", "CSharp", "InteractiveExperience", "LowPoly"],
    links: [],
  },
  {
    id: "laobacha-talk",
    title: { en: "Laobacha Talk: Visual Identity and Interactive Cultural Experience", zh: "" },
    status: { en: "Cultural Communication · Interactive Experience", zh: "" },
    image: "/assets/selected-projects/laobacha-talk/cover.png",
    imageTone: "pink",
    description: {
      en: "This project translates Hainan-focused research into a participatory cultural event combining informal discussion, visual identity design, and a small interactive game. I worked on the project concept, poster and visual communication materials, and the digital interaction experience, exploring how local cultural knowledge can move beyond research documents and enter public-facing, social, and playful settings.",
      zh: "",
    },
    materials: [
      {
        label: { en: "View Design Process", zh: "" },
        url: "/assets/selected-projects/laobacha-talk/design-process.pdf",
        type: "pdf",
      },
      {
        label: { en: "Play Mini Game", zh: "" },
        url: "https://yufeiywang-aria.github.io/laobacha-memory-table-game/",
        type: "external",
      },
      {
        label: { en: "View Event Materials", zh: "" },
        url: "https://mp.weixin.qq.com/s/2IbRojFOL7OSsL0pOd5fbw",
        type: "external",
      },
    ],
    tags: ["Selected", "HainanCulture", "VisualIdentity", "InteractiveExperience", "PublicCommunication"],
    links: [],
  },
  {
    id: "hainan-research-database",
    title: { en: "Hainan Research Database", zh: "" },
    status: { en: "Digital Research Infrastructure · Knowledge Design", zh: "" },
    image: "/assets/selected-projects/hainan-database/cover.png",
    imageTone: "green",
    description: {
      en: "This project organizes Hainan-related academic and practical materials into a structured and searchable digital resource. I collected, classified, and reorganized information on local culture, tourism, branding, policy, and regional development, while designing a clearer system for users to access and reuse these materials. The database supports future research, content development, and Hainan-focused creative projects.",
      zh: "",
    },
    materials: [
      {
        label: { en: "View Process", zh: "" },
        url: "/assets/selected-projects/hainan-database/development-process.pdf",
        type: "pdf",
      },
      {
        label: { en: "Visit Database", zh: "" },
        url: "https://yuyu061128.github.io/hainan-archive/",
        type: "external",
      },
      {
        label: { en: "Watch Demo", zh: "" },
        url: "https://share.weiyun.com/a3GVL3vz",
        type: "external",
      },
    ],
    tags: ["Selected", "ResearchDatabase", "InformationArchitecture", "HainanStudies", "KnowledgeDesign"],
    links: [],
  },
  {
    id: "wuzhizhou-cultural-tourism",
    title: { en: "Wuzhizhou Island Cultural Tourism UI & Creative Product Design", zh: "" },
    status: { en: "Cultural Tourism UI · Creative Product Design", zh: "" },
    image: "/assets/selected-projects/wuzhizhou/cover.png",
    imageTone: "pink",
    description: {
      en: "This project explores how the marine culture and pearl-oyster resources of Wuzhizhou Island can be translated into visitor experiences, digital interfaces, and creative products. As project leader, I participated in research, concept development, UI design, cultural product planning, and the organization of the overall proposal. The project connects local industrial resources with tourism interpretation, visual communication, and cultural consumption.",
      zh: "",
    },
    materials: [
      {
        label: { en: "View Design Gallery", zh: "" },
        url: "https://share.weiyun.com/whRNQrZs",
        type: "external",
      },
      {
        label: { en: "View Design Proposal", zh: "" },
        url: "/assets/selected-projects/wuzhizhou/design-proposal.pdf",
        type: "pdf",
      },
    ],
    tags: ["Selected", "UIDesign", "CulturalTourism", "MarineCulture", "CreativeProducts"],
    links: [],
  },
  {
    id: "litchi-year-round-strategy",
    title: {
      en: "From One Season to Four: Litchi Content and Year-Round Revenue Strategy",
      zh: "",
    },
    status: { en: "Digital Content Strategy · Agricultural Innovation", zh: "" },
    image: "/assets/selected-projects/litchi/cover.png",
    imageTone: "green",
    achievement: { en: "National First Prize", zh: "国家一等奖" },
    description: {
      en: "This project responds to the short selling season and unstable income structure of the litchi industry by proposing a year-round digital content and revenue strategy. The plan combines seasonal storytelling, a WeChat public account, an AI assistant, product promotion, and continued audience engagement beyond the harvest period. It explores how a seasonal agricultural product can be developed into a more sustainable cultural and consumer experience.",
      zh: "",
    },
    materials: [
      {
        label: { en: "View Project", zh: "" },
        url: "/assets/selected-projects/litchi/project-presentation.pdf",
        type: "pdf",
      },
    ],
    tags: ["Selected", "ContentStrategy", "AgriculturalBranding", "AIAssistant", "YearRoundRevenue"],
    links: [],
  },
  {
    id: "humen-ferry-revival",
    title: { en: "Humen Ferry Heritage Revival and Cultural Tourism Innovation", zh: "" },
    status: { en: "Cultural Tourism Planning · Competition Project", zh: "" },
    image: "/assets/selected-projects/humen-ferry/cover.png",
    imageTone: "blue",
    achievement: { en: "National First Prize", zh: "" },
    description: {
      en: "This project proposes a cultural tourism revitalization strategy for Humen Ferry by combining historical interpretation, visitor experience design, cultural products, event planning, and digital communication. I contributed to the research, concept development, proposal structure, presentation design, and competition video. The project received National First Prize in the National Business Elite Challenge.",
      zh: "",
    },
    materials: [
      {
        label: { en: "View Proposal", zh: "" },
        url: "/assets/selected-projects/humen-ferry/proposal.pdf",
        type: "pdf",
      },
      {
        label: { en: "View Presentation", zh: "" },
        url: "/assets/selected-projects/humen-ferry/presentation.pdf",
        type: "pdf",
      },
      {
        label: { en: "Watch Video", zh: "" },
        url: "https://share.weiyun.com/xZL8QsKa",
        type: "video",
      },
    ],
    tags: ["Selected", "CulturalTourism", "HeritageRevival", "MICE", "TourismPlanning"],
    links: [],
  },
  {
    id: "peach-blossom-spring-game",
    title: { en: "The Peach Blossom Spring: An Interactive Learning Game", zh: "" },
    status: { en: "Interactive Learning · Web Game", zh: "" },
    image: "/assets/selected-projects/peach-blossom/cover.png",
    imageTone: "blue",
    description: {
      en: "This project reinterprets the classical Chinese text The Peach Blossom Spring as an interactive web-based learning experience. Through scene exploration, narrative interaction, and visual storytelling, it helps learners understand the text, cultural imagery, and central ideas in a more engaging way. I developed the content structure, interaction concept, visual presentation, and prototype.",
      zh: "",
    },
    materials: [
      {
        label: { en: "Play Game", zh: "" },
        url: "/assets/selected-projects/peach-blossom/index.html",
        type: "external",
      },
      {
        label: { en: "Watch Video", zh: "" },
        url: "/assets/selected-projects/peach-blossom/demo.mp4",
        type: "external",
      },
    ],
    tags: ["Selected", "LearningGame", "WebInteraction", "ClassicalLiterature", "DigitalEducation"],
    links: [],
  },
  {
    id: "kittens-adventure",
    title: { en: "The Kitten’s Adventure: An Interactive Picture Book", zh: "" },
    status: { en: "Interactive Picture Book · AI-assisted Illustration", zh: "" },
    image: "/assets/selected-projects/kittens-adventure/cover.png",
    imageTone: "pink",
    description: {
      en: "The Kitten’s Adventure is a digital picture book that combines illustrated storytelling with simple web-based interactions. The project explores how AI-assisted image creation and interactive presentation can support children’s narrative and reading experiences. I developed the story structure, visual scenes, page sequence, and interactive reading format.",
      zh: "",
    },
    materials: [
      {
        label: { en: "Read Online", zh: "" },
        url: "/assets/selected-projects/kittens-adventure/index.html",
        type: "external",
      },
      {
        label: { en: "Watch Video", zh: "" },
        url: "/assets/selected-projects/kittens-adventure/demo.mp4",
        type: "external",
      },
    ],
    tags: ["Selected", "InteractiveStorytelling", "PictureBook", "AIGC", "ChildrensMedia"],
    links: [],
  },
  {
    id: "aigc-visual-motion",
    title: { en: "AIGC Visual and Motion Experiments", zh: "" },
    status: { en: "AIGC Visual Practice · Motion Design", zh: "" },
    coverVideo: "/assets/selected-projects/aigc-experiments/cover.mp4",
    coverImage: "/assets/selected-projects/aigc-experiments/cover.png",
    imageTone: "blue",
    description: {
      en: "This collection documents my experiments with AI-assisted image and motion creation, including liquid-metal aesthetics, visual style exploration, image iteration, and short-form video production. The project focuses on how prompts, visual references, composition, and post-production decisions shape a consistent visual language. Selected images and motion clips are presented as an evolving archive of creative experiments.",
      zh: "",
    },
    materials: [
      {
        label: { en: "View Gallery", zh: "" },
        url: "https://share.weiyun.com/0ycFPkb7",
        type: "external",
      },
      {
        label: { en: "Watch Motion Reel", zh: "" },
        url: "https://share.weiyun.com/CK3Fl91m",
        type: "external",
      },
    ],
    tags: ["Selected", "AIGC", "VisualExperiment", "MotionDesign", "PromptDesign"],
    links: [],
  },
  {
    id: "tsinghua-sdgs-policy-case",
    title: { en: "Tsinghua SDGs Public Policy Case Study", zh: "" },
    status: { en: "Case Study · Team Leader", zh: "" },
    image: "/assets/projects/tsinghua-sdgs-case.jpg",
    imageTone: "green",
    achievement: { en: "Top 60", zh: "前 60 强" },
    description: {
      en: "This English case study examines how Hainan’s community governance and emergency-response mechanisms evolved across two major typhoon events. As team leader, I led topic selection, evidence collection, comparative analysis, and report development, focusing on early-warning systems, community coordination, and post-disaster recovery. The project was selected as a Top 60 case in the Tsinghua SDGs Public Policy Case Competition.",
      zh: "",
    },
    materials: [],
    tags: ["Selected", "PublicPolicy", "CommunityResilience", "Hainan", "SDGs"],
    links: [],
  },
  {
    id: "saiyuen-business-analysis",
    title: { en: "Saiyuen Camping & Adventure Park Business Analysis", zh: "" },
    status: { en: "Hospitality Business Analysis · Coursework Project", zh: "" },
    image: "/assets/projects/saiyuen-cover.jpg",
    imageTone: "green",
    description: {
      en: "Developed across two course projects, this work analyzes Saiyuen Camping & Adventure Park through market positioning, visitor needs, product design, operations, revenue strategy, and communication. It translates hospitality and tourism-management concepts into practical business proposals and visual presentations. The project demonstrates my ability to connect analytical thinking with experience design and operational planning.",
      zh: "",
    },
    materials: [
      {
        label: { en: "Project I", zh: "" },
        href: "/assets/project-files/saiyuen-proposal-part-1.pdf",
      },
      {
        label: { en: "Project II", zh: "" },
        href: "/assets/project-files/saiyuen-proposal-part-2.pdf",
      },
      {
        label: { en: "Presentation", zh: "" },
        href: "/assets/project-files/saiyuen-presentation.pdf",
      },
    ],
    tags: ["HospitalityOperations", "RevenueStrategy", "BusinessAnalysis", "CampingTourism"],
    links: [],
  },
];

export const experience = [
  {
    category: "Research Support",
    dateLeft: "2025.06 - Present",
    logo: "/assets/logos/srsc.png",
    logoText: "SRSC",
    images: ["/assets/experience/srsc-01.png"],
    organization: "Student Research Support Center",
    title: "Student Assistant",
    meta: "2025.06 - Present · Hainan University",
    bullets: [
      "Supported manuscript organization, layout checking, and editing of college research paper collections.",
      "Assisted with academic events, research communication, and student research support activities.",
    ],
    tags: ["Research Support", "Editing", "Academic Events"],
  },
  {
    category: "Field Survey",
    dateLeft: "2025.07 - 2025.09",
    logo: "/assets/logos/pku.png",
    logoText: "PKU",
    images: ["/assets/experience/esiec-01.png"],
    organization: "Peking University China Enterprise Innovation and Entrepreneurship Survey",
    title: "ESIEC Survey Enumerator",
    meta: "2025.07 - 2025.09 · Hainan, China",
    bullets: [
      "Conducted field and phone surveys for newly established private enterprises.",
      "Visited nearly 350 sampled firms and accumulated 31.5 valid interview hours.",
    ],
    tags: ["Field Survey", "Data Collection", "Questionnaire"],
  },
  {
    category: "Work",
    dateLeft: "2024.07 - 2024.08",
    logo: "/assets/logos/hilton.png",
    logoText: "H",
    images: ["/assets/experience/hilton-01.png"],
    organization: "Hilton Shenzhen Shekou",
    title: "Business Development & Marketing Intern",
    meta: "2024.07 - 2024.08 · Shenzhen, China",
    bullets: [
      "Supported Douyin livestream sales, Xiaohongshu KOL coordination, and client reception.",
      "Assisted with site inspections for weddings, corporate events, and business meetings.",
    ],
    tags: ["Hotel Marketing", "MICE", "Client Reception"],
  },
  {
    category: "Event Service",
    dateLeft: "2023 - 2025",
    logo: "",
    logoText: "EVT",
    images: ["/assets/experience/event-01.png"],
    organization: "Various Conferences and Cultural Events",
    title: "International Conference and Cultural Event Volunteer",
    meta: "2023 - 2025 · Hainan, China",
    bullets: [
      "Participated in 16 cultural and conference service activities, including CTSAP, Boao Forum for Asia, WTCA Asia-Pacific Conference, and World Design Congress.",
      "Supported registration, guest reception, venue guidance, material distribution, and on-site coordination.",
    ],
    tags: ["Event Service", "Conference Support", "Guest Reception"],
  },
  {
    category: "Volunteer Service",
    dateLeft: "2023 - 2025",
    logo: "/assets/logos/first-aid.png",
    logoText: "+",
    images: ["/assets/experience/first-aid-01.png"],
    organization: "First Aid & Emergency Response Volunteer",
    title: "Public Event and Emergency Support",
    meta: "2023 - 2025 · Haikou, China",
    bullets: [
      "Completed Red Cross first-aid training and CPR/AED certification.",
      "Participated in emergency support services for public events and Gaokao volunteer service.",
    ],
    tags: ["First Aid", "CPR/AED", "Public Service"],
  },
  {
    category: "Teaching / Volunteer",
    dateLeft: "2024.07",
    logo: "/assets/logos/wushan.png",
    logoText: "W",
    images: ["/assets/experience/wushan-01.png"],
    organization: "Wushan Primary School Summer Teaching Program",
    title: "Teaching Assistant",
    meta: "2024.07 · Lingshui County, Hainan",
    bullets: [
      "Assisted classroom teaching, homework tutoring, class management, and reading activities.",
    ],
    tags: ["Teaching", "Rural Education", "Volunteer Service"],
  },
];

export const education = [
  {
    university: "Hainan University - Arizona State University Joint International Tourism College",
    degree:
      "Bachelor of Management in Hotel Management, Tourism Development and Management Track, GPA: 3.88/4.00, Average Score: 93/100, Major Ranking: 2/76.",
    period: "2023.09 - 2027.06",
    location: "Haikou, China",
    courses: [
      "Tourism Planning (100)",
      "Intercultural Communication (98)",
      "Convention Sales and Meeting Planning (97)",
      "Smart Tourism Technology Application Practice (94)",
      "Consumer Behavior (93)",
      "Sustainable Tourism (93)",
    ],
  },
];

export const awards = [
  {
    year: "2025",
    title: "Tsinghua SDGs Public Policy Case Competition",
    result: "Top 60",
  },
  {
    year: "2025",
    title: "Zhengda Cup Market Research Competition",
    result: "National Third Prize",
  },
  {
    year: "2025",
    title: "Business Elite Challenge, Cultural Tourism & MICE Track",
    result: "National First Prize",
  },
  {
    year: "2024",
    title: "CESIM Hotel Management Simulation Competition",
    result: "National Second Prize",
  },
  {
    year: "2025",
    title: "Cultural, Business & Tourism Virtual Simulation Competition",
    result: "National Second Prize",
  },
  {
    year: "2024",
    title: "FLTRP-ETIC Cup Campus Contest",
    result: "Translation Silver; Ability Bronze",
  },
];

export const certificates = [
  {
    name: "First Aid & CPR/AED",
    issuer: "Basic emergency rescue and CPR/AED training",
    date: "To be added",
  },
  {
    name: "CET-6",
    issuer: "China Education Examinations Authority | Score: 517",
    date: "",
  },
  {
    name: "FLTRP ETIC Cup Campus Contest",
    issuer: "Silver Award in Translation and Bronze Award in Comprehensive Ability",
    date: "",
  },
];

export const downloads = [
  {
    label: "English Resume",
    description: "A concise English resume for academic, internship, and international program applications.",
    href: "/files/Yufei_Wang_Resume_EN.pdf",
  },
  {
    label: "Chinese CV",
    description: "A Chinese CV version covering education, research, competitions, internship, and practical experience.",
    href: "/files/Yufei_Wang_CV_CN.pdf",
  },
  {
    label: "Media-oriented CV",
    description: "A Chinese CV version tailored for media, communication, design, and creative-related opportunities.",
    href: "/files/Yufei_Wang_CV_Media.pdf",
  },
  {
    label: "Portfolio PDF",
    description: "A selected portfolio of research communication, web design, visual projects, and AIGC practice. Coming soon.",
    href: "/files/Yufei_Wang_Portfolio.pdf",
  },
];

export const snapshots = [
  {
    image: "/assets/snapshots/branding_hainan_talk.jpg",
    caption: "Presenting Branding Hainan",
  },
  {
    image: "/assets/snapshots/tourism_science_conference.jpg",
    caption: "At Tourism Science Annual Conference",
  },
  {
    image: "/assets/snapshots/wtca_meeting.jpg",
    caption: "At WTCA Asia-Pacific Regional Meeting",
  },
  {
    image: "/assets/snapshots/competition_day.jpg",
    caption: "A happy competition day",
  },
  {
    image: "/assets/snapshots/gaokao_first_aid.jpg",
    caption: "On-site support for Gaokao",
  },
  {
    image: "/assets/snapshots/red_cross_training.jpg",
    caption: "First aid training",
  },
  {
    image: "/assets/snapshots/wushan_teaching.jpg",
    caption: "Teaching days in Wushan",
  },
  {
    image: "/assets/snapshots/international_event.jpg",
    caption: "Preparing activities with faculty",
  },
];
