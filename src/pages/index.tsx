import React from "react"
import Layout from "../layout/Main/Main"
import SEO from "../components/SEO/SEO"
import { Slider } from "../components/Slider/Slider"
import { H6 } from "../components/Text/Text"

export default () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <section>
      <H6>Responsibly sourced small confectionary sized bags of sand</H6>
    </section>
  </Layout>
)
