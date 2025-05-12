import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/projects/efortlex.png',
    title: 'Efortlex',
    description:
      'Developed a Students Disputes Service feature to help ensure tenants—especially students—have a voice and can live peacefully in our listed apartments. Understanding the importance of conflict resolution, I designed and implemented a system that allows users to easily report issues and receive timely support, aligning with our commitment to tenant wellbeing.',
    technologies: [
      'Responsive Design',
      'e-commerce',
      'Javascript',
      'HTML5',
      'CSS3',
      'PHP',
      'MySql',
    ],
    links: {
      repo: 'https://github.com/Okwoli-Godwin/New-Efortlex',
      preview: 'https://efortlex2-0-fgu87rev2-professional-service.vercel.app/',
    },
  },
  {
    image: '/projects/ecoBINlogo.png',
    title: 'ecoBIN',
    description:
      'Developed ecoBin, a innovative web application designed to promote sustainable waste management practices by facilitating proper waste disposal and recycling. The platform offers a user-friendly dashboard for residents to request waste pickup, fostering a cleaner and healthier environment.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind',
      'Redux',
      'Tanstack',
      'cloudflare',
    ],
    links: {
      repo: 'https://github.com/isaacetor/',
      preview: 'https://ecobin.pages.dev',
    },
  },
  {
    image: '/projects/ambu.png',
    title: 'Ambucare',
    description:
      'Worked on the Mobile application of ambucare, an innovative mobile application designed to allow individual book ride to any hospital of their choice',
    technologies: ['React Native', 'TypeScript', 'Tailwind', 'Redux Toolkit', 'Tanstack'],
    links: {
      repo: '#',
      preview: '',
    },
  },
  {
    image: '/projects/log.png',
    title: 'LifeLine',
    description:
      'Designed and develop a dynamic, mobile application for LifeLine, an application that connects wholesalers and pharmarcy for the selling of medicines',
    technologies: [
      'React Native',
      'Typescript',
      'Tailwind'
    ],
    links: {
      repo: '#',
      preview: '',
    },
  },
  {
    image: '/projects/kao.png',
    title: 'Kao Stores',
    description:
      'Designed and develop a dynamic, user-friendly e-commerce website for stores.',
    technologies: [
      'Responsive Design',
      'Javascript',
      'HTML5',
      'CSS3',
      'PHP',
      'MySql',
    ],
    links: {
      repo: '#',
      preview: 'https://main-kao.netlify.app/',
    },
  },
  {
    image: '/projects/jennifermaleghemi_logo.png',
    title: 'JenniferMaleghemi',
    description:
      ' Designed and developed a website that offers various services like consultation, event planning, charity foundation and a store where people can purchase items',
    technologies: [
      'Responsive Design',
      'e-commerce',
      'Javascript',
      'HTML5',
      'CSS3',
      'PHP',
      'MySql',
      'WordPress',
    ],
    links: {
      repo: '#',
      preview: 'https://www.jennifermaleghemi.com/',
    },
  },

  {
    image: '/projects/JM_FOUNDATION_LOGO.jpg',
    title: 'JenniferMaleghemi Foundation',
    description:
      'Developed and designed a charity foundation website with features for events, showcasing some of their causes, a gallery and a page for accepting donation. ',
    technologies: [
      'Responsive Design',
      'Wordpress',
      'Jquery',
      'Javascript',
      'HTML5',
      'CSS3',
      'PHP',
      'MySql',
    ],
    links: {
      repo: '#',
      preview:  
      'https://www.jennifermaleghemiheartofchangecharityfoundation.com/',
    },
  },
  {
    image: '/projects/Mavericks.ico',
    title: 'Mavericks',
    description:
      'Developed a comprehensive gift card marketplace platform, catering to two distinct user types: Business Owners and Shoppers. The platform enables businesses to create and manage gift cards, while shoppers can purchase and utilize them as a convenient payment method.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind',
      'Redux',
      'PWA',
      'Node.JS',
    ],
    links: {
      repo: 'https://github.com/isaacetor/Mavericks-frontend',
      preview: 'https://mavericks-frontend.pages.dev/',
    },
  },
  // {
  //   image: '/projects/honey-hair_closet-logo-1.ico',
  //   title: 'HoneyHairCloset',
  //   description:
  //     'An ecommerce store for a hair brand passionate about providing beautiful wigs and styling products to empower women in the bid to expressing themselves with their respective signature looks.',
  //   technologies: [
  //     'Responsive Design',
  //     'e-commerce',
  //     'Javascript',
  //     'HTML5',
  //     'CSS3',
  //     'PHP',
  //     'MySql',
  //   ],
  //   links: {
  //     repo: '#',
  //     preview: 'https://www.honeyhaircloset.com/',
  //   },
  // },
] as const;

export const experiencesData = [
  {
    title: 'Mobile Developer',
    location: 'Ambucare',
    description:
      ' I focused on two key areas: Building Application, managing application content, plugins, and settings. and Acting as their mobile developer consultant',
    date: '2025 - present',
  },
  {
    title: 'Mobile Developer',
    location: 'KeyRetail Group',
    description:
      'I focused on revamping all the company application, building new websites, managing website content, optimisations, added new features to existing websites.',
    date: '2025 - present',
  },
  {
    title: 'UI/UX and Front-end Development Instructor',
    location: 'Techagon',
    description:
      'During my stay at Techagon, I Taught UI/UX and front-end development courses, including Figma, HTML, CSS, JavaScript, and React, to students of varying skill levels.',
    date: 'March 2023 - Nov 2023',
  },
  {
    title: 'Front-end Development Instructor',
    location: 'CodeLab',
    description:
      'During my stay at Codelab, I Taught front-end development courses, including HTML, CSS, JavaScript, and React, to students of varying skill levels.',
    date: '2022 - August 2023',
  },
  {
    title: 'Freelancing',
    location: 'Remote',
    description:
      'As a freelancer, I specialized in graphic design using Canva, UI/UX using Figma, and website development using React.js and WordPress CMS. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
    date: '2019 - present',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.PWA className="size-16" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.Figma className="size-12" /> },
  { icon: <Icons.github className="size-12" /> },
  // { icon: <Icons.WordPress className="size-12" /> },
] as const;
