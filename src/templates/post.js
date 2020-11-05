import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import CyclicFade from  "../components/cyclic-fade"
import Surprise from "../assets/caja-sorpresa.svg"


const Template = ({pageContext, data}) => {
  const { markdownRemark: post } = data
  const { category, title, overview, images } = post.frontmatter
  const {previous, next } = pageContext

  return (
  <Layout bodyClass="level1">
    <SEO title={title} />

    <nav className="pager category">
      {previous ? <Link to={previous} /> : <span/>}
      <h3>{category}</h3>
      {next ? <Link to={next} /> : <span/>}
    </nav>
    
    <nav className="pager"> 
      {previous ? <Link to={previous} /> : <span/>}
      <h2>{title}</h2>
      {next ? <Link to={next} /> : <span/>}
    </nav>
    
    {images && (
      <CyclicFade speed={8000}> 
        {images.map( i => <Img key={i} fluid={i.file.childImageSharp.fluid} alt={i.alt} />)}
      </CyclicFade>
    )}

    <p className="overview">{overview}</p>

    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />

    <figure>
      <Surprise/>
      <Link to="/propuestas-educativas/">Actividades para todas las edades</Link>
    </figure>

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
        category
        overview
        images {
          alt
          file{ 
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
