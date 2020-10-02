import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
  <Layout>
    <SEO title="Inicio" />
    <img className="logoIntro" />
    <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div className="choose">
      <div className="side">
        <Img fluid={data.image0.childImageSharp.fluid} />
        <a href="/">VER 1800-1810</a>
      </div>
      <div className="side">
        <Img fluid={data.image1.childImageSharp.fluid} />
        <a href="/">VER 1811-1820</a>
      </div>
    </div>
  </Layout>
)
}

export default IndexPage

export const query = graphql`
  query {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
    image0: file(relativePath: {eq: "1800-1810.png"}) {
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

