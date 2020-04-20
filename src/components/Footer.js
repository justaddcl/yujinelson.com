import React from 'react';
import styled from 'styled-components';
import theme from './styles/theme';

const StyledFooter = styled.footer`
  border-top: solid 1px ${theme.colors.purple500};
  display: flex;
  flex-direction: row;
  height: 32px;
`;

const Footer = () => (
  <StyledFooter>
    <span>©2020 Yuji Nelson. Made with ❤️ in Austin, TX.</span>
    <span>Soli deo gloria</span>
  </StyledFooter>
);

export default Footer;
