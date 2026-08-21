import React from 'react';
import { graphql, type PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import type { GatsbyImageFile } from 'types/gatsby';
import CaseStudyHero from '../../components/CaseStudy/CaseStudyHero';
import CaseStudyStory, {
  type CaseStudyMediaMap,
} from '../../components/CaseStudy/CaseStudyStory';
import SEO from '../../components/SEO';
import ContentContainer from '../../components/styles/ContentContainer';
import { spacing } from '../../components/styles/theme';
import sanbiContent, {
  type SanbiMediaId,
} from '../../content/case-studies/sanbi';

const SanbiPage = styled(ContentContainer)`
  row-gap: ${spacing.m}rem;
`;

const ProjectHeroImage = styled.section`
  margin-bottom: ${spacing.l}rem;
`;

type AnimationFile = {
  publicURL: string;
};

type SanbiPageData = {
  projectHero: GatsbyImageFile;
  figmaAddSong: GatsbyImageFile;
  desktopSetCreation: AnimationFile;
  mobileSetManagement: AnimationFile;
};

const Sanbi: React.FC<PageProps<SanbiPageData>> = ({ data }) => {
  const media: CaseStudyMediaMap<SanbiMediaId> = {
    figmaAddSong: {
      type: 'image',
      image: data.figmaAddSong.childImageSharp.gatsbyImageData,
    },
    desktopSetCreation: {
      type: 'animation',
      src: data.desktopSetCreation.publicURL,
    },
    mobileSetManagement: {
      type: 'animation',
      src: data.mobileSetManagement.publicURL,
    },
  };

  return (
    <SanbiPage>
      <SEO
        title={sanbiContent.seo.title}
        description={sanbiContent.seo.description}
      />
      <CaseStudyHero caseStudy={sanbiContent} />
      <ProjectHeroImage>
        <GatsbyImage
          image={data.projectHero.childImageSharp.gatsbyImageData}
          className="project-hero-image"
          alt={sanbiContent.projectHeroImageAlt}
        />
      </ProjectHeroImage>
      <CaseStudyStory sections={sanbiContent.sections} media={media} />
    </SanbiPage>
  );
};

export const query = graphql`
  {
    projectHero: file(
      relativePath: { eq: "projects/sanbi/Sanbi-desktop-hero.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    figmaAddSong: file(
      relativePath: {
        eq: "projects/sanbi/Sanbi-figma-figma-prototype-example.png"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1400)
      }
    }
    desktopSetCreation: file(
      relativePath: { eq: "projects/sanbi/Sanbi-desktop-set-creation.gif" }
    ) {
      publicURL
    }
    mobileSetManagement: file(
      relativePath: { eq: "projects/sanbi/Sanbi-mobile-set-management.gif" }
    ) {
      publicURL
    }
  }
`;

export default Sanbi;
