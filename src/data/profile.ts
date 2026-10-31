/**
 * Every value in this file is transcribed from the source CV
 * (CV_badia_EN_2.pdf) and the social profiles embedded in it.
 * Nothing here is invented: if a technology or outcome was not in
 * the CV, it does not appear.
 */

export type IconName =
  | 'server'
  | 'layers'
  | 'database'
  | 'container'
  | 'network'
  | 'smartphone'
  | 'flask'

export const profile = {
  name: 'Mohamed Badii Bejaoui',
  firstName: 'Mohamed',
  lastName: 'Bejaoui',
  monogram: 'MB',
  roles: ['Software Engineer', 'Backend Developer', 'Full Stack Developer'],
  caption: 'Software Engineer · Backend · Full Stack',
  headline: 'Software Engineer building scalable digital experiences.',
  location: 'Tunis, Tunisia',
  email: 'bejaouib219@gmail.com',
  phone: '+216 26 847 872',
  phoneHref: 'tel:+21626847872',
  github: 'https://github.com/badiiii3',
  linkedin: 'https://www.linkedin.com/in/moahamed-badia-bejaoui/',
  githubHandle: 'badiiii3',
  linkedinHandle: 'moahamed-badia-bejaoui',
  cvFile: './Mohamed-Badii-Bejaoui-CV.pdf',
  portrait: './portrait.png',
  languages: ['Arabic', 'French', 'English'],
  availability: 'Available for opportunities',
} as const

export const about = {
  lead:
    'I build the kind of software that has to hold up when the real world pushes back on it — ' +
    'emergency dispatch floors, debt recovery workflows, healthcare logistics.',
  body: [
    'My degree is in Software Engineering and Information Systems, and I have spent the years ' +
      'since putting it to work on production systems rather than in theory. I started in test ' +
      'automation, learning to read a system from the outside before I was allowed to change it ' +
      'from the inside. That habit — understanding the whole flow before touching one part of it — ' +
      'is still how I work.',
    'At IFBW I worked inside Tactilia, a computer-aided dispatch platform where emergency services ' +
      'coordinate incidents in real time. I wrote the backend services behind incident management, ' +
      'resource allocation and unit tracking, and connected them with RabbitMQ so the services could ' +
      'talk to each other without blocking one another. Before that, at Addinn, I helped design a ' +
      'modular microservices architecture for debt recovery — Clean Architecture, CQRS with MediatR, ' +
      'and Camunda orchestrating the process across service boundaries.',
    'The pattern across all of it is the same: asynchronous, event-driven work, clean and maintainable ' +
      'code, databases designed to be trusted, and delivery pipelines that make shipping boring. I care ' +
      'about the unglamorous parts — tests, naming, contracts between services — because that is where ' +
      'software quietly becomes dependable.',
  ],
  facts: [
    { label: 'Discipline', value: 'Software Engineering & Information Systems' },
    { label: 'Current focus', value: 'Backend · Distributed systems' },
    { label: 'Approach', value: 'Clean code, maintainable architecture' },
    { label: 'Languages', value: 'Arabic · French · English' },
  ],
} as const

export type Experience = {
  company: string
  role: string
  context?: string
  period: string
  location: string
  summary: string
  bullets: string[]
  stack: string[]
  featured?: boolean
}

export const experience: Experience[] = [
  {
    company: 'IFBW',
    role: 'Full Stack Developer',
    context: 'Tactilia Project',
    period: 'Oct 2025 — Jul 2026',
    location: 'Tunis, Tunisia',
    summary:
      'Contributed to a microservices-based Computer-Aided Dispatch platform supporting emergency-service incident management and dispatching.',
    bullets: [
      'Developed backend REST APIs and business features for incident management, resource allocation, and real-time tracking of emergency units.',
      'Implemented asynchronous, event-driven communication between services using RabbitMQ to support operational workflows.',
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'RabbitMQ', 'PostgreSQL', 'Docker', 'Jenkins'],
    featured: true,
  },
  {
    company: 'Addinn',
    role: 'Full Stack Developer',
    context: 'Final Year Internship',
    period: 'Feb 2025 — Jul 2025',
    location: 'Tunis, Tunisia',
    summary:
      'Designed and implemented a modular microservices architecture to automate the debt recovery process.',
    bullets: [
      'Applied Clean Architecture and CQRS/MediatR patterns to structure backend services.',
      'Integrated Camunda to automate and orchestrate business processes across the application.',
      'Developed interactive dashboards for monitoring operational processes and decision support.',
    ],
    stack: ['.NET', 'C#', 'Angular', 'Keycloak', 'PostgreSQL', 'Docker', 'Camunda BPMN', 'REST APIs'],
    featured: true,
  },
  {
    company: 'ST2I',
    role: 'Software Engineer Intern',
    period: 'Jun 2024 — Aug 2024',
    location: 'Les Berges du Lac, Tunisia',
    summary:
      'Developed backend services using Spring Boot for distributed application workflows and database management.',
    bullets: [
      'Implemented data synchronization and consistency mechanisms across decentralized database components.',
    ],
    stack: ['Docker', 'MySQL', 'Spring Boot', 'RabbitMQ'],
  },
  {
    company: 'ST2I',
    role: 'Software Engineer Intern',
    period: 'Jul 2023 — Aug 2023',
    location: 'Les Berges du Lac, Tunisia',
    summary:
      'Designed and developed an online registration web application for scholarship management.',
    bullets: [
      'Implemented a multi-actor system with two user roles.',
      'Developed secure REST APIs for backend–frontend communication.',
    ],
    stack: ['Spring Boot', 'Angular', 'MySQL'],
  },
  {
    company: 'DropSell',
    role: 'Full Stack Developer',
    context: 'Freelance',
    period: 'Jan 2023 — Mar 2023',
    location: 'Tunis, Tunisia',
    summary:
      'Developed dynamic frontend components and integrated them with backend services and REST APIs.',
    bullets: [
      'Optimized performance and improved user experience.',
      'Connected mobile frontends to Spring Boot services backed by PostgreSQL.',
    ],
    stack: ['Spring Boot', 'Ionic', 'PostgreSQL', 'Bitbucket'],
  },
  {
    company: 'QualityBox',
    role: 'Software Tester',
    context: 'Final Year Internship',
    period: 'Feb 2022 — Jun 2022',
    location: 'Tunis, Tunisia',
    summary:
      'Developed an automated functional testing solution for a mobile e-commerce application.',
    bullets: [
      'Automated end-to-end workflows covering navigation, search, cart, checkout, and payment processes.',
      'Integrated automated tests into CI/CD pipelines using Jenkins and GitLab and analyzed test results to improve software reliability.',
    ],
    stack: [
      'Robot Framework',
      'Appium',
      'Selenium',
      'TestRail',
      'Jenkins',
      'Sauce Labs',
      'BrowserStack',
      'GitLab',
    ],
  },
]

export type SkillCategory = {
  id: string
  title: string
  icon: IconName
  focus: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: 'server',
    focus: 'Service design, REST contracts and clean layering.',
    items: [
      'Java',
      'Spring Boot',
      'C#',
      'ASP.NET Core',
      'REST APIs',
      'Microservices',
      'Clean Architecture',
      'CQRS / MediatR',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layers',
    focus: 'Typed, component-driven interfaces that stay maintainable.',
    items: ['Angular', 'TypeScript', 'JavaScript', 'React.js', 'HTML', 'CSS'],
  },
  {
    id: 'data',
    title: 'Databases',
    icon: 'database',
    focus: 'Schema design and reliable data integration.',
    items: ['PostgreSQL', 'MySQL', 'SQL', 'MongoDB', 'Database design'],
  },
  {
    id: 'devops',
    title: 'DevOps & Delivery',
    icon: 'container',
    focus: 'Containers, pipelines and reproducible releases.',
    items: ['Docker', 'Jenkins', 'GitLab CI', 'Git', 'Bitbucket', 'CI/CD'],
  },
  {
    id: 'architecture',
    title: 'Messaging & Architecture',
    icon: 'network',
    focus: 'Loose coupling across service boundaries.',
    items: [
      'RabbitMQ',
      'Distributed systems',
      'Event-driven architecture',
      'Camunda BPMN',
      'Keycloak',
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    icon: 'smartphone',
    focus: 'Cross-platform delivery on top of REST backends.',
    items: ['Ionic', 'Android'],
  },
  {
    id: 'quality',
    title: 'Test & Automation',
    icon: 'flask',
    focus: 'Automated functional coverage wired into delivery.',
    items: [
      'Robot Framework',
      'Appium',
      'Selenium',
      'TestRail',
      'Sauce Labs',
      'BrowserStack',
    ],
  },
]

export type Project = {
  id: string
  title: string
  kicker: string
  description: string
  challenges: string[]
  contribution: string[]
  stack: string[]
  context: string
  visual: 'dispatch' | 'pipeline' | 'board' | 'health'
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'tactilia',
    title: 'Tactilia',
    kicker: 'Computer-Aided Dispatch platform',
    context: 'IFBW · Professional',
    description:
      'A microservices-based computer-aided dispatch platform supporting emergency-service incident management and dispatching. It handles the full loop of an emergency: taking in an incident, allocating the right resources to it, and tracking emergency units in real time as they move.',
    challenges: [
      'Coordinating incident state across independent services without one service blocking another during a live emergency.',
      'Keeping real-time unit tracking consistent while units are re-assigned mid-incident.',
      'Designing resource allocation rules that stay predictable under operational pressure.',
    ],
    contribution: [
      'Developed the backend REST APIs and business features behind incident management, resource allocation and real-time tracking of emergency units.',
      'Implemented asynchronous, event-driven communication between services using RabbitMQ to support operational workflows.',
      'Built the Angular and TypeScript frontends against those APIs.',
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'RabbitMQ', 'PostgreSQL', 'Docker', 'Jenkins'],
    visual: 'dispatch',
    featured: true,
  },
  {
    id: 'debt-collection',
    title: 'Debt Recovery Platform',
    kicker: 'Automated collection management system',
    context: 'Addinn · Professional',
    description:
      'A modular microservices architecture that automates the debt recovery process end to end. Business processes are modelled and orchestrated across service boundaries, with operational dashboards giving decision support to the teams running them.',
    challenges: [
      'Structuring a debt recovery workflow so it stays readable as the number of steps and actors grew.',
      'Orchestrating long-running business processes across multiple services without coupling them together.',
      'Securing service-to-service and user access consistently across the estate.',
    ],
    contribution: [
      'Designed and implemented the modular microservices architecture that automates the debt recovery process.',
      'Applied Clean Architecture and CQRS/MediatR patterns to structure the backend services.',
      'Integrated Camunda to automate and orchestrate business processes across the application.',
      'Developed interactive dashboards for monitoring operational processes and decision support.',
    ],
    stack: ['.NET', 'C#', 'Angular', 'Keycloak', 'PostgreSQL', 'Docker', 'Camunda BPMN', 'REST APIs'],
    visual: 'pipeline',
    featured: true,
  },
  {
    id: 'workbridge',
    title: 'WorkBridge',
    kicker: 'Recruitment platform',
    context: 'Personal project',
    description:
      'A dynamic online platform connecting freelancers and employers, streamlining the recruitment process from job search through to collaboration.',
    challenges: [
      'Matching job postings to freelancer profiles without burying the recruiter in noise.',
      'Keeping communication between two very different user types in one coherent workflow.',
    ],
    contribution: [
      'Simplified recruitment through a centralized and intuitive platform.',
      'Enhanced freelancer–employer interaction via integrated communication tools.',
      'Built efficient job–profile matching using an intelligent search engine.',
    ],
    stack: ['Angular', 'Spring Boot', 'Bootstrap', 'MySQL'],
    visual: 'board',
  },
  {
    id: 'medibridge',
    title: 'MediBridge',
    kicker: 'Medical services and delivery platform',
    context: 'Personal project',
    description:
      'A digital platform connecting patients, doctors and delivery agents to improve access to healthcare and medication delivery — appointments, teleconsultations and medication ordering in one place.',
    challenges: [
      'Serving patients, healthcare professionals and delivery agents from a single, consistent domain model.',
      'Making medication delivery trackable end to end so patients know where their order is.',
    ],
    contribution: [
      'Allowed patients to book appointments, access teleconsultations and order medications online.',
      'Provided healthcare professionals with tools to manage services and patient interactions.',
      'Integrated a fast and secure delivery tracking system.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    visual: 'health',
  },
]

export type Education = {
  school: string
  degree: string
  period: string
  detail: string
  kind: 'degree' | 'language' | 'practice'
}

export const education: Education[] = [
  {
    school: 'TEK-UP University',
    degree: 'Engineering Degree — Software Engineering & Information Systems (GLSI)',
    period: '2022 — 2025',
    detail: 'Tunis, Tunisia',
    kind: 'degree',
  },
  {
    school: 'University of Sciences of Bizerte',
    degree: "Bachelor's Degree — Software Engineering & Information Systems (GLSI)",
    period: '2019 — 2022',
    detail: 'Tunis, Tunisia',
    kind: 'degree',
  },
  {
    school: 'Languages',
    degree: 'Arabic · French · English',
    period: 'Professional working proficiency',
    detail: 'Used daily across code reviews, documentation and client-facing delivery.',
    kind: 'language',
  },
  {
    school: 'Engineering practices',
    degree: 'Clean Architecture · CQRS · Event-driven design · CI/CD · Automated testing',
    period: 'Applied in production',
    detail: 'Practices drawn from the IFBW, Addinn and QualityBox engagements.',
    kind: 'practice',
  },
]

export const contactCopy = {
  headline: 'Have a project or opportunity in mind?',
  body: "I'm always interested in connecting with people, exploring new challenges, and contributing to meaningful software projects.",
} as const

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const
