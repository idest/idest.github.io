import React from "react";

import styles from "./blog-post.module.css"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <div className={styles.post}
        dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
