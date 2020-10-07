import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

//todo: move away
const Contenidos = () => (
  <>
    <Link to="/">1800-1810</Link>
    <nav>
      <Link to="/">Reformista</Link>
      <Link to="/">Burócrata</Link>
      <Link to="/">Invasiones</Link>
      <Link to="/">La conspiración</Link>
      <Link to="/">Hacer la revolución</Link>
    </nav>
    <Link to="/">1811-1820</Link>
    <nav>
      <Link to="/">A las armas</Link>
      <Link to="/">Celeste y blanca</Link>
      <Link to="/">Aventura europea</Link>
      <Link to="/">Un rey inca</Link>
      <Link to="/">El final</Link>
      <Link to="/">Muchos rostros</Link>
    </nav>
  </>
)


const SiteMapPage = ({ data, path }) => {
  return (
  <Layout bodyClass="sitemap">
    <SEO title="Mapa del sitio" />
    <p>Mapa del sitio</p>
    <Contenidos/>

  </Layout>
)
}

export default SiteMapPage

