import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Oleksandr Hordenko',
  description: "AI | Chatbot | Python | Data Science Specialist",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Oleksandr.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an <strong className="text-stone-100">AI specialist</strong> based in Ukrine, currently working
        at <strong className="text-stone-100">CreditApps</strong> helping build a modern booking system,chatbot with ChatGPT, ML and DL, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I enjoy plaing <strong className="text-stone-100">football</strong>,
        <strong className="text-stone-100">table tenis</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: './resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Professional and ambitious senior developer. Continually learning and exploring new processes. Experienced AI specialist and Python full stack developer with a background in Computational Linguistics and AI and over 8 years of professional experience solving high-level challenges of AI and Python to real-world challenges across different domains.`,
  aboutItems: [
    { label: 'Location', text: 'Ukrine, Velykyi Dalnyk', Icon: MapIcon },
    { label: 'Age', text: '30', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Ukrinian', Icon: FlagIcon },
    { label: 'Interests', text: 'Football, Table tenis, Reading book', Icon: SparklesIcon },
    { label: 'Study', text: 'Igor Sikorsky Kyiv Polytechnic Institute', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'CreditApps.com', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Ukrinian',
        level: 10,
      },
    ],
  },
  {
    name: 'Python Specialist',
    skills: [
      {
        name: 'Django',
        level: 9,
      },
      {
        name: 'Celery',
        level: 9,
      },
      {
        name: 'Flask',
        level: 8,
      },
    ],
  },
  {
    name: 'AI engineer',
    skills: [
      {
        name: 'Machine Learning',
        level: 9,
      },
      {
        name: 'Deep Learning',
        level: 8,
      },
      {
        name: 'Modeling',
        level: 8,
      },
    ],
  },
  {
    name: 'Chatbot Specialist',
    skills: [
      {
        name: 'ChatGPT',
        level: 9,
      },
      {
        name: 'Prompt',
        level: 9,
      },
      {
        name: 'Voice Model',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Editing essay automatically',
    description: 'It enables editing of essays on the website and automatically detects grammar, spelling, and logical errors in essays through AI technology.',
    url: 'https://www.adlyceum.com/',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Booking chatbot',
    description: 'Developing automatically booking by chatbot',
    url: 'https://www.browardmotorsportsftlauderdale.com/--credit-application',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'AI Recruiter',
    description: 'I developed the AI recruiter that achieve the roll of recruiter automatically.',
    url: 'https://www.bluebixinc.com/',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Newsflow Summarize',
    description: 'Summrizing the contents of news according to its main story.',
    url: 'https://newsflow.io/user/dashboard',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2011 - May 2016,',
    location: 'Ukraine,Kyiv',
    title: 'Computer Science',
    content: <p>I have learned a lot in the field of <strong>computer science</strong>.Moreover, while developing several large projects during college, I developed a deep understanding of <strong>machine learning</strong>, <strong>deep learning</strong>, <strong>and chatbots</strong>.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2020 - December 2023,',
    location: 'Skydio(San Mateo, USA)',
    title: 'Chatbot Specialist',
    content: (
      <p>
        - Designing and developing AI chatbots from scratch including HR and booking automation system.<br />
        - Research on intent detection and named entity recognition approaches for chatbots.<br />
        - Giving consultations and recommendations on chatbot development. healthcare chatbot, mental health chatbot, financial assistant and etc..
      </p>
    ),
  },
  {
    date: 'September 2018 - May 2020,',
    location: 'HyperAI(Amsterdam, Netherlands)',
    title: 'AI Engineer',
    content: (
      <p>
        - Developed and implemented AI algorithms and models to solve complex problems, resulting in a 25% improvement in accuracy and efficiency of data analysis.<br />
        - Designed and developed an AI-based web application that increased user engagement by 30% and reduced customer churn by 20%.<br />
        - Researched and analyzed data to identify trends and patterns, leading to the development of a predictive model that improved sales forecasting accuracy by 15%.
      </p>
    ),
  },
  {
    date: 'September 2016 - July 2018,',
    location: "ELIFTECH(L'viv, Ukraine)",
    title: 'Python Specialist',
    content: (
      <p>
        - Demonstrated ability to design and enhance robust, scalable, secure, and globalized web-based applications to ensure continuity of all business processes and customer satisfaction.<br />
        - Obtained adequate experience in using Python to develop 3 web-based data retrieval systems. Performed data entry and clerical work to complete a project, delivering it before due.<br />
        - Efficiently performed and conducted a descriptive and multivariate statistical analysis of data.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Alexis Tomayo',
      text: 'Perfect!. Oleksandr is the best developer I have ever seen.He always responds quickly and delivers high quality results on time.I will continue to work with him in the future.',
      image: '',
    },
    {
      name: 'Hasham MHS',
      text: 'I feel satisfied with his results. He is kind and honest. Moreover, I think he achieved perfect functionality in the project. I would work with him again. Thanks Oleksandr.',
      image: '',
    },
    {
      name: 'Bob Bobby',
      text: 'Thanks Olek. He delivered the best project to me. Thank you very much. Good luck!',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Hear is my contact address.',
  items: [
    {
      type: ContactType.Email,
      text: 'oleksandrhordenko@gmail.com',
      href: 'mailto:oleksandrhordenko@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'Olek.H',
      href: 'https://github.com/Winner960111',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/Winner960111' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/oleksandr-hordenko-1750822ba/' },
];
