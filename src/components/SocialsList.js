import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { colors, fonts, spacing } from './styles/theme';

const StyledSocialList = styled.dl`
  margin-top: ${spacing.s}rem;
  margin-bottom: ${spacing.s}rem;
  display: grid;
  grid-template-columns: ${spacing.xxl}rem 1fr;
  column-gap: ${spacing.base}rem;

  dt {
    color: ${colors.grey[200]};
    font-family: ${fonts.family.proximaNova};

    &::after {
      display: inline-block;
      content: ': ';
      color: ${colors.grey[400]};
    }
  }
`;

const SocialsList = () => {
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
    <StyledSocialList>
      <dt>GitHub</dt>
      <dd>
        <a
          href={`https://github.com/${github}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="token--light-blue"
        >
          {github}
        </a>
      </dd>
      <dt>CodePen</dt>
      <dd>
        <a
          href={`https://codepen.io/${codepen}`}
          target="_blank"
          rel="noopener noreferrer"
          className="token--light-blue"
        >
          {codepen}
        </a>
      </dd>
      <dt>Dribbble</dt>
      <dd>
        <a
          href={`https://dribbble.com/${dribbble}`}
          target="_blank"
          rel="noopener noreferrer"
          className="token--light-blue"
        >
          {dribbble}
        </a>
      </dd>
      <dt>LastFM</dt>
      <dd>
        <a
          href={`https://www.last.fm/user/${lastfm}`}
          target="_blank"
          rel="noopener noreferrer"
          className="token--light-blue"
        >
          {lastfm}
        </a>
      </dd>
      <dt>Twitter</dt>
      <dd>
        <a
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="token--light-blue"
        >
          @{twitter}
        </a>
      </dd>
    </StyledSocialList>
  );
};

export default SocialsList;
