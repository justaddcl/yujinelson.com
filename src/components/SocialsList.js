import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, graphql } from 'gatsby';
import { colors, fonts, spacing } from './styles/theme';

const StyledSocialList = styled.ul`
  margin-top: ${spacing.s}rem;
  margin-bottom: ${spacing.s}rem;
  display: grid;
  row-gap: ${spacing.xxs}rem;

  li {
    display: grid;
    grid-template-columns: ${spacing.base}rem ${spacing.xxl}rem 1fr;
    grid-column-gap: ${spacing.base}rem;
    place-items: center start;
  }

  span {
    color: ${colors.grey[200]};
    font-family: ${fonts.family.proximaNova};

    &::after {
      display: inline-block;
      content: ': ';
      color: ${colors.grey[400]};
      margin-left: 4px;
    }
  }
`;

const SocialsList = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github
          twitter
          dribbble
          codepen
          lastfm
        }
      }
    }
  `);

  const { github, twitter, dribbble, codepen, lastfm } = data.site.siteMetadata;

  return (
    <StyledSocialList>
      <li>
        <FontAwesomeIcon icon={['fab', 'github']} />
        <span>GitHub</span>
        <a
          href={`https://github.com/${github}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="token--light-blue"
        >
          {github}
        </a>
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'codepen']} />
        <span>CodePen</span>
        <a
          href={`https://codepen.io/${codepen}`}
          target="_blank"
          rel="noopener noreferrer"
          className="token--light-blue"
        >
          {codepen}
        </a>
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'twitter']} />
        <span>Twitter</span>
        <a
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="token--light-blue"
        >
          @{twitter}
        </a>
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'dribbble']} />
        <span>Dribbble</span>
        <a
          href={`https://dribbble.com/${dribbble}`}
          target="_blank"
          rel="noopener noreferrer"
          className="token--light-blue"
        >
          {dribbble}
        </a>
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'lastfm']} />
        <span>LastFM</span>
        <a
          href={`https://www.last.fm/user/${lastfm}`}
          target="_blank"
          rel="noopener noreferrer"
          className="token--light-blue"
        >
          {lastfm}
        </a>
      </li>
    </StyledSocialList>
  );
};

export default SocialsList;
