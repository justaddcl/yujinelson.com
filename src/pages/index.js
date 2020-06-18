import React from 'react';
import styled from 'styled-components';
import { colors, fonts, spacing } from '../components/styles/theme';
import { H1, H2 } from '../components/styles/headers';
import Head from '../components/Head';
import ContentContainer from '../components/styles/ContentContainer';
import Greeting from '../components/Greeting';
import ExperienceCard from '../components/ExperienceCard';
import ExperienceTag from '../components/ExperienceTag';

const HomePage = styled(ContentContainer)`
  display: grid;
  row-gap: ${spacing.xxl}rem;

  p {
    color: ${colors.grey[50]};
    font-family: ${fonts.family.sourceCodePro};
    line-height: ${spacing.m}rem;
  }

  .hero > p {
    line-height: ${spacing.s}rem;
  }
`;

const Home = () => {
  return (
    <HomePage>
      <Head />
      <section className="hero">
        <Greeting />
        <H1>I'm Yuji Nelson.</H1>
        <p>
          A front-end developer and user experience (UX) designer with a knack
          for business and marketing strategy.
        </p>
      </section>
      <img width="100%" height="247" src="" alt="" />
      <section id="intro">
        <H2>Introduction</H2>
        <p>
          I design and build mobile-first, responsive websites and web apps
          using modern HTML, CSS, and JavaScript. As a developer, I love solving
          puzzles and constantly look for ways to better apply my code and
          deliver a better product. As a designer, my passion lies in delivering
          intuitive and delightful experiences through well crafted, beautiful
          design. Currently, I work at Magpul in Austin, TX.
        </p>
      </section>
      <section id="experience">
        <H2>Experience</H2>
        <ExperienceCard
          startDate="03/17"
          rolePrimary="Front-end Developer"
          roleSecondary="Magpul"
          roleTeam="Marketing"
        >
          <ExperienceTag tag="dev" />
          <ExperienceTag tag="ux" />
          <ExperienceTag tag="ecommerce" />
        </ExperienceCard>
        <ExperienceCard
          startDate="07/16"
          endDate="06/17"
          rolePrimary="Company Name"
          roleSecondary="Lorem ipsum dolor sit amet rotation program"
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
        >
          <ExperienceTag tag="dev" />
          <ExperienceTag tag="ux" />
        </ExperienceCard>
      </section>
    </HomePage>
  );
};

export default Home;
