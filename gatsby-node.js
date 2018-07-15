const path = require('path');
const locales = require('./src/utils/locales');

exports.onCreatePage = ({ actions, page }) => {
  const { createPage, deletePage } = actions;
  return new Promise(resolve => {
    deletePage(page);
    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path;
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang
        }
      });
    });
    resolve();
  });
};

exports.createPages = ({ actions, graphql }) => {
  // Query for markdown nodes used in create pages
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 100
            filter: { frontmatter: { type: { eq: "post" } } }
          ) {
            edges {
              node {
                excerpt
                html
                id
                frontmatter {
                  title
                  date
                  path
                  type
                  template
                  published
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      allPosts = result.data.allMarkdownRemark.edges;
      allowedPosts = allPosts.filter(
        post =>
          process.env.NODE_ENV === 'development' ||
          post.node.frontmatter.published
      );
      allowedPosts.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve(
            `src/templates/${node.frontmatter.template}.js`
          ),
          // data in context is passed to template query as graphql variables
          context: { slug: node.frontmatter.path }
        });
      });
      resolve();
    });
  });
};
