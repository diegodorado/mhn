import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SiteMapPage = ({ data, path }) => {
  const links = data.links.nodes
    .map( n => {return {...n.fields,...n.frontmatter}})
    .reduce( (a,n) => {
      const axis = n.slug.split("/")[1] 
      if(!a[axis])
        a[axis] = []

      if(n.intro !== null)
        a[axis].push({...n, posts:[]})

      a[axis][a[axis].length - 1].posts.push(n)

      return a
    },{})

  return (
  <Layout bodyClass="sitemap">
    <SEO title="Mapa del sitio" />
    <section>
    <h2>Mapa del sitio</h2>
      {Object.entries(links).map(([k,v])=>{
        return (<React.Fragment key={k}>
          <Link to={`/${k}`}>{k}</Link>
          <nav>
            {v.map( l => {
              return (<React.Fragment key={l.slug}>
                <Link to={l.slug}>{l.category}</Link>
                <nav>
                  {l.posts.map( p => <Link key={p.slug} to={p.slug}>{p.title}</Link>)}
                </nav>
              </React.Fragment>)})}
          </nav>
        </React.Fragment>)
      })}
      <Link to="/juegos">Juegos para todas las edades</Link>
      <Link to="/propuestas-educativas/">Propuestas educativas</Link>
      <Link to="/sobre-esta-muestra/">Sobre esta muestra</Link>
      <Link to="/mapa-del-sitio/">Mapa del sitio</Link>
    </section>
  </Layout>
)
}

export default SiteMapPage


export const pageQuery = graphql`
  query SiteMapQuery {
      links: allMarkdownRemark(sort: {order: ASC, fields: frontmatter___index}) {
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

