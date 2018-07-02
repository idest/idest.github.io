import React from 'react';
import Link from 'gatsby-link';

import styles from './blog.module.css';

const Post = props => (
  <Link to={props.path}>
    <div className={styles.post}>
      <h3 className={styles.postTitle}>
        {props.title}
        <span className={styles.postDate}>{props.date}</span>
      </h3>
      <p className={styles.postExcerpt}>{props.excerpt}</p>
    </div>
  </Link>
);

export default ({ data }) => (
  <div>
    <div>
      <h1 className={styles.title}>Blog</h1>
      <p className={styles.description}>Here's what I've written</p>
    </div>
    <div className={styles.postsContainer}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
          key={node.id}
          path={node.frontmatter.path}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
        />
      ))}
    </div>
  </div>
);

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 100
      filter: {
        frontmatter: { template: { eq: "blog-post" }, published: { eq: true } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`;
