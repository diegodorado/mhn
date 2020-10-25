const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const template = path.resolve(`src/templates/post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach( ({ node, previous, next}) => {
    createPage({
      path: node.fields.slug,
      component: template,
      context: {
        slug: node.fields.slug,
        previous: previous ? previous.fields.slug : null,
        next: next ? next.fields.slug : null,
      }
    })
  })
}

exports.onCreateNode = (data) => {
  const { node,  actions, getNode } = data
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const name = path.basename(node.fileAbsolutePath, `.md`)
    let slug = createFilePath({ node, getNode })
    createNodeField({ node, name: `index`,value: name.startsWith('index')})
    createNodeField({ node, name: `slug`,value: `${slug}`})
  }
}

