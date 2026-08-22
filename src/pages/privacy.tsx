import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../components/styles/ContentContainer';
import { H1, H2 } from '../components/styles/headers';
import { colors, fonts, spacing } from '../components/styles/theme';
import SEO from '../components/SEO';
import Text from '../components/styles/Text';

const PrivacyPage = styled(ContentContainer)`
  section {
    max-width: 50rem;
  }

  h2 {
    font-size: ${spacing.s}rem;
    margin-bottom: ${spacing.s}rem;
  }

  ul {
    color: ${colors.grey[100]};
    display: grid;
    font-family: ${fonts.family.sourceCodePro};
    gap: ${spacing.xs}rem;
    line-height: 1.5;
    list-style: disc;
    margin: ${spacing.s}rem 0 0 ${spacing.s}rem;
  }

  a {
    color: ${colors.blue[400]};
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
`;

const Privacy = () => (
  <PrivacyPage gap="l">
    <SEO
      title="Privacy"
      description="How analytics and session replay data is used on yujinelson.com."
    />
    <section>
      <H1>Privacy</H1>
      <Text textStyle="paragraph">
        This site does not require an account. Optional analytics only runs
        after you choose “Allow analytics” in the consent banner.
      </Text>
    </section>
    <section>
      <H2>What is collected</H2>
      <Text textStyle="paragraph">
        If you accept, PostHog records usage information, including:
      </Text>
      <ul>
        <li>pages viewed and links or buttons clicked;</li>
        <li>referring pages and campaign parameters in links;</li>
        <li>browser, device and approximate location information; and</li>
        <li>session replays showing how the site was used.</li>
      </ul>
    </section>
    <section>
      <H2>How it is protected</H2>
      <Text textStyle="paragraph">
        Form inputs are masked in session replays, console logs are not
        recorded, and this site does not send your name or email address to
        PostHog. An application_ref can associate a visit with a job application
        in a private tracker, so please avoid putting personal information in
        campaign parameters when sharing a link to this site.
      </Text>
    </section>
    <section>
      <H2>Why it is collected</H2>
      <Text textStyle="paragraph">
        I use this information to understand how people find and use the site,
        and to improve its content and usability. The processing is based on
        your consent. PostHog and its managed proxy process the data on my
        behalf. You can read{' '}
        <a href="https://posthog.com/privacy">PostHog&apos;s privacy notice</a>.
        Analytics data is reviewed periodically and deleted when it is no longer
        useful.
      </Text>
    </section>
    <section>
      <H2>Your choice</H2>
      <Text textStyle="paragraph">
        You can reject analytics without affecting the site. You can also change
        or withdraw your choice at any time using “Cookie settings” in the
        footer. For questions, email{' '}
        <a href="mailto:hello@yujinelson.com">hello@yujinelson.com</a>.
      </Text>
    </section>
  </PrivacyPage>
);

export default Privacy;
