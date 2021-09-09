import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { colors, mq, spacing } from './styles/theme';

const StyledContactCard = styled.div`
  background: ${colors.grey[700]};
  border-radius: 2px;
  padding: ${spacing.m}rem ${spacing.s}rem;
  display: grid;
  row-gap: ${spacing.m}rem;
  place-items: center start;
  width: 100%;

  @media screen and (min-width: ${mq.mobile.large}) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center end;
    padding: ${spacing.l}rem;
  }

  @media screen and (min-width: ${mq.desktop.small}) {
    padding: 5rem ${spacing.xxl}rem;
  }

  h2 {
    color: ${colors.blue[600]};
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: ${spacing.m}rem;

    @media screen and (min-width: ${mq.mobile.large}) {
      font-size: ${spacing.m};
      margin-bottom: ${spacing.s}rem;
    }

    @media screen and (min-width: ${mq.desktop.small}) {
      font-size: 2.25rem;
    }
  }

  p {
    @media screen and (min-width: ${mq.desktop.small}) {
      font-size: 1.25rem;
    }
  }
`;

const ContactCard = () => (
  <StyledContactCard>
    <div>
      <h2>Let's work together</h2>
      <p>
        Have an opportunity for me, or questions about my work and skills? Let’s
        chat!
      </p>
    </div>
    <Link to="/contact" className="button button--primary">
      Get in touch{' '}
      <FontAwesomeIcon icon="arrow-right" className="icon--right" />
    </Link>
  </StyledContactCard>
);

export default ContactCard;
