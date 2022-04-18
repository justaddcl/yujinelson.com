import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { mq, spacing } from '../components/styles/theme';
import { H1 } from '../components/styles/headers';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import P from '../components/styles/Text';
import ContentContainer from '../components/styles/ContentContainer';

const FourOhFourPage = styled(ContentContainer)`
  #background-404 {
    opacity: 0.05;
    z-index: -1;
    position: absolute;
    place-self: center;
    font-weight: 700;
    font-size: ${spacing.huge}rem;

    @media screen and (min-width: ${mq.mobile.large}) {
      font-size: 32rem;
      place-self: start center;
    }
  }

  .hero > p {
    line-height: ${spacing.s}rem;
  }
`;

const FourOhFour = () => (
  <FourOhFourPage>
    <SEO />
    <div id="background-404">404</div>
    <Hero>
      <H1>Oh yikes!</H1>
      <P>
        It doesn&apos;t look like I have the page you&apos;re looking for
        (yet)...
      </P>
      <Link to="/" className="button button--primary">
        Go home
      </Link>
    </Hero>
  </FourOhFourPage>
);
export default FourOhFour;
