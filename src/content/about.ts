import experience, { type Experience } from '../data/experience';

type ContentLink = {
  href: string;
  label: string;
};

type StorySection = {
  id: string;
  heading?: string;
  paragraphs: string[];
};

type SkillGroup = {
  id: string;
  heading: string;
  items: string[];
};

type AboutPageContent = {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    heading: string;
    introduction: string;
    imageAlt: string;
  };
  story: StorySection[];
  storyAction: ContentLink;
  experience: {
    heading: string;
    featured: Experience;
    resumeLabel: string;
  };
  skills: {
    heading: string;
    groups: SkillGroup[];
    resumeLabel: string;
  };
};

const featuredExperience =
  experience.find(({ dates }) => dates.end === null) || experience[0];

if (!featuredExperience) {
  throw new Error('The About page requires at least one experience entry.');
}

const aboutContent: AboutPageContent = {
  seo: {
    title: 'About me',
    description:
      'Learn about Yuji Nelson, a senior software engineer in Reading, UK, his career in product engineering, and the skills he brings to his work.',
  },
  hero: {
    heading: 'My story',
    introduction: "I'm Yuji, a senior software engineer based in Reading, UK.",
    imageAlt: 'Yuji Nelson',
  },
  story: [
    {
      id: 'origin',
      paragraphs: [
        'From watching my dad work on computers when I was a kid, I cultivated a passion and curiosity for technology which led me to teach myself how to code in middle school. Though I ended up studying Business Information Systems, I wanted to use my coding skills to build products and found my niche in front-end development.',
      ],
    },
    {
      id: 'starting-out',
      heading: 'Starting out',
      paragraphs: [
        'I started my career at Boeing as a web developer and was given the opportunity to redesign an enterprise website on mobile communications. Through this project, I updated the front-end framework and rebuilt the user interface to help employees locate and consume critical content. While the overhaul led to increased user engagement and fewer help desk calls, the biggest impact for me was on a personal level. It showed me the power of understanding the user and how employing thoughtful design and well-written code could solve real needs.',
        "Since then, I've continued building products across fintech, travel, and e-commerce, partnering with Product, Design, and Data in cross-functional teams. I've led initiatives, shaped cross-team architectures, and worked across the stack to solve complex product problems. Outside of work, I use side projects to sharpen my skills, experiment with new technologies and ideas, and explore different parts of the product-building process. Recently, I've been building Sanbi as a chance to work full-stack, wear many hats, and have fun building a user-tested solution to a problem a friend brought to me.",
      ],
    },
    {
      id: 'outside-work',
      heading: 'At the end of the day',
      paragraphs: [
        'While I love what I do, I know life is more than just work, and I make time to relax and recharge. Outside of work, you can find me working through a never-ending collection of photos waiting to be edited, playing golf, supporting LFC (YNWA), try-harding at board games with friends, listening to a sci-fi or action audiobook, or occasionally DJing a wedding.',
      ],
    },
  ],
  storyAction: {
    href: '/contact',
    label: 'Contact me',
  },
  experience: {
    heading: 'My most recent role',
    featured: featuredExperience,
    resumeLabel: 'See resume',
  },
  skills: {
    heading: 'Skills',
    groups: [
      {
        id: 'frontend',
        heading: 'Frontend',
        items: [
          'TypeScript',
          'React',
          'React Native',
          'Next.js',
          'TanStack Query (React Query)',
          'Redux / Redux Saga',
          'React Testing Library',
          'Jest',
          'shadcn/ui',
          'Storybook',
          'HTML',
          'Tailwind CSS',
          'CSS',
        ],
      },
      {
        id: 'apisAndBackend',
        heading: 'APIs & Backend',
        items: [
          'GraphQL',
          'Node.js',
          'tRPC',
          'TypeSpec/OpenAPI',
          'PostgreSQL',
          'Drizzle ORM',
        ],
      },
      {
        id: 'productEngineering',
        heading: 'Product Engineering',
        items: [
          'Feature leadership',
          'Cross-functional collaboration',
          'Technical discovery & planning',
          'A/B testing',
          'Session replay',
          'Customer feedback analysis',
          'Figma/prototyping',
        ],
      },
      {
        id: 'engineeringQuality',
        heading: 'Engineering Quality',
        items: [
          'Thorough code review',
          'Automated testing & quality practices',
          'Technical documentation',
        ],
      },
      {
        id: 'aiAssistedEngineering',
        heading: 'AI-Assisted Engineering',
        items: [
          'Claude Code',
          'Codex',
          'Cursor',
          'Conductor',
          'AI code review workflows (CodeRabbit, Greptile)',
          'Agent skills & workflows',
        ],
      },
    ],
    resumeLabel: 'See resume',
  },
};

export default aboutContent;
