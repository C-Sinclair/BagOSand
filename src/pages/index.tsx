import React from "react"
import Layout from "../layout/Main/Main"
import SEO from "../components/SEO/SEO"
import { Slider } from "../components/Slider/Slider"

export default () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
  </Layout>
)
