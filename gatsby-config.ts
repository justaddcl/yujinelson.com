import path from 'path';
import type { GatsbyConfig } from 'gatsby';

let dirname = __dirname;

/**
 * __dirname now points to a compiled folder, but we need it to point to the project source directory
 * See related: https://github.com/gatsbyjs/gatsby/issues/35488
 */
if (dirname.endsWith('/.cache/compiled')) {
  dirname = __dirname.replace('/.cache/compiled', '');
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Front-end software engineer',
    titleTemplate: 'Yuji Nelson - %s',
    description:
      'Yuji Nelson is a front-end software engineer who builds modern and intuitive front-ends for web apps and websites with modern JavaScript (ES6+, React) and TypeScript, hyper focused on quality as well as end-user feedback and requirements.',
    url: 'https://www.yujinelson.com',
    author: 'Yuji Nelson',
    github: 'justaddcl',
    linkedin: 'yujinelson',
    twitter: 'yn_nydev',
    dribbble: 'yujinelson',
    codepen: 'yn_nydev',
    lastfm: 'yneo97',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};

export default config;
