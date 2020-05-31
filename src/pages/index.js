import React from 'react';
import styled from 'styled-components';
import { H1, H2 } from '../components/styles/headers';
import Head from '../components/Head';
import ContentContainer from '../components/styles/ContentContainer';
import Greeting from '../components/Greeting';
import { colors, fonts, spacing } from '../components/styles/theme';

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
      <img width="327" height="247" />
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
      </section>
    </HomePage>
  );
};

export default Home;
