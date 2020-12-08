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
          fixed(width: 240) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      museos: file(relativePath: { eq: "logos/logo-museos.png" }) {
        childImageSharp {
          fixed(width: 106) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ministerio: file(relativePath: { eq: "logos/logo-ministerio.png" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <footer>
      <nav className="social">
        <Link to="https://www.facebook.com/museohistoriconacionalargentina">
          <Img fluid={data.fb.childImageSharp.fluid} />
        </Link>
        <Link to="https://twitter.com/MuseoHistorico">
          <Img fluid={data.tw.childImageSharp.fluid} />
        </Link>
        <Link to="https://museohistoriconacional.cultura.gob.ar/">
          <Img fluid={data.web.childImageSharp.fluid} />
        </Link>
        <Link to="https://www.instagram.com/mhnarg/">
          <Img fluid={data.ig.childImageSharp.fluid} />
        </Link>
      </nav>
      <nav className="links">
        <Link to="/propuestas-educativas/">Propuestas educativas</Link>
        <Link to="/sobre-esta-muestra/">Sobre esta muestra</Link>
        <Link to="/mapa-del-sitio/">Mapa del sitio</Link>
      </nav>
      <Link to="https://museohistoriconacional.cultura.gob.ar/" className="mhn">
        <Img fixed={data.mhn.childImageSharp.fixed} />
      </Link>
      <Link to="https://museohistoriconacional.cultura.gob.ar/" className="museos">
        <Img fixed={data.museos.childImageSharp.fixed} />
      </Link>
      <Link to="https://museohistoriconacional.cultura.gob.ar/" className="ministerio">
        <Img fixed={data.ministerio.childImageSharp.fixed} />
      </Link>
    </footer>
  )
}

export default Footer
