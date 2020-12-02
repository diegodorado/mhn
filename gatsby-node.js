const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___index] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              index
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
    const index = node.fields.index
    createPage({
      path: node.fields.slug,
      component: index ? categoryTemplate : postTemplate,
      context: {
        slug: node.fields.slug,
        previous: previous ? previous.fields.slug : null,
        next: next ? next.fields.slug : null,
      }
    })
  })
  //console.log(result.data.allMarkdownRemark.edges)
}

exports.onCreateNode = (data) => {
  const { node,  actions, getNode } = data
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const name = path.basename(node.fileAbsolutePath, `.md`)
    const slug = createFilePath({ node, getNode })
    createNodeField({ node, name: `index`,value: name.startsWith('index')})
    createNodeField({ node, name: `slug`,value: `${slug}`})
  }
}

