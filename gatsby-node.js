const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage  } = boundActionCreators
    const productTemplate = path.resolve('src/templates/Product.tsx')
    return graphql(`
        { allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        description
                    }
                }
            }
        }}
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }
        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: productTemplate
            })
        })
    })

}