import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type GatsbyImageFile = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
};
