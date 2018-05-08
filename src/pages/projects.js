import React from 'react';
import Link from 'gatsby-link';

import styles from './projects.module.css';

const Project = props => (
  <a href={props.url}>
    <div className={styles.project}>
      <img className={styles.projectThumbnail} src={props.image} alt="" />
      <div className={styles.projectInformation}>
        <h2 className={styles.projectTitle}>{props.title}</h2>
        <p className={styles.projectDescription}>{props.description}</p>
      </div>
    </div>
  </a>
);

export default ({ data }) => (
  <div>
    <div>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.description}>Here's a list of my projects</p>
    </div>
    <div className={styles.projectsContainer}>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <Project
            image={node.frontmatter.image.publicURL}
            title={node.frontmatter.title}
            url={node.frontmatter.url}
            description={node.excerpt}
          />
        );
      })}
    </div>
  </div>
);

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 100
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            url
            date(formatString: "DD MMMM, YYYY")
            image {
              publicURL
            }
          }
          excerpt
        }
      }
    }
  }
`;
