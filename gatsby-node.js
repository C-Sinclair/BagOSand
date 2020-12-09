const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
    const { createPage  } = actions
    const productTemplate = path.resolve('src/templates/Product.tsx')
    const res = graphql(`
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
    `)
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
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
        type Product implements MarkdownRemark {
            path: String!
            title: String!
            description: String!
            origin: String!
        }
    `
    createTypes(typeDefs)
}

exports.createResolvers = ({ actions, createResolvers }) => {
    const { createNode } = actions
    const resolvers = {
        Query: {
            allProducts: {
                type: ["Product"],
                resolve(source, args, context, info) {
                    return context.nodeModel.getAllNodes({ })
                }
            }
        }
    }
    createResolvers(resolvers)
}