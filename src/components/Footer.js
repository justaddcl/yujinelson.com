import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme, { colors, fonts, padding } from './styles/theme';
import ContentContainer from './styles/ContentContainer';
import CurrentYear from './CurrentYear';

const StyledFooter = styled.footer`
  border-top: solid 1px ${theme.colors.purple500};
  height: 32px;
`;

const FooterContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  text-transform: uppercase;
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
        <span>
          ©<CurrentYear /> {data.site.siteMetadata.author}.
        </span>
        <span>Made with ❤️ in Austin, TX.</span>
        <span>Soli deo gloria</span>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
