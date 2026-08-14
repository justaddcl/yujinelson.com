export type DateRange = {
  start: string;
  end: string | null;
};

export type ExperienceRole = DateRange & {
  title: string;
  team: string;
};

export type Experience = {
  roleId: string;
  company: string;
  role: string;
  location: string;
  dates: DateRange;
  summary: string;
  classification?: string;
  logo?: string;
  team?: string;
  companyFirst?: boolean;
  roles?: ExperienceRole[];
  bullets?: string[];
};

const experience: Experience[] = [
  {
    roleId: 'cleo',
    company: 'Cleo',
    role: 'Software Engineer',
    location: 'London, UK',
    dates: {
      start: '04/2024',
      end: null,
    },
    summary:
      "Contributing to an in-progress rebuild of Cleo's consumer-finance web experience, with a focus on reusable, responsive interfaces.",
    classification: 'software-engineering',
    logo: 'cleoLogo',
  },
  {
    roleId: 'teya',
    company: 'Teya',
    role: 'Software Engineer',
    location: 'London, UK',
    dates: {
      start: '10/2022',
      end: '03/2024',
    },
    summary:
      'Built and refined merchant-facing payments experiences, with an emphasis on frontend quality, documentation, and collaborative delivery.',
    classification: 'software-engineering',
    logo: 'teyaLogo',
  },
  {
    roleId: 'duffel',
    company: 'Duffel',
    role: 'Software engineer',
    location: 'London, UK',
    dates: {
      start: '11/2021',
      end: '09/2022',
    },
    summary:
      "Delivered customer-facing discovery, search, and loyalty experiences for Duffel's Next.js app, including Meilisearch-powered order search, a multi-step checkout flow, and a feed-style homepage for product education.",
    classification: 'software-engineering',
    logo: 'duffelLogo',
    team: 'UX Products',
    bullets: [
      'Built a site-wide, text-based search using Meilisearch and TypeScript to enable customers to quickly find an order on the Duffel Next.js web application',
      'Developed new loyalty programmes feature for multi-step search and checkout process with Formik and TypeScript',
      'Implemented a feed-style homepage for the Duffel Next.js web application to educate users about the product as well as highlight new product features',
    ],
  },
  {
    roleId: 'magpul',
    company: 'Magpul',
    role: 'Front-end Web Developer',
    location: 'Austin, TX',
    dates: {
      start: '09/2017',
      end: '05/2021',
    },
    summary:
      "Led front-end development and UX delivery for Magpul's B2B and B2C ecommerce websites.",
    classification: 'software-engineering',
    logo: 'magpulLogo',
    team: 'Marketing',
    bullets: [
      'Develop all Magpul business-to-business (B2B) and business-to-customer (B2C) website content and eCommerce activities',
      'Provide oversight, guidance, and act as subject matter expert to all implementation partners on user experience (UX) design and website development',
      'Collaborate with the marketing team for website innovation and wireframe design, to build responsive web pages',
      'Designed, developed and implemented new website and product pages using HTML, Less, CSS, JavaScript, and Adobe XD which resulted in increased customer engagement and product sales',
      'Created website style guide to drive interface consistency and maintain the integrity of the Magpul family of websites',
    ],
  },
  {
    roleId: 'boeing',
    company: 'Boeing',
    role: 'ITCFP Rotation Program',
    location: 'Bellevue, WA',
    dates: {
      start: '07/2014',
      end: '06/2017',
    },
    summary:
      'Delivered and redesigned critical, enterprise-wide internal websites across all three rotations, combining web strategy, user research, and front-end development.',
    classification: 'software-engineering',
    logo: 'boeingLogo',
    companyFirst: true,
    roles: [
      {
        title: 'Web Developer',
        team: 'Unified Communications',
        start: '06/2016',
        end: '06/2017',
      },
      {
        title: 'Web Developer',
        team: 'PC Hardware',
        start: '06/2015',
        end: '06/2016',
      },
      {
        title: 'Web Developer',
        team: 'Enterprise Mobility',
        start: '07/2014',
        end: '06/2015',
      },
    ],
  },
];

export default experience;
