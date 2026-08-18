export type Project = {
  name: string;
  status: string;
  summary: string;
  detailPoints?: {
    title: string;
    description: string;
  }[];
  caseStudyUrl?: string;
};

const projectsContent = {
  seo: {
    title: 'Selected Projects',
    description: "Some things I've been building outside of work",
  },
  hero: {
    heading: 'Selected Projects',
    introduction: "Some things I've been building outside of work",
  },
  projects: [
    {
      name: 'Sanbi',
      status: 'Active development · V0',
      summary:
        "A mobile-first planning app for church worship leaders to build worship sets and manage a reusable song library. I started with user interviews, product definition and prototyping, and I'm taking it through full-stack implementation, testing and iteration.",
      detailPoints: [
        {
          title: 'Tech stack',
          description: 'Next.js, TypeScript, React, PostgreSQL',
        },
        {
          title: 'Current state',
          description:
            'Medium-fidelity V0 in progress, with the core song and set-management flows functional. Currently refining the library and dashboard UX',
        },
        {
          title: 'Role',
          description: 'Product design and full-stack engineering',
        },
      ],
      // TODO: add when YUJI-32 is implemented
      // caseStudyUrl: '/projects/sanbi',
    },
  ],
  projectActionLabel: 'View project case study',
};

export default projectsContent;
