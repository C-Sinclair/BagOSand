import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"

type SliderNode = {
    node: {
        id: string
        frontmatter: {
            title: string
            description: string
            path: string
        }
    }
}

type ImageObject = {
    fluid: FluidObject
}

export interface SliderQuery {
    allMarkdownRemark: {
        edges: SliderNode[]
    }
    allImageSharp: {
        nodes: ImageObject[]
    }
}

type UseSliderDataReturn = {
    images: FluidObject[],
    products: SliderNode[]
}

export const useSliderData = (): UseSliderDataReturn => {
    const { allMarkdownRemark, allImageSharp } = useStaticQuery<SliderQuery>(graphql`
        query {
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
            allImageSharp {
                nodes {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        } 
    `)
    return {
        products: allMarkdownRemark.edges,
        images: allImageSharp.nodes.map(({ fluid }) => fluid)
    }
}