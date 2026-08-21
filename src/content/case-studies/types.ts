import type { IconLookup } from '@fortawesome/fontawesome-svg-core';

export type CaseStudyLink = {
  label: string;
  value: string;
  href: string;
  icon?: IconLookup;
  note?: string;
};

export type CaseStudyStackGroup = {
  label: string;
  value: string;
};

export type CaseStudySummary = {
  status: string;
  role: string;
  roleDetail?: string;
  dates: string;
  links: CaseStudyLink[];
  stack: CaseStudyStackGroup[];
};

export type CaseStudyBlock<TMediaId extends string> =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | {
      type: 'figure';
      media: TMediaId;
      alt: string;
      caption?: string;
      presentation?: 'wide' | 'phone';
    };

export type CaseStudySection<TMediaId extends string> = {
  id: string;
  title: string;
  blocks: CaseStudyBlock<TMediaId>[];
};

export type CaseStudyContent<TMediaId extends string> = {
  seo: {
    title: string;
    description: string;
  };
  title: string;
  introduction: string[];
  summary: CaseStudySummary;
  projectHeroImageAlt: string;
  sections: CaseStudySection<TMediaId>[];
};
