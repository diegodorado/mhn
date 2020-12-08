import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Footer: React.FC = () => {

  const data = useStaticQuery(graphql`
    query {
      fb: file(relativePath: { eq: "icons/fb.png" }) {
        childImageSharp {
          fluid(maxWidth: 58) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      web: file(relativePath: { eq: "icons/web.png" }) {
        childImageSharp {
          fluid(maxWidth: 58) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tw: file(relativePath: { eq: "icons/tw.png" }) {
        childImageSharp {
          fluid(maxWidth: 58) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ig: file(relativePath: { eq: "icons/ig.png" }) {
        childImageSharp {
          fluid(maxWidth: 58) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mhn: file(relativePath: { eq: "logos/logo-mhn.png" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      museos: file(relativePath: { eq: "logos/logo-museos.png" }) {
        childImageSharp {
          fluid(maxWidth: 106) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ministerio: file(relativePath: { eq: "logos/logo-ministerio.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <footer>
      <nav className="social">
        <a href="https://www.facebook.com/museohistoriconacionalargentina">
          <Img fluid={data.fb.childImageSharp.fluid} />
        </a>
        <a href="https://twitter.com/MuseoHistorico">
          <Img fluid={data.tw.childImageSharp.fluid} />
        </a>
        <a href="https://museohistoriconacional.cultura.gob.ar/">
          <Img fluid={data.web.childImageSharp.fluid} />
        </a>
        <a href="https://www.instagram.com/mhnarg/">
          <Img fluid={data.ig.childImageSharp.fluid} />
        </a>
      </nav>
      <nav className="links">
        <Link to="/propuestas-educativas/">Propuestas educativas</Link>
        <Link to="/sobre-esta-muestra/">Sobre esta muestra</Link>
        <Link to="/mapa-del-sitio/">Mapa del sitio</Link>
      </nav>
      <a href="https://museohistoriconacional.cultura.gob.ar/" className="mhn">
        <Img fluid={data.mhn.childImageSharp.fluid} />
      </a>
      <a href="https://museohistoriconacional.cultura.gob.ar/" className="museos">
        <Img fluid={data.museos.childImageSharp.fluid} />
      </a>
      <a href="https://museohistoriconacional.cultura.gob.ar/" className="ministerio">
        <Img fluid={data.ministerio.childImageSharp.fluid} />
      </a>
    </footer>
  )
}

export default Footer
