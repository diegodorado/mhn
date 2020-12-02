import React, { useState, useRef, useEffect } from "react"
import { Link,  useStaticQuery, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

type DataProps = {
  siteTitle: string
  variant: string
}

const Dropdown = ({ children, callback }) => {
  const node = useRef()

  const handleClick = e => {
    e.preventDefault()
    if (!node.current.contains(e.target)) callback()
  }

  useEffect(() => {
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <nav className="dropdown" ref={node}>
      {children}
    </nav>
  )
}

const Contenidos = ({ links }) => (

    <>
      {Object.entries(links).map(([k,v])=>{
        return (<React.Fragment key={k}>
          <Link to={v[0].slug}>{k}</Link>
          <nav>
            {v.map( l => <Link key={l.slug} to={l.slug}>{l.category}</Link>)}
          </nav>
          </React.Fragment>
        )
      }) }
    </>
)

const DesktopNav = ({links}) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = ev => {
    ev.preventDefault()
    ev.stopPropagation()
    setShowMenu(!showMenu)
  }

  return (
    <nav className="links">
      <nav>
        <Link to="/" onClick={toggleMenu}>
          Contenidos
        </Link>
        {showMenu && (
          <Dropdown callback={() => setShowMenu(false)}>
            <Contenidos links={links} />
          </Dropdown>
        )}
      </nav>

      <Link to="/propuestas-educativas/">Propuestas educativas</Link>
      <Link to="/sobre-esta-muestra/">Sobre esta muestra</Link>
      <Link to="/mapa-del-sitio/">Mapa del sitio</Link>
    </nav>
  )
}

const MobileNav = ({links}) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = ev => {
    ev.preventDefault()
    ev.stopPropagation()
    setShowMenu(!showMenu)
  }

  return (
    <nav className={ `burger-menu ${showMenu? 'open':''}` } aria-label="Menu"  >
      <Link to="/" onClick={toggleMenu}>
        <span/>
        <span/>
        <span/>
      </Link>
      {showMenu && (
        <Dropdown callback={() => setShowMenu(false)}>
          <Link to="/">Inicio</Link>
          <Link to="/">Contenidos</Link>
          <Contenidos links={links} />
          <Link to="/sobre-esta-muestra/">Sobre esta muestra</Link>
          <Link to="/mapa-del-sitio/">Mapa del sitio</Link>
        </Dropdown>
      )}
    </nav>
  )
}

const Header: React.FC<DataProps> = ({ siteTitle, variant }) => {

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logos/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 486) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      links: allMarkdownRemark(sort: {order: ASC, fields: frontmatter___index}) {
        group(field: frontmatter___category, limit: 1) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              category
              index
            }
          }
        }
      }
    }
  `)

  const links = data.links.group
    .map( g => g.nodes[0])
    .map( n => {return {...n.fields,...n.frontmatter}})
    .sort((a,b) => a.index > b.index ? 1 : -1)
    .reduce( (a,n) => {
      const axis = n.slug.split("/")[1] 
      if(!a[axis])
        a[axis] = []
      a[axis].push(n)
      return a
    },{})

  return (
    <header>
      <MobileNav links={links}/>
      <h1>
        <Link to="/">
          <span>{siteTitle}</span>
          <Img fluid={data.logo.childImageSharp.fluid} />
        </Link>
      </h1>
      <DesktopNav links={links}/>
      <div className="home-logo">
        <Img fluid={data.logo.childImageSharp.fluid} />
      </div>

      <nav className="content" style={{display: 'none'}}>
        <Link to="/1794-1810/">1794-1810</Link>
        <Link to="/1811-1820/">1811-1820</Link>
      </nav>
    </header>
  )
}

export default Header
