import { graphql, useStaticQuery } from "gatsby"

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

export interface SliderQuery {
    allMarkdownRemark: {
        edges: SliderNode[]
    }
}

export const useSliderData = (): SliderNode[] => {
    const { allMarkdownRemark } = useStaticQuery<SliderQuery>(graphql`
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
        } 
    `)
    return allMarkdownRemark.edges
}