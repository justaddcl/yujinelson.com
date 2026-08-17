import React from 'react';
import { Link, graphql, type PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { spacing } from '../components/styles/theme';
import { H1, H2 } from '../components/styles/headers';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
/**
 * TODO: create <Text> component that would include the style for paragraph
 * Currently, this violates the id-length eslint rule of < 2 characters
 */
import P from '../components/styles/Text';
import ContentContainer from '../components/styles/ContentContainer';
import Greeting from '../components/Greeting';
import ResumeLink from '../components/ResumeLink';
import ExperienceCard from '../components/ExperienceCard';
import experience, { type ExperienceLogoKey } from '../data/experience';
import type { GatsbyImageFile } from '../types/gatsby';

type HomePageData = {
  portrait: GatsbyImageFile;
} & Record<ExperienceLogoKey, GatsbyImageFile>;

const copy = {
  hero: 'Senior software engineer with 12+ years of experience building products across frontend applications, APIs and backend services.',
  introOne:
    "I'm a senior software engineer specialising in TypeScript and React, with experience across frontend applications, APIs and backend services. I take ambiguous product problems, shape the approach with Product and Design, and carry them through implementation, rollout and iteration.",
  introTwo:
    "Most recently at Cleo, I led A/B-tested fintech initiatives reaching millions of users, designed front-end architecture for a cross-squad US/UK rebuild, and used product data and customer feedback to guide improvements. Across my career, I've built products in fintech, travel, e-commerce and enterprise software, with a strong focus on craft, maintainability and user experience.",
  introCta: 'Read my story',
  portraitAlt: 'Yuji Nelson in Sapporo, Japan',
  resumeCta: 'See resume',
};

const HomePage = styled(ContentContainer)`
  .hero > p {
    line-height: ${spacing.s}rem;
  }

  .button--primary {
    margin-top: ${spacing.m}rem;
  }
`;

const Home: React.FC<PageProps<HomePageData>> = ({ data }) => (
  <HomePage>
    <SEO />
    <Hero>
      <Greeting />
      <H1>I&apos;m Yuji Nelson.</H1>
      <P>{copy.hero}</P>
      <GatsbyImage
        image={data.portrait.childImageSharp.gatsbyImageData}
        className="hero-image"
        alt={copy.portraitAlt}
      />
    </Hero>
    <section id="intro">
      <H2>Introduction</H2>
      <P>{copy.introOne}</P>
      <P>{copy.introTwo}</P>
      <Link to="/about" className="button button--primary">
        {copy.introCta}
        <FontAwesomeIcon icon="arrow-right" className="icon icon--right" />
      </Link>
    </section>
    <section id="experience">
      <H2>Experience</H2>
      {experience.map((entry) => (
        <ExperienceCard
          company={entry.company}
          companyFirst={entry.companyFirst}
          dates={entry.dates}
          key={entry.roleId}
          location={entry.location}
          logo={entry.logo ? data[entry.logo] : undefined}
          role={entry.role}
          roles={entry.roles}
          summary={entry.summary}
          team={entry.team}
        />
      ))}
      <ResumeLink button>
        {copy.resumeCta}
        <FontAwesomeIcon icon="arrow-right" className="icon icon--right" />
      </ResumeLink>
    </section>
  </HomePage>
);

export const query = graphql`
  {
    portrait: file(relativePath: { eq: "Moiwayama-portrait.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    cleoLogo: file(relativePath: { eq: "experience/cleo-logo-white.png" }) {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48, layout: FIXED)
      }
    }
    duffelLogo: file(relativePath: { eq: "experience/duffel-logo-white.png" }) {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48, layout: FIXED)
      }
    }
    magpulLogo: file(relativePath: { eq: "experience/magpul-logo-white.png" }) {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48, layout: FIXED)
      }
    }
    teyaLogo: file(relativePath: { eq: "experience/teya-logo-white.png" }) {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48, layout: FIXED)
      }
    }
    boeingLogo: file(relativePath: { eq: "experience/boeing-logo-white.png" }) {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48, layout: FIXED)
      }
    }
  }
`;

export default Home;
