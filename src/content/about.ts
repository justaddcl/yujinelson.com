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
        "Over the last few years, I've continued to use these skills in the corporate world, but through personal projects, I've been able to more fully express my passion for front-end development and UX. Whether, it's building a landing page for work, or an app on the side for my church to help coordinate events, I'm always looking for ways to improve and deliver my best work yet.",
      ],
    },
    {
      id: 'outside-work',
      heading: 'At the end of the day',
      paragraphs: [
        'While I love what I do, I know life is more than just work and I make time to recharge my passion and creativity through some fun and relaxation. Outside of work, you can find me playing football with friends, try-harding at Smash Ultimate or Dominion, watching Marvel movies with my wife, listening to a sci-fi or fantasy audiobook, or occasionally DJing a wedding.',
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
        id: 'languages',
        heading: 'Languages',
        items: ['JavaScript (ES6+)', 'TypeScript', 'CSS', 'HTML'],
      },
      {
        id: 'frameworks',
        heading: 'Frameworks',
        items: [
          'React',
          'Next.js',
          'Gatsby',
          'Node.js',
          'Styled Components / CSS modules',
        ],
      },
      {
        id: 'tools',
        heading: 'Tools',
        items: [
          'Git / GitHub',
          'React Testing Library',
          'Jest',
          'Storybook',
          'CI / CD',
          'AWS / GCP',
        ],
      },
      {
        id: 'design',
        heading: 'Design',
        items: [
          'Figma / Adobe XD',
          'Adobe Creative Suite',
          'Mobile-First Responsive Design',
          'User Interface & Experience',
          'Prototyping',
        ],
      },
    ],
    resumeLabel: 'See resume',
  },
};

export default aboutContent;
