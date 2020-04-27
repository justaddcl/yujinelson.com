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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
  ],
};
