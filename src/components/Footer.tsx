import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  isAnalyticsConfigured,
  openAnalyticsConsentSettings,
} from '../analytics/posthog';
import { colors, fonts, mq, spacing } from './styles/theme';
import Container from './styles/Container';
import { CurrentYear } from './CurrentYear';
import SocialMediaIcons from './SocialMediaIcons';
import Logo from './Logo';
import ResumeLink from './ResumeLink';

const StyledFooter = styled.footer`
  background-color: ${colors.purple[900]};

  .logo {
    grid-area: logo;
    justify-self: start;

    @media screen and (min-width: ${mq.desktop.small}) {
      align-self: center;
    }
  }

  .nav {
    display: grid;
    grid-area: nav;
    grid-auto-flow: row;
    gap: ${spacing.base}rem;
    margin-top: ${spacing.l}rem;

    @media screen and (min-width: ${mq.desktop.small}) {
      align-self: center;
      margin-top: 0;
      grid-auto-flow: column;
      gap: ${spacing.xl}rem;
      justify-self: center;
    }

    & a,
    & button {
      background: none;
      border: 0;
      color: ${colors.grey[200]};
      cursor: pointer;
      font-family: ${fonts.family.sourceCodePro};
      font-size: ${spacing.basePx}px;
      letter-spacing: 0.05em;
      padding: 0;

      & .icon {
        color: ${colors.grey[300]};
      }
    }
  }

  .social {
    grid-area: social;
    margin-top: ${spacing.l}rem;

    @media screen and (min-width: ${mq.desktop.small}) {
      align-self: center;
      justify-self: end;
      margin-top: 0;
    }
  }

  .small {
    font-size: 12px;
    text-transform: uppercase;
  }

  .made-in {
    font-size: 14px;

    & .icon {
      font-size: 12px;
    }
  }

  .copyright {
    margin-top: ${spacing.base}rem;
  }

  .motto {
    color: ${colors.grey[300]};
    grid-area: motto;
    margin-top: ${spacing.base}rem;

    @media screen and (min-width: ${mq.desktop.small}) {
      justify-self: end;
      margin-top: 0;
    }
  }
`;

const FooterContainer = styled(Container)`
  display: grid;
  grid-template-areas:
    'logo'
    'nav'
    'privacy'
    'social'
    'location'
    'motto';
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: ${mq.desktop.small}) {
    align-items: start;
    gap: ${spacing.l}rem;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas:
      'logo nav social'
      'location privacy motto';
  }

  .location {
    color: ${colors.grey[300]};
    grid-area: location;
    margin-top: ${spacing.l}rem;

    @media screen and (min-width: ${mq.desktop.small}) {
      margin-top: 0;
    }
  }
`;

const PrivacyControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.l}rem;
  grid-area: privacy;
  margin-top: ${spacing.l}rem;

  a,
  button {
    background: none;
    border: 0;
    color: ${colors.grey[300]};
    cursor: pointer;
    font-family: ${fonts.family.sourceCodePro};
    font-size: 12px;
    padding: 0;
    text-transform: uppercase;
  }

  @media screen and (min-width: ${mq.desktop.small}) {
    justify-self: center;
    margin-top: 0;
  }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <StyledFooter>
      <FooterContainer>
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <ul className="nav">
          <li className="nav__item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav__item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav__item">
            <ResumeLink />
          </li>
        </ul>
        <PrivacyControls>
          <Link to="/privacy">Privacy</Link>
          {isAnalyticsConfigured && (
            <button type="button" onClick={openAnalyticsConsentSettings}>
              Cookie settings
            </button>
          )}
        </PrivacyControls>
        <div className="social">
          <SocialMediaIcons />
        </div>
        <div className="location">
          <div className="made-in">
            <span>Made with </span>
            <span className="icon">
              <FontAwesomeIcon icon="heart" />
            </span>
            <span> in Reading, UK.</span>
          </div>
          <div className="small copyright">
            ©<CurrentYear /> {data.site.siteMetadata.author}.
          </div>
        </div>
        <span className="small motto">Soli deo gloria</span>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
