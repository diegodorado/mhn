import React, {useRef, useEffect,useState} from "react"
import { PageProps, Link, navigate, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import vid06 from "../assets/videos/eje06.mp4"
import vid07 from "../assets/videos/eje07.mp4"
import vid08 from "../assets/videos/eje08.mp4"
import vid09 from "../assets/videos/eje09.mp4"
import vid10 from "../assets/videos/eje10.mp4"
import vid11 from "../assets/videos/eje11.mp4"

const Page = ({ data, path }) => {
  const videos = [vid06,vid07,vid08,vid09,vid10,vid11]
  const axis = data.axis.nodes.map(a => {
    return {slug: a.fields.slug, title: a.frontmatter.category, intro: a.frontmatter.intro}
  })

  return (
  <Layout bodyClass="home2">
    <SEO title="1811-1820" />
    <h2>1811 - 1820</h2>
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
          </div>
        </div>
    )})}

  </Layout>
)
}

export default Page

export const pageQuery = graphql`
  query Axis1Query {
      axis: allMarkdownRemark(filter: {fields: {slug: {regex: "/1811/"}},frontmatter: {intro: {ne: null}}}, sort: {order: ASC, fields: frontmatter___index}) {
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

