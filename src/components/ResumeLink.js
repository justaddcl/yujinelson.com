import React from 'react';
import styled from 'styled-components';
import resume from '../assets/pdf/Yuji-Nelson-Resume-2020.pdf';
import mixins from './styles/mixins';

const StyledResumeLink = styled.a`
  ${(props) => (props.button ? mixins.button : '')};

  & .icon {
    font-size: 0.875rem;
  }
`;

const ResumeLink = ({ button, small, children }) => (
  <StyledResumeLink
    href={resume}
    target="_blank"
    rel="noopener noreferrer"
    button={button}
    small={small}
  >
    {children || <>Resume</>}
  </StyledResumeLink>
);

export default ResumeLink;
