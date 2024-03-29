import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, fonts, mq, spacing } from './styles/theme';
import Container from './styles/Container';
import { CurrentYear } from './CurrentYear';
import SocialMediaIcons from './SocialMediaIcons';
import Logo from './Logo';
import ResumeLink from './ResumeLink';

const StyledFooter = styled.footer`
  background-color: ${colors.purple[900]};

  .logo {
    justify-self: start;
  }

  .nav {
    display: grid;
    grid-auto-flow: row;
    gap: ${spacing.base}rem;

    @media screen and (min-width: ${mq.desktop.small}) {
      justify-self: center;
      grid-auto-flow: column;
      gap: ${spacing.xl}rem;
    }

    & a {
      color: ${colors.grey[200]};
      font-family: ${fonts.family.sourceCodePro};
      font-size: ${spacing.basePx}px;
      letter-spacing: 0.05em;

      & .icon {
        color: ${colors.grey[300]};
      }
    }
  }

  [class*='SocialMediaIcons'] {
    @media screen and (min-width: ${mq.desktop.small}) {
      justify-self: end;
    }
  }

  .small {
    font-size: 12px;
    text-transform: uppercase;
  }

  .made-in {
    font-size: 14px;
    margin-bottom: ${spacing.l}rem;

    @media screen and (min-width: ${mq.desktop.small}) {
      margin-bottom: 0;
      order: 2;
    }

    & .icon {
      font-size: 12px;
    }
  }

  .copyright {
    margin-bottom: ${spacing.base}rem;

    @media screen and (min-width: ${mq.desktop.small}) {
      margin-bottom: 0;
      order: 1;
    }
  }

  .motto {
    @media screen and (min-width: ${mq.desktop.small}) {
      margin-bottom: 0;
      order: 3;
    }
  }
`;

const FooterContainer = styled(Container)`
  display: grid;
  padding-top: 80px;
  padding-bottom: 80px;
  gap: ${spacing.l}rem;

  .primary,
  .secondary {
    display: grid;

    @media screen and (min-width: ${mq.desktop.small}) {
      grid-auto-flow: column;

      justify-content: space-between;
    }
  }

  .primary {
    gap: ${spacing.l}rem;

    @media screen and (min-width: ${mq.desktop.small}) {
      grid-template-columns: 1fr 2fr 1fr;
      align-items: center;
    }
  }

  .secondary {
    color: ${colors.grey[300]};
    @media screen and (min-width: ${mq.desktop.small}) {
      align-items: flex-end;
    }
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
        <div className="primary">
          <Link to="/" className="logo">
            <Logo />
          </Link>
          <ul className="nav">
            <li className="nav__item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav__item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav__item">
              <ResumeLink />
            </li>
          </ul>
          <SocialMediaIcons />
        </div>
        <div className="secondary">
          <div className="made-in">
            <span>Made with </span>
            <span className="icon">
              <FontAwesomeIcon icon="heart" />
            </span>
            <span> in Reading, UK.</span>
          </div>
          <span className="small copyright">
            ©<CurrentYear /> {data.site.siteMetadata.author}.
          </span>
          <span className="small motto">Soli deo gloria</span>
        </div>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
