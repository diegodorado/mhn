import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

//todo: move away
const Contenidos = () => (
  <>
    <Link to="/1800-1810/">1800-1810</Link>
    <nav>
      <Link to="/1800-1810/reformista/">Reformista</Link>
      <Link to="/1800-1810/burocrata/">Burócrata</Link>
      <Link to="/1800-1810/invasiones/">Invasiones</Link>
      <Link to="/1800-1810/la-conspiracion/">La conspiración</Link>
      <Link to="/1800-1810/hacer-la-revolucion/">Hacer la revolución</Link>
    </nav>
    <Link to="/1811-1820/">1811-1820</Link>
    <nav>
      <Link to="/1811-1820/a-las-armas/">A las armas</Link>
      <Link to="/1811-1820/celeste-y-blanca/">Celeste y blanca</Link>
      <Link to="/1811-1820/aventura-europea/">Aventura europea</Link>
      <Link to="/1811-1820/un-rey-inca/">Un rey inca</Link>
      <Link to="/1811-1820/el-final/">El final</Link>
      <Link to="/1811-1820/muchos-rostros/">Muchos rostros</Link>
    </nav>
  </>
)

const SiteMapPage = ({ data, path }) => {
  return (
  <Layout bodyClass="sitemap">
    <SEO title="Mapa del sitio" />
    <h2>Mapa del sitio</h2>
    <Contenidos/>

  </Layout>
)
}

export default SiteMapPage

