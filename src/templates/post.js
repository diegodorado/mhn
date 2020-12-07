import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import ZoomSlider from "../components/slider/Slider"
import juegos from "../images/juegos.gif"

const remark = require('remark')
const toHAST = require(`mdast-util-to-hast`)
const hastToHTML = require(`hast-util-to-html`)

const Template = ({pageContext, data}) => {
  const { markdownRemark: post } = data
  const { category, title, overview, images } = post.frontmatter

  const ov = hastToHTML(toHAST(remark().parse(overview)))
  const year = data.markdownRemark.fields.slug.split("/")[1]


  const {previous, next } = pageContext
  const slides = images.map( i => <Img key={i}  draggable={false}  fluid={i.file.childImageSharp.fluid} alt={i.alt} epigraph={i.epigraph} />)

  return (
  <Layout bodyClass="level1">
    <SEO title={title} />

    <h2>{year} - {category}</h2>
    
    <nav className="pager object"> 
      {previous ? <Link to={previous} /> : <span/>}
      <h3>{title}</h3>
      {next ? <Link to={next} /> : <span/>}
    </nav>
    
    <div style={{width:'100%', overflow: 'hidden'}}>
      <ZoomSlider slides={slides} activeDotColor={"#006699"}/>
    </div>

    <div className="overview"
      dangerouslySetInnerHTML={{ __html: ov}}
    />

    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />

    <nav className="pager object foot"> 
      {previous ? <Link to={previous} /> : <span/>}
      {next ? <Link to={next} /> : <span/>}
    </nav>
    
    <Link to="/juegos/">
      <img src={juegos} style={{width:'100%'}} />
    </Link>

  </Layout>)
}

export default Template

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        category
        overview
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
`
