import React from 'react';
import styled from 'styled-components';
import theme from './styles/theme';

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

const Footer = () => (
  <StyledFooter>
  return (
    <StyledFooter>
      <FooterContainer>
        <span>Made with ❤️ in Austin, TX.</span>
        <span>Soli deo gloria</span>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
