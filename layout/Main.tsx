import React, { FC } from "react"
import Footer from "../components/Footer/Footer"
import { styled } from "@linaria/react"

export const Layout: FC = ({ children }) => {
  return (
    <>
      <BackgroundImg />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export const BackgroundImg = styled.img`
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`
