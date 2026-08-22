import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  acceptAnalytics,
  getAnalyticsConsentStatus,
  isAnalyticsConfigured,
  rejectAnalytics,
  subscribeToAnalyticsConsentSettings,
} from '../analytics/posthog';
import { colors, fonts, mq, spacing } from './styles/theme';

type ConsentStatus = ReturnType<typeof getAnalyticsConsentStatus>;

const Banner = styled.aside`
  background: ${colors.purple[900]};
  border: 1px solid ${colors.purple[500]};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 20;

  @media screen and (min-width: ${mq.mobile.large}) {
    bottom: ${spacing.s}rem;
    left: auto;
    right: ${spacing.s}rem;
    width: min(30rem, calc(100vw - ${spacing.l}rem));
  }
`;

const BannerContent = styled.div`
  display: grid;
  gap: ${spacing.xs}rem;
  padding: ${spacing.base}rem ${spacing.s}rem;
  position: relative;
`;

const Copy = styled.div`
  h2 {
    color: ${colors.grey[50]};
    font-family: ${fonts.family.sourceCodePro};
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: ${spacing.xxs}rem;
  }

  p {
    color: ${colors.grey[200]};
    font-size: 0.8125rem;
    line-height: 1.4;
  }

  a {
    color: ${colors.blue[400]};
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
`;

const Actions = styled.div`
  display: grid;
  gap: ${spacing.xs}rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  button {
    background: transparent;
    border: 1px solid ${colors.purple[500]};
    border-radius: 2px;
    color: ${colors.grey[50]};
    cursor: pointer;
    font-family: ${fonts.family.sourceCodePro};
    font-size: 0.75rem;
    padding: ${spacing.xxs}rem ${spacing.xs}rem;
    white-space: pre;

    &:hover,
    &:focus-visible {
      background: ${colors.purple[500]}20;
    }

    &:focus-visible {
      outline: 2px solid ${colors.blue[400]};
      outline-offset: 2px;
    }
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: 0;
  color: ${colors.grey[300]};
  cursor: pointer;
  font-family: ${fonts.family.sourceCodePro};
  font-size: 0.6875rem;
  padding: ${spacing.xxs}rem;
  position: absolute;
  right: ${spacing.xs}rem;
  top: ${spacing.xs}rem;

  &:hover,
  &:focus-visible {
    color: ${colors.grey[50]};
  }
`;

const AnalyticsConsent = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isAnalyticsConfigured) return undefined;

    const currentConsentStatus = getAnalyticsConsentStatus();
    setConsentStatus(currentConsentStatus);
    setIsOpen(currentConsentStatus === 'pending');

    return subscribeToAnalyticsConsentSettings(() => {
      setConsentStatus(getAnalyticsConsentStatus());
      setIsOpen(true);
    });
  }, []);

  if (!isAnalyticsConfigured || !isOpen) return null;

  const chooseConsent = (status: Exclude<ConsentStatus, 'pending'>) => {
    if (status === 'granted') {
      acceptAnalytics();
    } else {
      rejectAnalytics();
    }

    setConsentStatus(status);
    setIsOpen(false);
  };

  return (
    <Banner aria-labelledby="analytics-consent-heading">
      <BannerContent>
        <Copy>
          <h2 id="analytics-consent-heading">Optional site analytics</h2>
          <p>
            PostHog analytics and session replay help me see which pages and
            links are useful. Analytics only runs if you allow it.{' '}
            <Link to="/privacy">Privacy details</Link>.
          </p>
        </Copy>
        <Actions>
          <button type="button" onClick={() => chooseConsent('denied')}>
            Decline
          </button>
          <button type="button" onClick={() => chooseConsent('granted')}>
            Allow analytics
          </button>
        </Actions>
        {consentStatus !== 'pending' && (
          <CloseButton type="button" onClick={() => setIsOpen(false)}>
            Close
          </CloseButton>
        )}
      </BannerContent>
    </Banner>
  );
};

export default AnalyticsConsent;
