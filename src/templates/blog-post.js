import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styles from './blog-post.module.css';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout locale={post.frontmatter.locale} path="/blog">
      <div>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <div
          className={styles.post}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        locale
      }
    }
  }
`;
