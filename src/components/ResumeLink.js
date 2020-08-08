import React from 'react';
import styled from 'styled-components';
import resume from '../assets/pdf/Yuji-Nelson-Resume-2020.pdf';
import { spacing, mq } from './styles/theme';
import mixins from './styles/mixins';

const StyledResumeLink = styled.a`
  ${(props) => (props.button ? mixins.button : '')};

  @media screen and (min-width: ${mq.mobile.small}) {
    padding: ${(props) =>
      props.button ? `${spacing.xs}rem ${spacing.base}rem` : ''};
  }

  & .icon {
    font-size: 0.875rem;
  }
`;

const ResumeLink = ({ button, children }) => (
  <StyledResumeLink
    href={resume}
    target="_blank"
    rel="noopener noreferrer"
    button={button}
  >
    {children || <>Resume</>}
  </StyledResumeLink>
);

export default ResumeLink;
