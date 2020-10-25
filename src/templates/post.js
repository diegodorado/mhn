import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import CyclicFade from  "../components/cyclic-fade"


const Template = ({pageContext, data}) => {
  const { markdownRemark: post } = data
  const { title, images } = post.frontmatter
  const {previous, next } = pageContext

  return (
  <Layout bodyClass="level1">
    <SEO title={title} />
    <nav className="pager">
      {previous ? <Link to={previous} /> : <span/>}
      <h2>{title}</h2>
      {next ? <Link to={next} /> : <span/>}
    </nav>
    
    {images && (
      <CyclicFade speed={8000}> 
        {images.map( i => <Img key={i} fluid={i.childImageSharp.fluid} alt={i.name.replace("-"," ")} />)}
      </CyclicFade>
    )}

    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />

    <code>caja de sorpresa</code>
    <p>actividades para todas las edades</p>

  </Layout>)
}

export default Template

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        images {
          name
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
