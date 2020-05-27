import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, fonts, mq, spacing } from './styles/theme';
import ContentContainer from './styles/ContentContainer';
import CurrentYear from './CurrentYear';
import SocialMediaIcons from './SocialMediaIcons';
import Logo from './Logo';

const StyledFooter = styled.footer`
  background-color: ${colors.purple[900]};

  .logo {
    justify-self: start;
  }

  .nav {
    &__item:not(:last-of-type) {
      margin-bottom: ${spacing.base}rem;
    }

    & a {
      color: ${colors.grey[200]};
      font-family: ${fonts.family.sourceCodePro};
      font-weight: 700;
      letter-spacing: 0.05em;

      & .icon {
        color: ${colors.grey[300]};
      }
    }
  }

  .made-in {
    font-size: 14px;

    & .icon {
      font-size: 12px;
    }
  }

  .copyright {
    p {
      color: ${colors.grey[300]};
      font-size: 12px;
      text-transform: uppercase;

      &:not(:last-of-type) {
        margin-bottom: 16px;
      }
    }
  }
`;

const FooterContainer = styled(ContentContainer)`
  display: grid;
  padding-top: 80px;
  padding-bottom: 80px;
  row-gap: ${spacing.l}rem;

  @media screen and (min-width: ${mq.desktop.small}) {
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
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
            <Link to="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/">
              <a>
                Download resume{' '}
                <FontAwesomeIcon icon="download" className="icon" />
              </a>
            </Link>
          </li>
        </ul>
        <SocialMediaIcons />
        <div className="made-in">
          <span>Made with </span>
          <span className="icon">
            <FontAwesomeIcon icon="heart" />
          </span>
          <span> in Austin, TX.</span>
        </div>
        <div className="copyright">
          <p>
            ©<CurrentYear /> {data.site.siteMetadata.author}.
          </p>
          <p>Soli deo gloria</p>
        </div>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
