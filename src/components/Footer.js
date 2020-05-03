import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme, { colors, fonts, mq, padding } from './styles/theme';
import ContentContainer from './styles/ContentContainer';
import CurrentYear from './CurrentYear';
import SocialMediaIcons from './SocialMediaIcons';

const StyledFooter = styled.footer`
  background-color: ${colors.purple[900]};
  padding: ${padding.mobile.medium} 0;

  p {
    color: ${colors.grey[500]};
    font-family: ${fonts.family.proximaNova};
    font-size: 12px;
    text-transform: uppercase;

    &:not(:last-of-type) {
      margin-bottom: 16px;

      @media screen and (min-width: ${mq.desktop.small}) {
        margin-bottom: 0;
      }
    }
  }
`;

const FooterContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;

  h3 {
    color: ${colors.blue[600]};
    font-family: ${fonts.family.proximaNova};
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${mq.desktop.small}) {
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ConnectSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  @media screen and (min-width: ${mq.desktop.small}) {
    margin-bottom: 0;
  }
`;

const StyledEmail = styled.span`
  color: ${colors.grey[400]};
  margin-bottom: 24px;

  @media screen and (min-width: ${mq.desktop.small}) {
    margin-bottom: 16px;
  }

  & .symbol {
    color: ${colors.blue[600]};
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
        <ConnectSection>
          <h3>Let&apos;s connect!</h3>
          <StyledEmail>
            hello<span className="symbol">@</span>yujinelson
            <span className="symbol">.com</span>
          </StyledEmail>
          <SocialMediaIcons />
        </ConnectSection>
        <p>
          ©<CurrentYear /> {data.site.siteMetadata.author}. Made with{' '}
          <FontAwesomeIcon icon="heart" /> in Austin, TX.
        </p>
        <p>Soli deo gloria</p>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
