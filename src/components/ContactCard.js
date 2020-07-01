import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { colors, spacing } from './styles/theme';
import Button from './styles/Button';

const StyledContactCard = styled.div`
  background: ${colors.purple[700]};
  border-radius: 2px;
  padding: ${spacing.m}rem ${spacing.s}rem;
  display: grid;
  row-gap: ${spacing.m}rem;
  width: 100%;

  h2 {
    color: ${colors.blue[600]};
    font-size: 1.75rem;
    font-weight: 700;
  }
`;

const ContactCard = () => (
  <StyledContactCard>
    <h2>Let's work together</h2>
    <p>
      Have an opportunity for me, or questions about my work and skills? Let’s
      chat!
    </p>
    <Link to="/contact">
      <Button primary as="span">
        Get in touch{' '}
        <FontAwesomeIcon icon="arrow-right" className="icon--right" />
      </Button>
    </Link>
  </StyledContactCard>
);

export default ContactCard;
