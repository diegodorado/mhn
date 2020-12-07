import React, {useRef, useEffect,useState} from "react"
import { PageProps, Link, navigate, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import vid01 from "../assets/videos/eje01.mp4"

const Page = ({ data, path }) => {

  return (
  <Layout bodyClass="home">
    <SEO title="1794-1810" />
    <video autoPlay={true} muted={true} >
      <source src={vid01} type="video/mp4" />
    </video>
  </Layout>
)
}

export default Page

export const query = graphql`
  query {
    image0: file(relativePath: {eq: "1794-1810.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: {eq: "1811-1820.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

