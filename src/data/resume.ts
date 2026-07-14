import type { TechKey } from './techIcons';
import type { SkillKey } from './skills';

export type Lang = 'pt' | 'en' | 'es';

export interface Skill {
  key: SkillKey;
  label: string;
  size?: 'lg';
}

export const profile = {
  name: 'Kaê Uchôa',
  email: 'devkaeuchoa@gmail.com',
  links: {
    github: 'https://github.com/devkaeuchoa',
    linkedin: 'https://www.linkedin.com/in/kaeuchoa',
  },
};

export interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  companySummary?: string;
  stack: TechKey[];
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Project {
  name: string;
  description: string;
  period?: string;
  mockup: 'checkout' | 'products' | 'catalog' | 'publicsector' | 'seo' | 'rideshare' | 'sdui';
  tags: string[];
  demoUrl?: string;
}

export interface ResumeContent {
  title: string;
  location: string;
  tagline: string;
  summary: string;
  summaryShort: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  // Nenhum projeto pessoal listado ainda — adicione aqui quando tiver algo pra mostrar.
  projects: Project[];
}

export const content: Record<Lang, ResumeContent> = {
  pt: {
    title: 'Desenvolvedor Web',
    location: 'Brasil',
    tagline: 'Construindo interfaces web rápidas, acessíveis e bem estruturadas.',
    summary:
      'Desenvolvedor de software com ênfase em produtos para Web (Front-end). Gosto de tarefas que envolvam arquitetura de software e estruturação/refatoração de código. Durante meu período acadêmico participei do programa Ciência sem Fronteiras nos EUA, experiência que reforçou meu interesse em projetos que ajudem pessoas de forma construtiva. Busco sempre chegar o mais próximo possível do cliente final, e tenho perfil qualificado para trabalhar em equipe, apresentar projetos e apoiar o desenvolvimento de soluções.',
    summaryShort:
      'Desenvolvedor de software com ênfase em produtos para Web (Front-end). Gosto de tarefas que envolvam arquitetura de software e estruturação/refatoração de código.',
    skills: [
      { key: 'react', label: 'React', size: 'lg' },
      { key: 'typescript', label: 'TypeScript', size: 'lg' },
      { key: 'nextjs', label: 'Next.js' },
      { key: 'javascript', label: 'JavaScript' },
      { key: 'angular', label: 'Angular / AngularJS' },
      { key: 'sass', label: 'CSS / SASS' },
      { key: 'design-systems', label: 'Design Systems', size: 'lg' },
      { key: 'sdui', label: 'Server-Driven UI' },
      { key: 'accessibility', label: 'Acessibilidade' },
      { key: 'seo', label: 'SEO' },
      { key: 'nodejs', label: 'Node.js', size: 'lg' },
      { key: 'git', label: 'Git' },
    ],
    experience: [
      {
        role: 'Desenvolvedor Front-end Sênior',
        company: 'HostGator América Latina',
        companyUrl: 'https://www.hostgator.com.br/sobre-a-hostgator',
        companySummary:
          'A HostGator é uma empresa de hospedagem de sites, com soluções que vão de hospedagem compartilhada a servidores dedicados e VPS. Atende mais de 4,5 milhões de clientes globalmente, com foco em ajudar empreendedores a tirar suas ideias do papel e ganhar presença digital.',
        stack: ['react', 'typescript', 'php'],
        period: 'outubro de 2025 — atual',
        description:
          'Parte do time de desenvolvimento de uma nova plataforma cliente para gerenciamento de agentes de IA. Aplicação de práticas de desenvolvimento orientadas por IA para acelerar a entrega de funcionalidades e elevar a qualidade do código. Definição de uma arquitetura frontend escalável e de fácil manutenção, alinhada ao crescimento do negócio. Colaboração com times multidisciplinares para definição de soluções técnicas e evolução do produto.',
      },
      {
        role: 'Desenvolvedor Sênior Frontend',
        company: 'Inter',
        companyUrl: 'https://inter.co/',
        companySummary:
          'O Inter é um super app financeiro que oferece conta digital gratuita, cartão de crédito, investimentos e soluções para pessoas físicas e empresas. Conta com cashback (Inter Shop), conta em dólar e um ecossistema completo de serviços financeiros.',
        stack: ['react', 'typescript', 'nodejs'],
        period: 'fevereiro de 2024 — outubro de 2025',
        description:
          'Liderança no desenvolvimento frontend com foco em páginas estáticas otimizadas para SEO, melhorando indexação e visibilidade orgânica. Criação e evolução de um Design System em React, com componentes reutilizáveis, acessíveis e escaláveis. Desenvolvimento de uma arquitetura de UI orientada a servidor (Server-Driven UI), facilitando a criação de páginas por usuários internos. Estruturação de uma prática de mentoria no time, apoiando o desenvolvimento técnico de pessoas desenvolvedoras juniores.',
      },
      {
        role: 'Consultor de Desenvolvimento Front-end',
        company: 'Thoughtworks',
        companyUrl: 'https://www.thoughtworks.com/pt-br/about-us',
        companySummary:
          'A Thoughtworks é uma consultoria global de tecnologia com mais de 30 anos de atuação, presente em 47 escritórios e 18 países. Une expertise em design, engenharia de software e inteligência artificial para apoiar a transformação digital de empresas de diversos setores.',
        stack: ['react', 'typescript', 'sass'],
        period: 'abril de 2021 — fevereiro de 2024',
        description:
          'Consultoria em desenvolvimento de sistemas web de e-commerce para grandes redes de varejo internacionais.',
      },
      {
        role: 'Desenvolvedor de Front-end',
        company: 'Symplicity Corporation',
        companyUrl: 'https://www.symplicity.com/',
        companySummary:
          'A Symplicity é uma plataforma de software voltada para universidades, com soluções para serviços de carreira, vida residencial, conduta estudantil e recrutamento. Seu foco é simplificar operações do campus e preparar estudantes para o mercado de trabalho.',
        stack: ['angular', 'sass', 'javascript', 'php'],
        period: 'abril de 2019 — abril de 2021',
        description:
          'Desenvolvimento e manutenção dos sistemas da empresa com ênfase em tarefas de front-end e acessibilidade.',
      },
      {
        role: 'Desenvolvedor Full-Stack',
        company: 'BitX',
        companyUrl: 'https://bitx.com.br/whitelabel/',
        companySummary:
          'A BitX é uma empresa de inovação que oferece soluções whitelabel prontas para logística e marketplace, permitindo que negócios lancem seus próprios aplicativos sem desenvolver do zero. Foca em reduzir custo e tempo de implementação para quem quer expandir no e-commerce.',
        stack: ['android', 'java', 'kotlin', 'bootstrap', 'javascript', 'nodejs'],
        period: 'setembro de 2018 — março de 2019',
        description:
          'Desenvolvimento de tarefas relacionadas a aplicativos Android e painel administrativo web.',
      },
      {
        role: 'Desenvolvedor Full-Stack',
        company: 'Órbita Consultoria e Sistemas',
        companyUrl: 'https://www.orbita.srv.br/',
        companySummary:
          'A Órbita Tecnologia desenvolve soluções de gestão digital para o setor público, com foco em transparência, agilidade e automação de processos administrativos municipais. Seus sistemas já estão implementados em diversos municípios brasileiros.',
        stack: ['bootstrap', 'javascript', 'php'],
        period: 'março de 2018 — agosto de 2018',
        description:
          'Desenvolvimento e manutenção de sistema web para gestão pública.',
      },
      {
        role: 'Bolsista em Iniciação Científica',
        company: 'Universidade Federal do Pará',
        companyUrl: 'https://ufpa.br/',
        companySummary:
          'A Universidade Federal do Pará (UFPA) é uma universidade pública federal brasileira, referência em ensino, pesquisa e extensão na região Amazônica. É multicampi e oferece cursos de graduação e pós-graduação em diversas áreas do conhecimento.',
        stack: ['android', 'java', 'kotlin'],
        period: 'agosto de 2016 — março de 2018',
        description:
          'Pesquisa acadêmica na área de Cidades Inteligentes, produção de artigos científicos e desenvolvimento de aplicativo Android.',
      },
      {
        role: 'Pesquisador Acadêmico',
        company: 'Illinois Institute of Technology',
        companyUrl: 'https://www.iit.edu/',
        companySummary:
          'O Illinois Institute of Technology (Illinois Tech) é uma universidade de pesquisa privada em Chicago, com forte foco em tecnologia e áreas STEM. Oferece mais de 50 cursos de graduação e 100 programas de pós-graduação alinhados ao mercado de trabalho.',
        stack: ['android', 'java'],
        period: 'junho de 2016 — julho de 2016',
        description:
          'Pesquisa para construção de aplicativo Android para controle de uma frota de drones autônomos.',
      },
    ],
    education: [
      {
        degree: 'Bacharelado, Ciência da Computação',
        institution: 'Universidade Federal do Pará',
        period: '2013 — 2018',
      },
      {
        degree: 'Bacharelado, Ciência da Computação',
        institution: 'State University of New York at Fredonia',
        period: '2015 — 2016',
      },
    ],
    projects: [
      {
        name: 'Checkout de e-commerce de moda',
        description:
          'Cerca de 6 meses no time responsável pelo fluxo de finalização de compra de uma grande marca de roupas dos EUA, com foco em conversão e experiência de pagamento.',
        period: '~6 meses',
        mockup: 'checkout',
        tags: ['E-commerce', 'Checkout', 'React'],
      },
      {
        name: 'Página de produtos multi-marca',
        description:
          'Pouco menos de 1 ano no time responsável pela página de apresentação de produtos da mesma rede de moda, atuando em personalização entre as 4 marcas do grupo.',
        period: '~1 ano',
        mockup: 'products',
        tags: ['E-commerce', 'Personalização', 'React'],
        // Precisa ficar em sync com `base` em astro.config.mjs
        demoUrl: '/portfolio/products/',
      },
      {
        name: 'Catálogo, busca e biblioteca de componentes',
        description:
          'Cerca de 1 ano e meio atuando diretamente no catálogo de produtos e nos mecanismos de busca do marketplace de cashback de um super app financeiro, além de colaborar na construção da biblioteca de componentes usada como identidade visual dos produtos web.',
        period: '~1,5 ano',
        mockup: 'catalog',
        tags: ['Design System', 'Busca', 'React'],
        // Precisa ficar em sync com `base` em astro.config.mjs
        demoUrl: '/portfolio/design-system/',
      },
      {
        name: 'Sistema de gestão para o setor público',
        description:
          'Desenvolvimento e manutenção de um sistema web usado por prefeituras para digitalizar processos administrativos, com acompanhamento de trâmites e emissão de certidões.',
        period: '~6 meses',
        mockup: 'publicsector',
        tags: ['Gestão Pública', 'PHP', 'Bootstrap'],
      },
      {
        name: 'Páginas otimizadas para SEO',
        description:
          'Liderança no desenvolvimento de páginas estáticas otimizadas para SEO de um super app financeiro, melhorando indexação e visibilidade orgânica nos buscadores.',
        period: '~1,5 ano',
        mockup: 'seo',
        tags: ['SEO', 'Static Site', 'React'],
        // Precisa ficar em sync com `base` em astro.config.mjs
        demoUrl: '/portfolio/seo/',
      },
      {
        name: 'Aplicativo de mobilidade urbana',
        description:
          'Desenvolvimento de funcionalidades de um aplicativo Android de caronas para uma startup de mobilidade, incluindo tela de mapa, roteirização e solicitação de corrida.',
        period: '~6 meses',
        mockup: 'rideshare',
        tags: ['Android', 'Kotlin', 'Mobilidade'],
      },
      {
        name: 'Server-Driven UI: JSON vira interface',
        description:
          'Projeto pessoal que reconstrói o conceito de Server-Driven UI explorado no Inter: uma tela interpreta um schema JSON em tempo de build e renderiza a interface real usando os componentes do design system embutido neste portfólio.',
        period: 'Projeto pessoal',
        mockup: 'sdui',
        tags: ['SDUI', 'JSON', 'Astro'],
        // Precisa ficar em sync com `base` em astro.config.mjs
        demoUrl: '/portfolio/sdui/',
      },
    ],
  },
  en: {
    title: 'Web Developer',
    location: 'Brazil',
    tagline: 'Building fast, accessible, well-structured web interfaces.',
    summary:
      'Software developer focused on Web products (Front-end). I enjoy work involving software architecture and code structuring/refactoring. During my academic years I took part in the Science without Borders program in the US, an experience that reinforced my interest in projects that help people in a constructive way. I always aim to stay as close as possible to the end customer, and have a profile well suited to working with people, leading project presentations, and supporting teams.',
    summaryShort:
      'Software developer focused on Web products (Front-end). I enjoy work involving software architecture and code structuring/refactoring.',
    skills: [
      { key: 'react', label: 'React', size: 'lg' },
      { key: 'typescript', label: 'TypeScript', size: 'lg' },
      { key: 'nextjs', label: 'Next.js' },
      { key: 'javascript', label: 'JavaScript' },
      { key: 'angular', label: 'Angular / AngularJS' },
      { key: 'sass', label: 'CSS / SASS' },
      { key: 'design-systems', label: 'Design Systems', size: 'lg' },
      { key: 'sdui', label: 'Server-Driven UI' },
      { key: 'accessibility', label: 'Accessibility' },
      { key: 'seo', label: 'SEO' },
      { key: 'nodejs', label: 'Node.js', size: 'lg' },
      { key: 'git', label: 'Git' },
    ],
    experience: [
      {
        role: 'Senior Front-end Developer',
        company: 'HostGator América Latina',
        companyUrl: 'https://www.hostgator.com.br/sobre-a-hostgator',
        companySummary:
          'HostGator is a web hosting company offering everything from shared hosting to dedicated servers and VPS. It serves more than 4.5 million customers worldwide, focused on helping entrepreneurs bring their ideas online.',
        stack: ['react', 'typescript', 'php'],
        period: 'October 2025 — Present',
        description:
          'Part of the development team building a new client platform for managing AI agents. Applying AI-driven development practices to speed up feature delivery and raise code quality. Defining a scalable, maintainable frontend architecture aligned with business growth. Collaborating with cross-functional teams on technical solutions and product evolution.',
      },
      {
        role: 'Senior Frontend Developer',
        company: 'Inter',
        companyUrl: 'https://inter.co/',
        companySummary:
          'Inter is a financial super app offering a free digital account, credit card, investments, and solutions for individuals and businesses. It also features cashback (Inter Shop), a dollar account, and a full ecosystem of financial services.',
        stack: ['react', 'typescript', 'nodejs'],
        period: 'February 2024 — October 2025',
        description:
          'Led frontend development focused on static, SEO-optimized pages, improving indexing and organic visibility. Created and evolved a React Design System with reusable, accessible, scalable components. Built a server-driven UI architecture, enabling internal users to create pages themselves. Set up a mentoring practice on the team, supporting the technical growth of junior developers.',
      },
      {
        role: 'Front-end Development Consultant',
        company: 'Thoughtworks',
        companyUrl: 'https://www.thoughtworks.com/pt-br/about-us',
        companySummary:
          'Thoughtworks is a global technology consultancy with more than 30 years of experience, present in 47 offices across 18 countries. It combines design, software engineering, and AI expertise to support digital transformation across industries.',
        stack: ['react', 'typescript', 'sass'],
        period: 'April 2021 — February 2024',
        description:
          'Consulting work on e-commerce web system development for large international retail stores.',
      },
      {
        role: 'Front-end Developer',
        company: 'Symplicity Corporation',
        companyUrl: 'https://www.symplicity.com/',
        companySummary:
          'Symplicity is a software platform built for universities, offering solutions for career services, residential life, student conduct, and recruiting. It focuses on simplifying campus operations and preparing students for the job market.',
        stack: ['angular', 'sass', 'javascript', 'php'],
        period: 'April 2019 — April 2021',
        description:
          "Development and maintenance of the company's systems, with emphasis on front-end and accessibility tasks.",
      },
      {
        role: 'Full-Stack Developer',
        company: 'BitX',
        companyUrl: 'https://bitx.com.br/whitelabel/',
        companySummary:
          'BitX is an innovation company offering ready-made whitelabel solutions for logistics and marketplace apps, letting businesses launch their own platforms without building from scratch. It focuses on cutting cost and time for companies expanding into e-commerce.',
        stack: ['android', 'java', 'kotlin', 'bootstrap', 'javascript', 'nodejs'],
        period: 'September 2018 — March 2019',
        description:
          'Development of Android app features and a web admin dashboard.',
      },
      {
        role: 'Full-Stack Developer',
        company: 'Órbita Consultoria e Sistemas',
        companyUrl: 'https://www.orbita.srv.br/',
        companySummary:
          'Órbita Tecnologia builds digital management solutions for the public sector, focused on transparency, agility, and automating municipal administrative processes. Its systems are already deployed across several Brazilian municipalities.',
        stack: ['bootstrap', 'javascript', 'php'],
        period: 'March 2018 — August 2018',
        description:
          'Development and maintenance of a web system for public administration.',
      },
      {
        role: 'Undergraduate Research Fellow',
        company: 'Universidade Federal do Pará',
        companyUrl: 'https://ufpa.br/',
        companySummary:
          'Universidade Federal do Pará (UFPA) is a Brazilian federal public university, a reference in teaching, research, and outreach in the Amazon region. It is a multi-campus institution offering undergraduate and graduate programs across many fields.',
        stack: ['android', 'java', 'kotlin'],
        period: 'August 2016 — March 2018',
        description:
          'Academic research in the Smart Cities field, producing scientific papers and an Android application.',
      },
      {
        role: 'Academic Researcher',
        company: 'Illinois Institute of Technology',
        companyUrl: 'https://www.iit.edu/',
        companySummary:
          'Illinois Institute of Technology (Illinois Tech) is a private research university in Chicago with a strong focus on technology and STEM fields. It offers 50+ undergraduate majors and 100+ industry-aligned graduate programs.',
        stack: ['android', 'java'],
        period: 'June 2016 — July 2016',
        description:
          'Research toward building an Android app to control a fleet of autonomous drones.',
      },
    ],
    education: [
      {
        degree: "Bachelor's, Computer Science",
        institution: 'Universidade Federal do Pará',
        period: '2013 — 2018',
      },
      {
        degree: "Bachelor's, Computer Science",
        institution: 'State University of New York at Fredonia',
        period: '2015 — 2016',
      },
    ],
    projects: [
      {
        name: 'Fashion e-commerce checkout',
        description:
          'About 6 months on the team responsible for the checkout flow of a large US clothing brand, focused on conversion and payment experience.',
        period: '~6 months',
        mockup: 'checkout',
        tags: ['E-commerce', 'Checkout', 'React'],
      },
      {
        name: 'Multi-brand product listing page',
        description:
          'Just under a year on the team responsible for the product listing page of the same fashion retailer, working on personalization across the group\'s 4 brands.',
        period: '~1 year',
        mockup: 'products',
        tags: ['E-commerce', 'Personalization', 'React'],
        // Must stay in sync with `base` in astro.config.mjs
        demoUrl: '/portfolio/en/products/',
      },
      {
        name: 'Catalog, search, and component library',
        description:
          "About a year and a half working directly on the product catalog and search engine of a financial super app's cashback marketplace, plus contributing to the component library used as the visual identity for its web products.",
        period: '~1.5 years',
        mockup: 'catalog',
        tags: ['Design System', 'Search', 'React'],
        // Must stay in sync with `base` in astro.config.mjs
        demoUrl: '/portfolio/en/design-system/',
      },
      {
        name: 'Public-sector management system',
        description:
          'Development and maintenance of a web system used by municipal governments to digitize administrative processes, tracking permit requests and issuing clearance certificates.',
        period: '~6 months',
        mockup: 'publicsector',
        tags: ['Public Sector', 'PHP', 'Bootstrap'],
      },
      {
        name: 'SEO-optimized pages',
        description:
          "Led development of a financial super app's SEO-optimized static pages, improving search engine indexing and organic visibility.",
        period: '~1.5 years',
        mockup: 'seo',
        tags: ['SEO', 'Static Site', 'React'],
        // Must stay in sync with `base` in astro.config.mjs
        demoUrl: '/portfolio/en/seo/',
      },
      {
        name: 'Urban mobility app',
        description:
          'Built features for a ride-sharing Android app at a mobility startup, including the map screen, route drawing, and ride requests.',
        period: '~6 months',
        mockup: 'rideshare',
        tags: ['Android', 'Kotlin', 'Mobility'],
      },
      {
        name: 'Server-Driven UI: JSON becomes interface',
        description:
          "Personal project reconstructing the Server-Driven UI concept from my time at Inter: a page interprets a JSON schema at build time and renders real UI using this portfolio's own embedded design system.",
        period: 'Personal project',
        mockup: 'sdui',
        tags: ['SDUI', 'JSON', 'Astro'],
        // Must stay in sync with `base` in astro.config.mjs
        demoUrl: '/portfolio/en/sdui/',
      },
    ],
  },
  es: {
    title: 'Desarrollador Web',
    location: 'Brasil',
    tagline: 'Construyendo interfaces web rápidas, accesibles y bien estructuradas.',
    summary:
      'Desarrollador de software con énfasis en productos para la Web (Front-end). Me gustan las tareas que implican arquitectura de software y estructuración/refactorización de código. Durante mi período académico participé en el programa Ciencia sin Fronteras en EE. UU., una experiencia que reforzó mi interés en proyectos que ayuden a las personas de forma constructiva. Siempre busco estar lo más cerca posible del cliente final, y tengo un perfil calificado para trabajar en equipo, presentar proyectos y apoyar el desarrollo de soluciones.',
    summaryShort:
      'Desarrollador de software con énfasis en productos para la Web (Front-end). Me gustan las tareas que implican arquitectura de software y estructuración/refactorización de código.',
    skills: [
      { key: 'react', label: 'React', size: 'lg' },
      { key: 'typescript', label: 'TypeScript', size: 'lg' },
      { key: 'nextjs', label: 'Next.js' },
      { key: 'javascript', label: 'JavaScript' },
      { key: 'angular', label: 'Angular / AngularJS' },
      { key: 'sass', label: 'CSS / SASS' },
      { key: 'design-systems', label: 'Design Systems', size: 'lg' },
      { key: 'sdui', label: 'Server-Driven UI' },
      { key: 'accessibility', label: 'Accesibilidad' },
      { key: 'seo', label: 'SEO' },
      { key: 'nodejs', label: 'Node.js', size: 'lg' },
      { key: 'git', label: 'Git' },
    ],
    experience: [
      {
        role: 'Desarrollador Front-end Sénior',
        company: 'HostGator América Latina',
        companyUrl: 'https://www.hostgator.com.br/sobre-a-hostgator',
        companySummary:
          'HostGator es una empresa de hosting web que ofrece desde alojamiento compartido hasta servidores dedicados y VPS. Atiende a más de 4,5 millones de clientes en todo el mundo, con el objetivo de ayudar a emprendedores a llevar sus ideas a internet.',
        stack: ['react', 'typescript', 'php'],
        period: 'octubre de 2025 — actualidad',
        description:
          'Parte del equipo de desarrollo de una nueva plataforma para gestionar agentes de IA. Aplicación de prácticas de desarrollo impulsadas por IA para acelerar la entrega de funcionalidades y mejorar la calidad del código. Definición de una arquitectura frontend escalable y fácil de mantener, alineada con el crecimiento del negocio. Colaboración con equipos multidisciplinarios en la definición de soluciones técnicas y la evolución del producto.',
      },
      {
        role: 'Desarrollador Sénior Frontend',
        company: 'Inter',
        companyUrl: 'https://inter.co/',
        companySummary:
          'Inter es una superapp financiera que ofrece cuenta digital gratuita, tarjeta de crédito, inversiones y soluciones para personas y empresas. Cuenta con cashback (Inter Shop), cuenta en dólares y un ecosistema completo de servicios financieros.',
        stack: ['react', 'typescript', 'nodejs'],
        period: 'febrero de 2024 — octubre de 2025',
        description:
          'Liderazgo en el desarrollo frontend enfocado en páginas estáticas optimizadas para SEO, mejorando la indexación y la visibilidad orgánica. Creación y evolución de un Design System en React, con componentes reutilizables, accesibles y escalables. Desarrollo de una arquitectura de UI orientada a servidor (Server-Driven UI), facilitando la creación de páginas por usuarios internos. Estructuración de una práctica de mentoría en el equipo, apoyando el desarrollo técnico de desarrolladores junior.',
      },
      {
        role: 'Consultor de Desarrollo Front-end',
        company: 'Thoughtworks',
        companyUrl: 'https://www.thoughtworks.com/pt-br/about-us',
        companySummary:
          'Thoughtworks es una consultora global de tecnología con más de 30 años de trayectoria, presente en 47 oficinas y 18 países. Combina experiencia en diseño, ingeniería de software e inteligencia artificial para apoyar la transformación digital de empresas de diversos sectores.',
        stack: ['react', 'typescript', 'sass'],
        period: 'abril de 2021 — febrero de 2024',
        description:
          'Consultoría en el desarrollo de sistemas web de comercio electrónico para grandes cadenas minoristas internacionales.',
      },
      {
        role: 'Desarrollador Front-end',
        company: 'Symplicity Corporation',
        companyUrl: 'https://www.symplicity.com/',
        companySummary:
          'Symplicity es una plataforma de software para universidades, con soluciones de servicios de carrera, vida residencial, conducta estudiantil y reclutamiento. Su objetivo es simplificar las operaciones del campus y preparar a los estudiantes para el mercado laboral.',
        stack: ['angular', 'sass', 'javascript', 'php'],
        period: 'abril de 2019 — abril de 2021',
        description:
          'Desarrollo y mantenimiento de los sistemas de la empresa, con énfasis en tareas de front-end y accesibilidad.',
      },
      {
        role: 'Desarrollador Full-Stack',
        company: 'BitX',
        companyUrl: 'https://bitx.com.br/whitelabel/',
        companySummary:
          'BitX es una empresa de innovación que ofrece soluciones whitelabel listas para logística y marketplace, permitiendo que los negocios lancen sus propias plataformas sin desarrollar desde cero. Se enfoca en reducir el costo y el tiempo de implementación para quienes quieren expandirse en el e-commerce.',
        stack: ['android', 'java', 'kotlin', 'bootstrap', 'javascript', 'nodejs'],
        period: 'septiembre de 2018 — marzo de 2019',
        description:
          'Desarrollo de funcionalidades para aplicaciones Android y panel administrativo web.',
      },
      {
        role: 'Desarrollador Full-Stack',
        company: 'Órbita Consultoria e Sistemas',
        companyUrl: 'https://www.orbita.srv.br/',
        companySummary:
          'Órbita Tecnología desarrolla soluciones de gestión digital para el sector público, con foco en transparencia, agilidad y automatización de procesos administrativos municipales. Sus sistemas ya están implementados en varios municipios brasileños.',
        stack: ['bootstrap', 'javascript', 'php'],
        period: 'marzo de 2018 — agosto de 2018',
        description:
          'Desarrollo y mantenimiento de un sistema web para la gestión pública.',
      },
      {
        role: 'Becario de Iniciación Científica',
        company: 'Universidade Federal do Pará',
        companyUrl: 'https://ufpa.br/',
        companySummary:
          'La Universidad Federal de Pará (UFPA) es una universidad pública federal brasileña, referente en enseñanza, investigación y extensión en la región amazónica. Es multicampus y ofrece carreras de grado y posgrado en diversas áreas del conocimiento.',
        stack: ['android', 'java', 'kotlin'],
        period: 'agosto de 2016 — marzo de 2018',
        description:
          'Investigación académica en el área de Ciudades Inteligentes, con producción de artículos científicos y desarrollo de una aplicación Android.',
      },
      {
        role: 'Investigador Académico',
        company: 'Illinois Institute of Technology',
        companyUrl: 'https://www.iit.edu/',
        companySummary:
          'El Illinois Institute of Technology (Illinois Tech) es una universidad de investigación privada en Chicago, con fuerte enfoque en tecnología y áreas STEM. Ofrece más de 50 carreras de grado y 100 programas de posgrado alineados con el mercado laboral.',
        stack: ['android', 'java'],
        period: 'junio de 2016 — julio de 2016',
        description:
          'Investigación para la construcción de una aplicación Android para controlar una flota de drones autónomos.',
      },
    ],
    education: [
      {
        degree: 'Licenciatura en Ciencias de la Computación',
        institution: 'Universidade Federal do Pará',
        period: '2013 — 2018',
      },
      {
        degree: 'Licenciatura en Ciencias de la Computación',
        institution: 'State University of New York at Fredonia',
        period: '2015 — 2016',
      },
    ],
    projects: [
      {
        name: 'Checkout de e-commerce de moda',
        description:
          'Cerca de 6 meses en el equipo responsable del flujo de finalización de compra de una gran marca de ropa de EE. UU., enfocado en conversión y experiencia de pago.',
        period: '~6 meses',
        mockup: 'checkout',
        tags: ['E-commerce', 'Checkout', 'React'],
      },
      {
        name: 'Página de productos multi-marca',
        description:
          'Casi un año en el equipo responsable de la página de presentación de productos de la misma cadena de moda, trabajando en personalización entre las 4 marcas del grupo.',
        period: '~1 año',
        mockup: 'products',
        tags: ['E-commerce', 'Personalización', 'React'],
        // Debe mantenerse en sync con `base` en astro.config.mjs
        demoUrl: '/portfolio/es/products/',
      },
      {
        name: 'Catálogo, búsqueda y biblioteca de componentes',
        description:
          'Cerca de un año y medio trabajando directamente en el catálogo de productos y los mecanismos de búsqueda del marketplace de cashback de una superapp financiera, además de colaborar en la construcción de la biblioteca de componentes usada como identidad visual de sus productos web.',
        period: '~1,5 años',
        mockup: 'catalog',
        tags: ['Design System', 'Búsqueda', 'React'],
        // Debe mantenerse en sync con `base` en astro.config.mjs
        demoUrl: '/portfolio/es/design-system/',
      },
      {
        name: 'Sistema de gestión para el sector público',
        description:
          'Desarrollo y mantenimiento de un sistema web usado por municipios para digitalizar trámites administrativos, con seguimiento de solicitudes y emisión de certificados.',
        period: '~6 meses',
        mockup: 'publicsector',
        tags: ['Sector Público', 'PHP', 'Bootstrap'],
      },
      {
        name: 'Páginas optimizadas para SEO',
        description:
          'Liderazgo en el desarrollo de páginas estáticas optimizadas para SEO de una superapp financiera, mejorando la indexación y la visibilidad orgánica en buscadores.',
        period: '~1,5 años',
        mockup: 'seo',
        tags: ['SEO', 'Static Site', 'React'],
        // Debe mantenerse en sync con `base` en astro.config.mjs
        demoUrl: '/portfolio/es/seo/',
      },
      {
        name: 'Aplicación de movilidad urbana',
        description:
          'Desarrollo de funcionalidades de una aplicación Android de viajes compartidos para una startup de movilidad, incluyendo pantalla de mapa, trazado de ruta y solicitud de viaje.',
        period: '~6 meses',
        mockup: 'rideshare',
        tags: ['Android', 'Kotlin', 'Movilidad'],
      },
      {
        name: 'Server-Driven UI: el JSON se vuelve interfaz',
        description:
          'Proyecto personal que reconstruye el concepto de Server-Driven UI explorado en Inter: una pantalla interpreta un schema JSON en tiempo de build y renderiza la interfaz real usando los componentes del design system embebido en este portafolio.',
        period: 'Proyecto personal',
        mockup: 'sdui',
        tags: ['SDUI', 'JSON', 'Astro'],
        // Debe mantenerse en sync con `base` en astro.config.mjs
        demoUrl: '/portfolio/es/sdui/',
      },
    ],
  },
};
