import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { colors } from './styles/theme';

const SocialMediaGrid = styled.div`
  display: grid;
  font-size: 24px;
  grid-gap: 24px;
  grid-template-columns: repeat(6, 24px);

  a {
    color: ${colors.grey[200]};
  }
`;

const SocialMediaIcons = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github
          linkedin
          twitter
          dribbble
          codepen
          lastfm
        }
      }
    }
  `);

  const {
    github,
    linkedin,
    twitter,
    dribbble,
    codepen,
    lastfm,
  } = data.site.siteMetadata;

  return (
    <SocialMediaGrid>
      <a href={`https://github.com/${github}/`}>
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a href={`https://www.linkedin.com/in/${linkedin}/`}>
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
      <a href={`https://twitter.com/${twitter}`}>
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
      <a href={`https://dribbble.com/${dribbble}`}>
        <FontAwesomeIcon icon={['fab', 'dribbble']} />
      </a>
      <a href={`https://codepen.io/${codepen}`}>
        <FontAwesomeIcon icon={['fab', 'codepen']} />
      </a>
      <a href={`https://www.last.fm/user/${lastfm}`}>
        <FontAwesomeIcon icon={['fab', 'lastfm']} />
      </a>
    </SocialMediaGrid>
  );
};

export default SocialMediaIcons;
