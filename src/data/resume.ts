export type Lang = 'pt' | 'en';

export const profile = {
  name: 'Kaê Uchôa Sarmanho',
  email: 'kaeuchoas@gmail.com',
  links: {
    github: 'https://github.com/kaeuchoa',
    linkedin: 'https://www.linkedin.com/in/kaeuchoa',
  },
};

export interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  companySummary?: string;
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
  url?: string;
  repo?: string;
  tags: string[];
}

export interface ResumeContent {
  title: string;
  location: string;
  tagline: string;
  summary: string;
  summaryShort: string;
  skills: string[];
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
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Angular / AngularJS',
      'CSS / SASS',
      'Design Systems',
      'Server-Driven UI',
      'Acessibilidade',
      'SEO',
      'Node.js',
      'Git',
    ],
    experience: [
      {
        role: 'Desenvolvedor Front-end Sênior',
        company: 'HostGator América Latina',
        companyUrl: 'https://www.hostgator.com.br/sobre-a-hostgator',
        companySummary:
          'A HostGator é uma empresa de hospedagem de sites, com soluções que vão de hospedagem compartilhada a servidores dedicados e VPS. Atende mais de 4,5 milhões de clientes globalmente, com foco em ajudar empreendedores a tirar suas ideias do papel e ganhar presença digital.',
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
        period: 'fevereiro de 2024 — outubro de 2025',
        description:
          'Liderança no desenvolvimento frontend com foco em páginas estáticas otimizadas para SEO, melhorando indexação e visibilidade orgânica. Criação e evolução de um Design System em React, com componentes reutilizáveis, acessíveis e escaláveis. Desenvolvimento de uma arquitetura de UI orientada a servidor (Server-Driven UI), facilitando a criação de páginas por usuários internos. Estruturação de uma prática de mentoria no time, apoiando o desenvolvimento técnico de pessoas desenvolvedoras juniores.',
      },
      {
        role: 'Consultor de Desenvolvimento Front-end',
        company: 'Thoughtworks',
        companyUrl: 'https://www.thoughtworks.com/pt-br/about-us',
        period: 'abril de 2021 — fevereiro de 2024',
        description:
          'Consultoria em desenvolvimento de sistemas web de e-commerce para grandes redes de varejo internacionais. Stack: React, TypeScript, CSS/SASS.',
      },
      {
        role: 'Desenvolvedor de Front-end',
        company: 'Symplicity Corporation',
        companyUrl: 'https://www.symplicity.com/',
        period: 'abril de 2019 — abril de 2021',
        description:
          'Desenvolvimento e manutenção dos sistemas da empresa com ênfase em tarefas de front-end e acessibilidade. Stack: Angular, AngularJS, CSS/SASS, JavaScript; back-end em PHP.',
      },
      {
        role: 'Desenvolvedor Full-Stack',
        company: 'BitX',
        companyUrl: 'https://bitx.com.br/whitelabel/',
        period: 'setembro de 2018 — março de 2019',
        description:
          'Desenvolvimento de tarefas relacionadas a aplicativos Android e painel administrativo web. Stack: Android Nativo (Java/Kotlin) com geolocalização e integração com Maps, Bootstrap/JavaScript no front-end, Node.js no back-end.',
      },
      {
        role: 'Desenvolvedor Full-Stack',
        company: 'Órbita Consultoria e Sistemas',
        companyUrl: 'https://www.orbita.srv.br/',
        period: 'março de 2018 — agosto de 2018',
        description:
          'Desenvolvimento e manutenção de sistema web para gestão pública. Stack: Bootstrap 3/AdminLTE e JavaScript no front-end, PHP CodeIgniter (base legada) no back-end.',
      },
      {
        role: 'Bolsista em Iniciação Científica',
        company: 'Universidade Federal do Pará',
        companyUrl: 'https://ufpa.br/',
        period: 'agosto de 2016 — março de 2018',
        description:
          'Pesquisa acadêmica na área de Cidades Inteligentes, produção de artigos científicos e desenvolvimento de aplicativo Android. Tecnologias: Android Nativo (Java/Kotlin), integração com APIs de terceiros, geolocalização e mapas.',
      },
      {
        role: 'Pesquisador Acadêmico',
        company: 'Illinois Institute of Technology',
        companyUrl: 'https://www.iit.edu/',
        period: 'junho de 2016 — julho de 2016',
        description:
          'Pesquisa para construção de aplicativo Android para controle de uma frota de drones autônomos. Tecnologias: Android nativo (Java), integração com API, geolocalização.',
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
    projects: [],
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
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Angular / AngularJS',
      'CSS / SASS',
      'Design Systems',
      'Server-Driven UI',
      'Accessibility',
      'SEO',
      'Node.js',
      'Git',
    ],
    experience: [
      {
        role: 'Senior Front-end Developer',
        company: 'HostGator América Latina',
        companyUrl: 'https://www.hostgator.com.br/sobre-a-hostgator',
        companySummary:
          'HostGator is a web hosting company offering everything from shared hosting to dedicated servers and VPS. It serves more than 4.5 million customers worldwide, focused on helping entrepreneurs bring their ideas online.',
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
        period: 'February 2024 — October 2025',
        description:
          'Led frontend development focused on static, SEO-optimized pages, improving indexing and organic visibility. Created and evolved a React Design System with reusable, accessible, scalable components. Built a server-driven UI architecture, enabling internal users to create pages themselves. Set up a mentoring practice on the team, supporting the technical growth of junior developers.',
      },
      {
        role: 'Front-end Development Consultant',
        company: 'Thoughtworks',
        companyUrl: 'https://www.thoughtworks.com/pt-br/about-us',
        period: 'April 2021 — February 2024',
        description:
          'Consulting work on e-commerce web system development for large international retail stores. Stack: React, TypeScript, CSS/SASS.',
      },
      {
        role: 'Front-end Developer',
        company: 'Symplicity Corporation',
        companyUrl: 'https://www.symplicity.com/',
        period: 'April 2019 — April 2021',
        description:
          "Development and maintenance of the company's systems, with emphasis on front-end and accessibility tasks. Stack: Angular, AngularJS, CSS/SASS, JavaScript; PHP back-end.",
      },
      {
        role: 'Full-Stack Developer',
        company: 'BitX',
        companyUrl: 'https://bitx.com.br/whitelabel/',
        period: 'September 2018 — March 2019',
        description:
          'Development of Android app features and a web admin dashboard. Stack: Native Android (Java/Kotlin) with geolocation and Maps integration, Bootstrap/JavaScript front-end, Node.js back-end.',
      },
      {
        role: 'Full-Stack Developer',
        company: 'Órbita Consultoria e Sistemas',
        companyUrl: 'https://www.orbita.srv.br/',
        period: 'March 2018 — August 2018',
        description:
          'Development and maintenance of a web system for public administration. Stack: Bootstrap 3/AdminLTE and JavaScript front-end, PHP CodeIgniter (legacy codebase) back-end.',
      },
      {
        role: 'Undergraduate Research Fellow',
        company: 'Universidade Federal do Pará',
        companyUrl: 'https://ufpa.br/',
        period: 'August 2016 — March 2018',
        description:
          'Academic research in the Smart Cities field, producing scientific papers and an Android application. Technologies: Native Android (Java/Kotlin), third-party API integration, geolocation and maps.',
      },
      {
        role: 'Academic Researcher',
        company: 'Illinois Institute of Technology',
        companyUrl: 'https://www.iit.edu/',
        period: 'June 2016 — July 2016',
        description:
          'Research toward building an Android app to control a fleet of autonomous drones. Technologies: Native Android (Java), API integration, geolocation.',
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
    projects: [],
  },
};
