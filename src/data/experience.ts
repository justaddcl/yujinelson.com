export type ExperienceDateRange = {
  start: string;
  end: string | null;
};

export type ExperienceRole = {
  title: string;
  team: string;
  startDate: string;
  endDate: string | null;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  dates: ExperienceDateRange;
  summary: string | null;
  classification?: string;
  detailPageDestination?: string | null;
  logo: string;
  team?: string;
  companyFirst?: boolean;
  roles?: ExperienceRole[];
  tags: string[];
  bullets?: string[];
};

const experience: Experience[] = [
  {
    id: 'duffel',
    company: 'Duffel',
    role: 'Software engineer',
    location: 'London, UK',
    dates: {
      start: '11/2021',
      end: '09/2022',
    },
    summary: null,
    classification: 'software-engineering',
    detailPageDestination: null,
    logo: 'duffelLogo',
    team: 'UX Products',
    tags: ['dev'],
    bullets: [
      'Built a site-wide, text-based search using Meilisearch and TypeScript to enable customers to quickly find an order on the Duffel Next.js web application',
      'Developed new loyalty programmes feature for multi-step search and checkout process with Formik and TypeScript',
      'Implemented a feed-style homepage for the Duffel Next.js web application to educate users about the product as well as highlight new product features',
    ],
  },
  {
    id: 'magpul',
    company: 'Magpul',
    role: 'Front-end Web Developer',
    location: 'Austin, TX',
    dates: {
      start: '09/2017',
      end: '05/2021',
    },
    summary: null,
    classification: 'software-engineering',
    detailPageDestination: null,
    logo: 'magpulLogo',
    team: 'Marketing',
    tags: ['dev', 'ux', 'ecommerce'],
    bullets: [
      'Develop all Magpul business-to-business (B2B) and business-to-customer (B2C) website content and eCommerce activities',
      'Provide oversight, guidance, and act as subject matter expert to all implementation partners on user experience (UX) design and website development',
      'Collaborate with the marketing team for website innovation and wireframe design, to build responsive web pages',
      'Designed, developed and implemented new website and product pages using HTML, Less, CSS, JavaScript, and Adobe XD which resulted in increased customer engagement and product sales',
      'Created website style guide to drive interface consistency and maintain the integrity of the Magpul family of websites',
    ],
  },
  {
    id: 'boeing',
    company: 'Boeing',
    role: 'ITCFP Rotation Program',
    location: 'Bellevue, WA',
    dates: {
      start: '07/2014',
      end: '06/2017',
    },
    summary: null,
    classification: 'software-engineering',
    detailPageDestination: null,
    logo: 'boeingLogo',
    companyFirst: true,
    roles: [
      {
        title: 'Web Developer',
        team: 'Unified Communications',
        startDate: '06/2016',
        endDate: '06/2017',
      },
      {
        title: 'Web Developer',
        team: 'PC Hardware',
        startDate: '06/2015',
        endDate: '06/2016',
      },
      {
        title: 'Web Developer',
        team: 'Enterprise Communications',
        startDate: '07/2014',
        endDate: '06/2015',
      },
    ],
    tags: ['dev', 'ux'],
  },
];

export default experience;
