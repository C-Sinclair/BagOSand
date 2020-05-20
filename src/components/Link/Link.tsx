import React from 'react'
import { Link as GatsbyLink } from "gatsby"

export const Link = ({ children, to, ...other }) => {
  return /^\/(?!\/)/.test(to) ? (
    <GatsbyLink
      to={to}
      {...other}
    >
      {children}
    </GatsbyLink>
  ): (
    <a href={to} target="_blank" rel="noopener noreferrer" {...other}>
      {children}
    </a>
  )
}
