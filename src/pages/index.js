import React from "react"

import styles from "./index.module.css"

export default ({ data }) => (
  <div>
    <h1 className={styles.title}>{data.site.siteMetadata.title}</h1>
    <p className={styles.description}>Explaining things through code and illustration.</p>
  </div>
)

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
