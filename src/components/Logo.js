import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { mq } from './styles/theme';

const StyledLogo = styled(Img)`
  height: 36px;
  width: 36px;

  @media screen and (min-width: ${mq.desktop.small}) {
    height: 48px;
    width: 48px;
  }
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 48) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <StyledLogo fluid={data.logo.childImageSharp.fluid} alt="Logo" />;
};

export default Logo;
