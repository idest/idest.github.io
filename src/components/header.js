import React from "react"
import Link from 'gatsby-link'

const Header = ({ siteTitle, bgColor, fgColor }) => {
  return (
    <header style={{ background: bgColor, color: fgColor }}>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </header>
  )
}

export default Header
