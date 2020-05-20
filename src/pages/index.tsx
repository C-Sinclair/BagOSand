import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/Main/Main"
import SEO from "../components/SEO/SEO"
import { Slider } from "../components/Slider/Slider"
import { H6 } from "../components/Text/Text"
import { Link } from '../components/Link/Link' 

export default ({ data }: HomePageProps) => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <section>
      <H6>Responsibly sourced small confectionary sized bags of sand</H6>
    </section>
    <section>
      { data.allMarkdownRemark.edges.map(({ node }, index) => (
        <Link key={index} to={node.frontmatter.path}>
          <H6>{node.frontmatter.title}</H6>
        </Link>
      ))}
    </section>partiallyActive
  </Layout>
)

type ProductNode = {
  node: {
    id: string
    frontmatter: {
      title: string
      description: string
      path: string
    }
  }
}

interface HomePageProps {
  data: {
    allMarkdownRemark: {
      edges: ProductNode[]
    }  
  }
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            description
            path
          }
        }
      }
    }   
  }
`