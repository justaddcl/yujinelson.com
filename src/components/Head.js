import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const Head = ({ pageTitle = '' }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Helmet>
      <title>
        {`${pageTitle ? `${pageTitle} - ` : ''}${data.site.siteMetadata.title}`}
      </title>
      <link rel="stylesheet" href="https://use.typekit.net/xwd2wbi.css" />
      <link rel="stylesheet" href="https://use.typekit.net/xoo3bkz.css" />
    </Helmet>
  );
};

export default Head;
