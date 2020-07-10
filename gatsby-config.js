module.exports = {
  siteMetadata: {
    title: 'Yuji Nelson',
    author: 'Yuji Nelson',
    github: 'justaddcl',
    linkedin: 'yujinelson',
    twitter: 'yn_nydev',
    dribbble: 'yujinelson',
    codepen: 'yn_nydev',
    lastfm: 'yneo97',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'dev.yujinelson.com',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
