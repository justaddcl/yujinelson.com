import React from 'react';
import { Link, graphql, type PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SEO from '../components/SEO';
import ContentContainer from '../components/styles/ContentContainer';
import { colors, fonts, mq, spacing } from '../components/styles/theme';
import { H1, H2, H3 } from '../components/styles/headers';
import Hero from '../components/Hero';
/**
 * TODO: create <Text> component that would include the style for paragraph
 * Currently, this violates the id-length eslint rule of < 2 characters
 */
// eslint-disable-next-line id-length
import Text from '../components/styles/Text';
import ResumeLink from '../components/ResumeLink';
import ExperienceCard from '../components/ExperienceCard';
import { ContactCard } from '../components/ContactCard/ContactCard';
import aboutContent from '../content/about';
import type { ExperienceLogoKey } from '../data/experience';
import type { GatsbyImageFile } from '../types/gatsby';

type AboutPageData = {
  headshot: GatsbyImageFile;
} & Record<ExperienceLogoKey, GatsbyImageFile>;

const AboutPage = styled(ContentContainer)``;

const ContentSection = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: ${spacing.m}rem;
`;

const SkillsList = styled.dl`
  @media screen and (min-width: ${mq.mobile.large}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${spacing.m}rem;
    margin-bottom: ${spacing.m}rem;
  }

  dt {
    color: ${colors.blue[400]};
    font-size: ${spacing.s}rem;
    margin-bottom: ${spacing.base}rem;
  }

  dd {
    font-family: ${fonts.family.sourceCodePro};
    margin-left: ${spacing.base}rem;
    margin-bottom: ${spacing.m}rem;
    line-height: ${spacing.s};

    ul {
      display: grid;
      row-gap: ${spacing.xxs}rem;
    }
  }
`;

const About: React.FC<PageProps<AboutPageData>> = ({ data }) => (
  <AboutPage>
    <SEO
      title={aboutContent.seo.title}
      description={aboutContent.seo.description}
    />
    <section>
      <Hero responsiveSplit>
        <div>
          <H1>{aboutContent.hero.heading}</H1>
          <Text>{aboutContent.hero.introduction}</Text>
        </div>
        <div>
          <GatsbyImage
            image={data.headshot.childImageSharp.gatsbyImageData}
            className="hero-image"
            alt={aboutContent.hero.imageAlt}
          />
        </div>
      </Hero>
      <ContentSection>
        {aboutContent.story.map((storySection) => (
          <div key={storySection.id}>
            {storySection.heading && <H3>{storySection.heading}</H3>}
            {storySection.paragraphs.map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}
          </div>
        ))}
        <Link
          to={aboutContent.storyAction.href}
          className="button button--primary"
        >
          {aboutContent.storyAction.label}
          <FontAwesomeIcon icon="arrow-right" className="icon--right" />
        </Link>
      </ContentSection>
    </section>
    <section>
      <H2>{aboutContent.experience.heading}</H2>
      <ExperienceCard
        company={aboutContent.experience.featured.company}
        dates={aboutContent.experience.featured.dates}
        location={aboutContent.experience.featured.location}
        logo={
          aboutContent.experience.featured.logo
            ? data[aboutContent.experience.featured.logo]
            : undefined
        }
        role={aboutContent.experience.featured.role}
        roles={aboutContent.experience.featured.roles}
        summary={aboutContent.experience.featured.summary}
        team={aboutContent.experience.featured.team}
      >
        {aboutContent.experience.featured.bullets && (
          <ul className="role-bullets">
            {aboutContent.experience.featured.bullets.map((bullet, index) => (
              // FIXME: should not be using the array index for the key
              <li
                key={`${aboutContent.experience.featured.roleId}-bullet-${index}`}
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </ExperienceCard>
      <ResumeLink button>
        {aboutContent.experience.resumeLabel}
        <FontAwesomeIcon icon="arrow-right" className="icon--right" />
      </ResumeLink>
    </section>
    <section id="skills">
      <H2>{aboutContent.skills.heading}</H2>
      <SkillsList>
        {aboutContent.skills.groups.map((skillGroup) => (
          <div key={skillGroup.id}>
            <dt>{skillGroup.heading}</dt>
            <dd>
              <ul>
                {skillGroup.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </SkillsList>
      <ResumeLink button>
        {aboutContent.skills.resumeLabel}
        <FontAwesomeIcon icon="arrow-right" className="icon--right" />
      </ResumeLink>
    </section>
    <ContactCard />
  </AboutPage>
);

export const query = graphql`
  {
    headshot: file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 500, layout: CONSTRAINED)
      }
    }
    cleoLogo: file(relativePath: { eq: "experience/cleo-logo-white.png" }) {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48, layout: FIXED)
      }
    }
    duffelLogo: file(relativePath: { eq: "experience/duffel-logo-white.png" }) {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48, layout: FIXED)
      }
    }
    teyaLogo: file(relativePath: { eq: "experience/teya-logo-white.png" }) {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48, layout: FIXED)
      }
    }
    magpulLogo: file(relativePath: { eq: "experience/magpul-logo-white.png" }) {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48, layout: FIXED)
      }
    }
    boeingLogo: file(relativePath: { eq: "experience/boeing-logo-white.png" }) {
      childImageSharp {
        gatsbyImageData(width: 48, height: 48, layout: FIXED)
      }
    }
  }
`;

export default About;
