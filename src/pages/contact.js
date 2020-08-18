import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { colors, fonts, mq, spacing } from '../components/styles/theme';
import SEO from '../components/SEO';
import ContentContainer from '../components/styles/ContentContainer';
import Hero from '../components/Hero';
import { H1 } from '../components/styles/headers';
import P from '../components/styles/Text';
import SocialsList from '../components/SocialsList';

const ContactPage = styled(ContentContainer)`
  #contact-email {
    justify-self: start;
  }
`;

const StyledEmail = styled.div`
  font-family: ${fonts.family.sourceCodePro};

  padding: ${spacing.base}rem ${spacing.m}rem;
  background: ${colors.purple[700]};
  border-radius: 2px;

  &:hover {
    background: ${colors.purple[700]}cc;
    color: ${colors.grey[100]};
  }

  @media screen and (min-width: ${mq.mobile.small}) {
    font-size: ${spacing.s}rem;
  }

  @media screen and (min-width: ${mq.mobile.large}) {
    font-size: ${spacing.m}rem;
  }
`;

const Contact = ({ data }) => (
  <ContactPage gap="xl">
    <SEO title="Connect with me" />
    <Hero>
      <H1>Let's connect</H1>
      <P>
        I'd love to hear from you if you have an opportunity that may be a good
        fit for me, or if you want to know more about me or my work. Let's see
        how we can work together to solve your next challenge!
      </P>
      <P>
        The best way to reach me is through email or by connecting with me on{' '}
        <span>
          <a
            href={`https://www.linkedin.com/in/${data.site.siteMetadata.linkedin}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="token--light-blue"
          >
            LinkedIn
          </a>
        </span>
        .
      </P>
    </Hero>
    <a id="contact-email" href="mailto:hello@yujinelson.com">
      <StyledEmail>
        hello<span className="token--blue">@</span>yujinelson
        <span className="token--blue">.com</span>
      </StyledEmail>
    </a>
    <P>
      You can also find me on these other platforms:
      <SocialsList />
    </P>
  </ContactPage>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        linkedin
      }
    }
  }
`;

export default Contact;
