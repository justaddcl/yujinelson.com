import React from 'react';
import { Link, graphql } from 'gatsby';
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
import experience from '../data/experience';

const HomePage = styled(ContentContainer)`
  .hero > p {
    line-height: ${spacing.s}rem;
  }
`;

const Home = ({ data }) => (
  <HomePage>
    <SEO />
    <Hero>
      <Greeting />
      <H1>I&apos;m Yuji Nelson.</H1>
      <P>
        A front-end software engineer with 8+ years of experience building and
        designing responsive user interfaces (UI) with a mobile-first approach.
      </P>
      <GatsbyImage
        image={data.portrait.childImageSharp.gatsbyImageData}
        className="hero-image"
      />
    </Hero>
    <section id="intro">
      <H2>Introduction</H2>
      <P>
        Proficient with modern JS (ES6+, React), TypeScript, HTML, and CSS,
        highly detail-oriented, and passionate about user-centred experience
        (UX) and design. As a developer, I love solving puzzles and constantly
        look for ways to better apply my code and deliver a better product. As a
        designer, my passion lies in delivering intuitive and delightful
        experiences through well crafted, beautiful design. Currently based in
        Reading, UK.
      </P>
      <Link to="/about" className="button button--primary">
        Read my story{' '}
        <FontAwesomeIcon icon="arrow-right" className="icon icon--right" />
      </Link>
    </section>
    <section id="experience">
      <H2>Experience</H2>
      <ExperienceCard
        startDate={experience.duffel.startDate}
        endDate={experience.duffel.endDate}
        rolePrimary={experience.duffel.primary}
        roleSecondary={experience.duffel.secondary}
        logo={data.duffelLogo}
        roleTeam={experience.duffel.team}
        location={experience.duffel.location}
        tags={experience.duffel.tags}
      />
      <ExperienceCard
        startDate={experience.magpul.startDate}
        endDate={experience.magpul.endDate}
        rolePrimary={experience.magpul.primary}
        roleSecondary={experience.magpul.secondary}
        logo={data.magpulLogo}
        roleTeam={experience.magpul.team}
        location={experience.magpul.location}
        tags={experience.magpul.tags}
      />
      <ExperienceCard
        startDate={experience.boeing.startDate}
        endDate={experience.boeing.endDate}
        rolePrimary={experience.boeing.primary}
        roleSecondary={experience.boeing.secondary}
        logo={data.boeingLogo}
        location={experience.boeing.location}
        roles={experience.boeing.roles}
        tags={experience.boeing.tags}
      />
      <ResumeLink button>
        See resume{' '}
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
    boeingLogo: file(relativePath: { eq: "experience/boeing-logo-white.png" }) {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48, layout: FIXED)
      }
    }
  }
`;

export default Home;
