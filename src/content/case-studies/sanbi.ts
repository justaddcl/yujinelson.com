import sanbiProject from '../project-profiles/sanbi';
import type { CaseStudyContent } from './types';

export type SanbiMediaId =
  | 'figmaAddSong'
  | 'desktopSetCreation'
  | 'mobileSetManagement';

const sanbiContent: CaseStudyContent<SanbiMediaId> = {
  seo: {
    title: 'Sanbi project',
    description:
      'How Yuji Nelson is designing and building Sanbi, a mobile-first worship set-planning app and working pre-v0 product.',
  },
  title: sanbiProject.title,
  introduction: sanbiProject.introduction,
  summary: {
    status: 'V0 in progress',
    role: 'Product design & full-stack engineering',
    roleDetail:
      'I’m designing and building Sanbi end to end, from early user interviews and product definition through prototyping, full-stack implementation, testing and iteration.',
    dates: '2022–present',
    links: [
      {
        label: 'Live app',
        value: 'sanbi.app',
        href: 'https://sanbi.app',
        note: 'Account required',
      },
      {
        label: 'Source',
        value: 'View source',
        href: 'https://github.com/justaddcl/sanbi',
        icon: 'github',
      },
    ],
    stack: [
      {
        label: 'Frontend',
        value:
          'Next.js, React, TypeScript, TanStack Query, Zustand, shadcn/ui, Tailwind CSS, Storybook',
      },
      { label: 'Auth', value: 'Clerk' },
      {
        label: 'Backend & data',
        value: 'Node.js, tRPC, Drizzle ORM, PostgreSQL',
      },
      { label: 'Testing & QA', value: 'Jest, Playwright, Chromatic' },
    ],
  },
  projectHeroImageAlt:
    'Planning a set in Sanbi, including sections, songs, keys and service-specific notes.',
  sections: [
    {
      id: 'the-problem',
      title: 'The problem',
      blocks: [
        {
          type: 'paragraph',
          text: 'Planning a worship set often means piecing together information from different places. It is difficult to remember what was played and when, find the right songs from an existing library, and keep details like keys or notes organised.',
        },
        {
          type: 'paragraph',
          text: 'I interviewed a worship leader to understand his current workflow and what would make planning easier.',
        },
        {
          type: 'paragraph',
          text: 'The biggest pain point was not creating a set itself. It was referencing and reusing information from previous weeks. Knowing what songs had been played, which keys worked well, and what notes existed for a particular song required manually searching through messages, apps and personal notes.',
        },
        {
          type: 'paragraph',
          text: 'The goal for Sanbi was to make creating new sets easier while building a useful song library over time.',
        },
      ],
    },
    {
      id: 'defining-v0',
      title: 'Defining V0',
      blocks: [
        {
          type: 'paragraph',
          text: 'The original idea for Sanbi covered a lot of possible features, including team collaboration, Spotify integrations and chord sheet tools.',
        },
        {
          type: 'paragraph',
          text: 'For V0, I focused on the core workflow for an individual worship leader:',
        },
        {
          type: 'list',
          items: [
            'Create and manage sets',
            'Add and organise songs',
            'Track song history, keys and notes',
            'Search and reuse songs when planning future services',
          ],
        },
        {
          type: 'paragraph',
          text: 'I deliberately avoided building one-off integrations too early. Instead of creating specific connections for Spotify, Google Docs or other resources, Sanbi uses a general resource model where users can attach relevant links. This keeps the workflow flexible without locking the product into specific services.',
        },
        {
          type: 'paragraph',
          text: 'Collaboration and richer team features can come later once the core planning workflow is working well.',
        },
      ],
    },
    {
      id: 'designing-and-building',
      title: 'Designing and building',
      blocks: [
        {
          type: 'paragraph',
          text: 'Before starting implementation, I prototyped the main flows in Figma and got feedback directly from the user on what worked and what didn’t.',
        },
        {
          type: 'paragraph',
          text: 'One example was adding a song to a set. The flow needed to capture useful context such as the key, section and notes for a specific service without adding unnecessary friction.',
        },
        {
          type: 'figure',
          media: 'figmaAddSong',
          alt: 'Figma prototype showing the flow for adding a song to a worship set.',
          caption:
            'Exploring how to add a song while keeping its set-specific context close at hand.',
        },
        {
          type: 'paragraph',
          text: 'The current V0 supports the main planning workflow across desktop and mobile. Users can create sets, add songs, organise sections, manage keys and capture notes.',
        },
        {
          type: 'figure',
          media: 'desktopSetCreation',
          alt: 'Desktop view of creating and managing a worship set in Sanbi.',
          caption: 'Creating and managing a set on desktop.',
        },
        {
          type: 'figure',
          media: 'mobileSetManagement',
          alt: 'Mobile view of managing a worship set in Sanbi.',
          caption: 'Managing a set on mobile.',
          presentation: 'phone',
        },
        {
          type: 'paragraph',
          text: 'The app uses a typed full-stack architecture with Next.js, React, TypeScript, tRPC and PostgreSQL. Shared types keep frontend and backend changes aligned, while automated tests cover key user flows as the project continues to evolve.',
        },
      ],
    },
    {
      id: 'current-state',
      title: 'Current state',
      blocks: [
        {
          type: 'paragraph',
          text: 'Sanbi is an ongoing project. The screenshots and workflows shown here represent the current V0 implementation and will continue to change as new features are added.',
        },
        {
          type: 'paragraph',
          text: 'The next focus areas are improving the dashboard experience, refining song and set discovery, and continuing to iterate on the UI based on usage.',
        },
      ],
    },
  ],
};

export default sanbiContent;
