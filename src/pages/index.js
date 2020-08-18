import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { spacing } from '../components/styles/theme';
import { H1, H2 } from '../components/styles/headers';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
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
      <H1>I'm Yuji Nelson.</H1>
      <P>
        A front-end developer and user experience (UX) designer with a knack for
        business and marketing strategy.
      </P>
      <Img fluid={data.portrait.childImageSharp.fluid} className="hero-image" />
    </Hero>
    <section id="intro">
      <H2>Introduction</H2>
      <P>
        I design and build mobile-first, responsive websites and web apps using
        modern HTML, CSS, and JavaScript. As a developer, I love solving puzzles
        and constantly look for ways to better apply my code and deliver a
        better product. As a designer, my passion lies in delivering intuitive
        and delightful experiences through well crafted, beautiful design.
        Currently, I work at Magpul in Austin, TX.
      </P>
      <Link to="/about" className="button button--primary">
        Read my story{' '}
        <FontAwesomeIcon icon="arrow-right" className="icon icon--right" />
      </Link>
    </section>
    <section id="experience">
      <H2>Experience</H2>
      <ExperienceCard
        startDate={experience.magpul.startDate}
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
  query {
    portrait: file(relativePath: { eq: "Moiwayama-portrait.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    magpulLogo: file(relativePath: { eq: "experience/magpul-logo-white.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    boeingLogo: file(relativePath: { eq: "experience/boeing-logo-white.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Home;
