import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {ThemeProvider} from 'styled-components'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import theme from '../../assets/stylesheets/theme'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Header title={data.site.siteMetadata.title}/>
      <main>{children}</main>
      <Footer/>
    </ThemeProvider>
  )
}

export default Layout
