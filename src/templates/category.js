import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Surprise from "../assets/caja-sorpresa.svg"
import ZoomSlider from "../components/slider/Slider"


const Template = ({pageContext, data}) => {
  const { markdownRemark: post, allMarkdownRemark: posts } = data
  const { category, title, overview } = post.frontmatter
  const {previous, next } = pageContext
  // join all images
  const images = posts.edges.map(e => e.node.frontmatter.images).reduce((a,e) => a.concat(e) , [])
  console.log(images)
  const slides = images.map( i => <Img key={i}  draggable={false}  fluid={i.file.childImageSharp.fluid} alt={i.alt} epigraph={i.epigraph} />)

  return (
  <Layout bodyClass="level1">
    <SEO title={title} />

    <nav className="pager category">
      {previous ? <Link to={previous} /> : <span/>}
      <h2>{category}</h2>
      {next ? <Link to={next} /> : <span/>}
    </nav>
    
    <nav className="pager object"> 
      {previous ? <Link to={previous} /> : <span/>}
      <h3></h3>
      {next ? <Link to={next} /> : <span/>}
    </nav>
    
    <div style={{width:'100%', overflow: 'hidden'}}>
      <ZoomSlider slides={slides} activeDotColor={"#006699"}/>
    </div>

    <p className="overview">{overview}</p>

    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />

  </Layout>)
}

export default Template

export const pageQuery = graphql`
  query PostsBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        overview
      }
    }
    allMarkdownRemark(sort: {order: ASC, fields: frontmatter___index}, filter: {fields: {slug: {regex: $slug, ne: $slug}}}) {
      edges {
        node {
          frontmatter {
            images {
              alt
              epigraph
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
    }
  }
`
