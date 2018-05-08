module.exports = {
  siteMetadata: {
    title: 'id est',
    shortTitle: 'i.e.',
    colors: {
      primary: '#a2cca1',
      secondary: '#6f906f'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
};
