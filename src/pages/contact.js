import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { fonts } from '../components/styles/theme';
import Head from '../components/Head';
import ContentContainer from '../components/styles/ContentContainer';
import Hero from '../components/Hero';
import { H1 } from '../components/styles/headers';
import P from '../components/styles/Text';
import SocialsList from '../components/SocialsList';

const ContactPage = styled(ContentContainer)``;

const StyledEmail = styled.div`
  font-family: ${fonts.family.sourceCodePro};
  font-size: 1.25rem;
`;

const Contact = ({ data }) => (
  <ContactPage gap="xl">
    <Head pageTitle="Contact" />
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
            className="token--blue"
          >
            LinkedIn
          </a>
        </span>
        .
      </P>
    </Hero>
    <StyledEmail>
      hello<span className="token--blue">@</span>yujinelson
      <span className="token--blue">.com</span>
    </StyledEmail>
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
