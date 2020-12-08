import React, {useRef, useEffect,useState} from "react"
import { PageProps, Link, navigate, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import vid01 from "../assets/videos/eje01.mp4"
import vid02 from "../assets/videos/eje02.mp4"
import vid03 from "../assets/videos/eje03.mp4"
import vid04 from "../assets/videos/eje04.mp4"
import vid05 from "../assets/videos/eje05.mp4"

const Page = ({ data, path }) => {
  const videos = [vid01,vid02,vid03,vid04,vid05]
  const axis = data.axis.nodes.map(a => {
    return {slug: a.fields.slug, title: a.frontmatter.category, intro: a.frontmatter.intro}
  })

  return (
  <Layout bodyClass="home2">
    <SEO title="1794-1810" />
    <section>
    <h2>1794 - 1810</h2>
    {axis.map( ({slug,title,intro},i) => {
      return (
        <div key={i} className="axis">
          <div className="left">
            <Link to={slug}>
              <video autoPlay={true} muted={true} loop={true} >
                <source src={videos[i]} type="video/mp4" />
              </video>
            </Link>
          </div>
          <div className="right">
            <h3>
              <Link to={slug}>{title}</Link>
            </h3>
            <p>{intro}</p>
            <Link to={slug}>Ver más</Link>
          </div>
        </div>
    )})}
    </section>

  </Layout>
)
}

export default Page

export const pageQuery = graphql`
  query Axis0Query {
      axis: allMarkdownRemark(filter: {fields: {slug: {regex: "/1794/"}},frontmatter: {intro: {ne: null}}}, sort: {order: ASC, fields: frontmatter___index}) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            intro
            category
            title
          }
        }
      }
  }
`

