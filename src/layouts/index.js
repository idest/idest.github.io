import React from "react";
import Link from 'gatsby-link';

import styles from "./index.module.css"

const ListLink = props =>
  <li className={styles.listLink} >
    <Link to={props.to}>
      <h6>{props.children}</h6>
    </Link>
  </li>

export default ({ children, data }) => (
  <div className={styles.container}>
    <header className={styles.header}
      style={{
        background: data.site.siteMetadata.colors.primary,
      }}
    >
      <h1 className={styles.siteTitle}>
        <Link to="/">
          {data.site.siteMetadata.shortTitle}
        </Link>
      </h1>
    </header>
    <nav className={styles.nav}
      style={{
        background: data.site.siteMetadata.colors.primary,
      }}
    >
      <ul className={styles.linksList}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </nav>
    <main className={styles.main}>
      {children()}
    </main>
    <footer className={styles.footer}
      style={{
        background: data.site.siteMetadata.colors.secondary,
      }}
    >
    </footer>
  </div>
)

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        shortTitle
        colors {
          primary
          secondary
        }
      }
    }
  }
`
