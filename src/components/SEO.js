import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

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

const SEO = ({ title, description, image }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(siteMetadataQuery);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    twitter,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image && image.src ? `${siteUrl}${image}` : null,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      title={seo.title}
      titleTemplate={titleTemplate}
      link={
        seo.url
          ? [
              {
                rel: 'canonical',
                href: seo.url,
              },
            ]
          : []
      }
      meta={[
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
          name: `og:url`,
          content: seo.url,
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
      ].concat(
        seo.image
          ? [
              {
                property: `og:image`,
                content: seo.image,
              },
              {
                property: `og:image:width`,
                content: seo.image.width,
              },
              {
                property: `og:image:height`,
                content: seo.image.height,
              },
              {
                property: `twitter:card`,
                content: 'summary_large_image',
              },
            ]
          : [
              {
                name: `twitter:card`,
                content: `summary`,
              },
            ]
      )}
    />
  );
};

export default SEO;
