import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import resume from '../assets/pdf/Yuji-Nelson-Resume-2020.pdf';

const StyledResumeLink = styled.a`
  & .icon {
    font-size: 0.875rem;
  }
`;

const ResumeLink = () => (
  <StyledResumeLink href={resume} target="_blank" rel="noopener noreferrer">
    Download resume <FontAwesomeIcon icon="download" className="icon" />
  </StyledResumeLink>
);

export default ResumeLink;
