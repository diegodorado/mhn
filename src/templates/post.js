import React from "react"
import { Link, graphql, withPrefix  } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import ZoomSlider from "../components/slider/Slider"

const remark = require('remark')
const toHAST = require(`mdast-util-to-hast`)
const hastToHTML = require(`hast-util-to-html`)

const Template = ({pageContext, data}) => {
  const { markdownRemark: post } = data
  const { category, title, overview, images } = post.frontmatter

  const ov = hastToHTML(toHAST(remark().parse(overview)))
  const year = data.markdownRemark.fields.slug.split("/")[1]


  const {previous, next } = pageContext
  const slides = images.map( i => {
    const sources = [
      i.mobile.childImageSharp.fluid,
      {
        ...i.desktop.childImageSharp.fluid,
        media: `(min-width: 768px)`,
      },
    ]
    return <Img key={i}  draggable={false}  fluid={sources} alt={i.alt} epigraph={i.epigraph} />
  })

  return (
  <Layout bodyClass="level1">
    <SEO title={title} />

    <nav className="pager object"> 
      {previous ? <Link to={previous} /> : <span/>}
      <div>
        <h2>{year} - {category}</h2>
        <h3>{title}</h3>
      </div>
      {next ? <Link to={next} /> : <span/>}
    </nav>
    
    <ZoomSlider slides={slides} activeDotColor={"#006699"}/>

    <section>
      <div className="overview"
        dangerouslySetInnerHTML={{ __html: ov}}
      />
    </section>

    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />

    <nav className="pager object foot"> 
      {previous ? <Link to={previous} /> : <span/>}
      {next ? <Link to={next} /> : <span/>}
    </nav>
    
    <section>
      <figure>
        <Link to="/juegos/">
          <img src={withPrefix(`/juegos/banner.gif`)} alt="Juegos para todas las edades " style={{width:'100%'}} />
        </Link>
        <figcaption>
          <Link to="/juegos/">
            Juegos para todas las edades
          </Link>
        </figcaption>
      </figure>
    </section>

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
          mobile{ 
            childImageSharp {
              fluid(maxWidth: 1080, quality: 90, maxHeight: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          desktop{ 
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
