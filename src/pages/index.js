import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mq, spacing } from '../components/styles/theme';
import { H1, H2 } from '../components/styles/headers';
import Hero from '../components/Hero';
import P from '../components/styles/Text';
import Head from '../components/Head';
import ContentContainer from '../components/styles/ContentContainer';
import Greeting from '../components/Greeting';
import Button from '../components/styles/Button';
import ExperienceCard from '../components/ExperienceCard';

const HomePage = styled(ContentContainer)`
  .hero > p {
    line-height: ${spacing.s}rem;
  }
`;

const ButtonContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: -${spacing.xxs}rem;

  & > * {
    margin: ${spacing.xxs}rem;
  }

  @media screen and (min-width: ${mq.desktop.small}) {
    flex-direction: row;
    margin: -${spacing.base}rem;

    & > * {
      margin: ${spacing.base}rem;
    }
  }
`;

const Home = ({ data }) => {
  return (
    <HomePage>
      <Head />
      <Hero>
        <Greeting />
        <H1>I'm Yuji Nelson.</H1>
        <P>
          A front-end developer and user experience (UX) designer with a knack
          for business and marketing strategy.
        </P>
        <Img
          fluid={data.portrait.childImageSharp.fluid}
          className="hero-image"
        />
      </Hero>
      <section id="intro">
        <H2>Introduction</H2>
        <P>
          I design and build mobile-first, responsive websites and web apps
          using modern HTML, CSS, and JavaScript. As a developer, I love solving
          puzzles and constantly look for ways to better apply my code and
          deliver a better product. As a designer, my passion lies in delivering
          intuitive and delightful experiences through well crafted, beautiful
          design. Currently, I work at Magpul in Austin, TX.
        </P>
        <Link to="/about">
          <Button as="span">
            Read my story{' '}
            <FontAwesomeIcon icon="arrow-right" className="icon--right" />
          </Button>
        </Link>
      </section>
      <section id="experience">
        <H2>Experience</H2>
        <ExperienceCard
          startDate="03/17"
          rolePrimary="Front-end Developer"
          roleSecondary="Magpul"
          logo={data.magpulLogo}
          roleTeam="Marketing"
          location="Austin, TX"
          tags={['dev', 'ux', 'ecommerce']}
        />
        <ExperienceCard
          startDate="07/16"
          endDate="06/17"
          rolePrimary="Company Name"
          roleSecondary="Lorem ipsum dolor sit amet rotation program"
          logo={data.boeingLogo}
          location="Bellevue, WA"
          roles={[
            {
              title: 'Position Title',
              team: 'Enterprise Communications',
              startDate: '07/16',
              endDate: '06/17',
            },
            {
              title: 'Position Title',
              team: 'Enterprise Communications',
              startDate: '07/16',
              endDate: '06/17',
            },
            {
              title: 'Position Title',
              team: 'Enterprise Communications',
              startDate: '07/16',
              endDate: '06/17',
            },
          ]}
          tags={['dev', 'ux']}
        />
        <ButtonContainer>
          <li>
            <Link to="/resume">
              <Button as="span">
                See resume{' '}
                <FontAwesomeIcon icon="arrow-right" className="icon--right" />
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/about#skills">
              <Button as="span">
                My skillset{' '}
                <FontAwesomeIcon icon="arrow-right" className="icon--right" />
              </Button>
            </Link>
          </li>
        </ButtonContainer>
      </section>
    </HomePage>
  );
};

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
