import React from "react"
import { ThemeProvider } from 'emotion-theming'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import theme from '../../assets/stylesheets/theme'
import { BackgroundImg } from './styled'
import { useSiteData } from "./data"

const Layout = ({ children }) => {
  const { site, image } = useSiteData()
  return (
    <ThemeProvider theme={theme}>
      <BackgroundImg
        Tag='section'
        fluid={image}
        backgroundColor={`#000000`}
      >
        <Header title={site.title}/>
        <main>{children}</main>
        <Footer/>
      </BackgroundImg>
    </ThemeProvider>
  )
}


export default Layout
