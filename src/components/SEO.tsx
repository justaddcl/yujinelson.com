import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type SEOQueryData = {
  site: {
    siteMetadata: {
      defaultTitle: string;
      titleTemplate: string;
      defaultDescription: string;
      siteUrl: string;
      twitter: string;
    };
  };
};

type SEOImage = {
  src: string;
  width?: number;
  height?: number;
};

type SEOProps = {
  title?: string;
  description?: string;
  image?: SEOImage;
};

type MetaTag = {
  name?: string;
  property?: string;
  content: string | number;
};

const siteMetadataQuery = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        twitter
      }
    }
  }
`;

const SEO = ({
  title = undefined,
  description = undefined,
  image = undefined,
}: SEOProps) => {
  const { site } = useStaticQuery<SEOQueryData>(siteMetadataQuery);

  const { defaultTitle, titleTemplate, defaultDescription, siteUrl, twitter } =
    site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image ? { ...image, src: `${siteUrl}${image.src}` } : null,
  };

  const meta: MetaTag[] = [
    {
      name: `description`,
      content: seo.description,
    },
    {
      name: `og:title`,
      content: seo.title,
    },
    {
      name: `og:description`,
      content: seo.description,
    },
    {
      name: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:creator`,
      content: twitter,
    },
    {
      name: `twitter:title`,
      content: seo.title,
    },
    {
      name: `twitter:description`,
      content: seo.description,
    },
  ];

  if (seo.image) {
    meta.push({
      property: `og:image`,
      content: seo.image.src,
    });

    if (seo.image.width) {
      meta.push({
        property: `og:image:width`,
        content: seo.image.width,
      });
    }

    if (seo.image.height) {
      meta.push({
        property: `og:image:height`,
        content: seo.image.height,
      });
    }

    meta.push({
      name: `twitter:card`,
      content: `summary_large_image`,
    });
  } else {
    meta.push({
      name: `twitter:card`,
      content: `summary`,
    });
  }

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      title={seo.title}
      titleTemplate={titleTemplate}
      meta={meta}
    />
  );
};

export default SEO;
