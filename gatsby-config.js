module.exports = {
  siteMetadata: {
    title: 'Front-end developer and user experience (UX) designer',
    titleTemplate: 'Yuji Nelson - %s',
    description:
      'Yuji Nelson is a front-end developer user experience (UX) designer who designs and builds mobile-first, responsive websites and web apps using modern HTML, CSS, and JavaScript.',
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
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.S3_BUCKET_NAME,
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
