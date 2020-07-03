import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from '../components/Head';
import ContentContainer from '../components/styles/ContentContainer';
import { colors, fonts, mq, spacing } from '../components/styles/theme';
import { H1, H2, H3 } from '../components/styles/headers';
import P from '../components/styles/Text';
import Button from '../components/styles/Button';
import ExperienceCard from '../components/ExperienceCard';
import ExperienceTag from '../components/ExperienceTag';
import ContactCard from '../components/ContactCard';

const AboutPage = styled(ContentContainer)``;

const SkillsList = styled.dl`
  dt {
    color: ${colors.blue[400]};
    font-size: ${spacing.s}rem;
    margin-bottom: ${spacing.base}rem;
  }

  dd {
    font-family: ${fonts.family.sourceCodePro};
    margin-left: ${spacing.base}rem;
    margin-bottom: ${spacing.m}rem;
    line-height: ${spacing.s};

    ul {
      display: grid;
      row-gap: ${spacing.xxs}rem;
    }
  }
`;

const About = ({ data }) => {
  return (
    <AboutPage>
      <Head pageTitle="About me" />
      <section className="hero">
        <H1>My story</H1>
        <P>
          I’m Yuji, a front-end developer and user experience designer,
          originally from Seattle, WA, who now works and lives in Austin, TX.
        </P>
      </section>
      <Img fluid={data.headshot.childImageSharp.fluid} />
      <section>
        <P>
          From watching my dad work on computers when I was a kid, I cultivated
          a passion and curiosity for technology which led me to teach myself
          how to code in middle school. Though I ended up studying Business
          Information Systems, I wanted to use my coding skills to build
          products and found my niche in front-end development.
        </P>
        <H3>Starting out</H3>
        <P>
          I started my career at Boeing as a web developer and was given the
          opportunity to redesign an enterprise website on mobile
          communications. Through this project, I updated the front-end
          framework and rebuilt the user interface to help employees locate and
          consume critical content. While the overhaul led to increased user
          engagement and fewer help desk calls, the biggest impact for me was on
          a personal level. It showed me the power of understanding the user and
          how employing thoughtful design and well-written code could solve real
          needs.
        </P>
        <P>
          Over the last few years, I’ve continued to use these skills in the
          corporate world, but through personal projects, I’ve been able to more
          fully express my passion for front-end development and UX. Whether,
          it’s building a landing page for work, or an app on the side for my
          church to help coordinate events, I’m always looking for ways to
          improve and deliver my best work yet.{' '}
        </P>
        <H3>At the end of the day</H3>
        <P>
          While I love what I do, I know life is more than just work and I make
          time to recharge my passion and creativity through some fun and
          relaxation. Outside of work, you can find me playing board games with
          friends, watching Marvel movies with my wife, listening to a Mitch
          Rapp audiobook, or occasionally DJing a wedding.
        </P>
        <Link to="/contact">
          <Button as="span">
            Get in touch{' '}
            <FontAwesomeIcon icon="arrow-right" className="icon--right" />
          </Button>
        </Link>
      </section>
      <section>
        <H2>Current role</H2>
        <ExperienceCard
          startDate="03/17"
          rolePrimary="Front-end Developer"
          roleSecondary="Magpul"
          logo={data.magpulLogo}
          roleTeam="Marketing"
          location="Austin, TX"
          tags={['dev', 'ux', 'ecommerce']}
        />
        <Link to="/resume">
          <Button as="span">
            See resume{' '}
            <FontAwesomeIcon icon="arrow-right" className="icon--right" />
          </Button>
        </Link>
      </section>
      <section>
        <H2>Skills</H2>
        <SkillsList>
          <dt>Languages</dt>
          <dd>
            <ul>
              <li>Javascript (ES6)</li>
              <li>CSS / Sass / Less / Styled Components</li>
              <li>HTML / Pug</li>
              <li>GraphQL</li>
            </ul>
          </dd>
          <dt>Frameworks</dt>
          <dd>
            <ul>
              <li>React</li>
              <li>Gatsby</li>
              <li>Prisma</li>
              <li>Apollo</li>
              <li>Ruby on Rails</li>
              <li>Bootstrap</li>
            </ul>
          </dd>
          <dt>Tools</dt>
          <dd>
            <ul>
              <li>Git / GitHub</li>
              <li>ESLint / Prettier</li>
              <li>Chrome / Firefox Dev Tools</li>
              <li>Jest</li>
              <li>Postman</li>
            </ul>
          </dd>
          <dt>Design</dt>
          <dd>
            <ul>
              <li>Adobe XD, Illustrator, Photoshop</li>
              <li>Mobile-First Responsive Design</li>
              <li>User Interface & Experience</li>
              <li>Prototyping</li>
            </ul>
          </dd>
        </SkillsList>
        <Link to="/resume">
          <Button as="span">
            See resume{' '}
            <FontAwesomeIcon icon="arrow-right" className="icon--right" />
          </Button>
        </Link>
      </section>
      <ContactCard />
    </AboutPage>
  );
};

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
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
  }
`;

export default About;
