const path = require('path')

exports.createPages = ({ actions, graphql }) => {
    const { createPage  } = actions
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
                        origin
                    }
                }
            }
        }}
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }
        const { edges } = res.data.allMarkdownRemark
        edges
            .map(({ node }) => ({
                id: node.id,
                ...node.frontmatter
            }))
            .forEach((node) => {
                createPage({
                    path: node.path,
                    component: productTemplate,
                    context: {
                        product: node
                    }
                })
            })
    })

}