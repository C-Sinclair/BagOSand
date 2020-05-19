import { graphql, useStaticQuery } from "gatsby"
import { IFluidObject } from 'gatsby-background-image'

type SiteMetadata = {
    title: string,
    description: string,
    author: string
}

export interface SiteMetadataQuery {
    site: {
        siteMetadata: SiteMetadata
    }
    desktop: {
        childImageSharp: {
            fluid: IFluidObject
        }
    }
}

type SiteDataReturn = {
    image: IFluidObject,
    site: SiteMetadata
}

export const useSiteData = (): SiteDataReturn => {
    const { site, desktop } = useStaticQuery<SiteMetadataQuery>(graphql`
        query SiteData {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
            desktop: file(relativePath: { eq: "adrien-olichon-VzRKG0piEp8-unsplash.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return {
        image: desktop.childImageSharp.fluid,
        site: site.siteMetadata
    }
}