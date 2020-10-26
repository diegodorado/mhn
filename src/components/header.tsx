import React, { useState, useRef, useEffect } from "react"
import { Link,  StaticQuery, graphql } from "gatsby"


import Logo from "../assets/logo.svg"

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

const Contenidos = () => (
  <StaticQuery
      query={graphql`
        query Links {
          allMarkdownRemark(sort: {order: ASC, fields: frontmatter___index}) {
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
      `}
      render={data => {
        const links = data.allMarkdownRemark.group
          .map( g => g.nodes[0])
          .map( n => {return {...n.fields,...n.frontmatter}})
          .sort((a,b) => a.index > b.index ? 1 : -1)
        return (
        <>
          <Link to="/1794-1810/">1794-1810</Link>
          <nav>
            {links.map( l => <Link key={l.slug} to={l.slug}>{l.category}</Link>)}
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
      )}}
    />

)

const DesktopNav = () => {
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
            <Contenidos />
          </Dropdown>
        )}
      </nav>

      <Link to="/propuestas-educativas/">Propuestas educativas</Link>
      <Link to="/sobre-esta-muestra/">Sobre esta muestra</Link>
      <Link to="/mapa-del-sitio/">Mapa del sitio</Link>
    </nav>
  )
}

const MobileNav = () => {
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
          <Contenidos />
          <Link to="/sobre-esta-muestra/">Sobre esta muestra</Link>
          <Link to="/mapa-del-sitio/">Mapa del sitio</Link>
        </Dropdown>
      )}
    </nav>
  )
}

const Header: React.FC<DataProps> = ({ siteTitle, variant }) => {

  return (
    <header>
      <MobileNav/>
      <h1>
        <Link to="/">
          <span>{siteTitle}</span>
          <Logo/>
        </Link>
      </h1>
      <DesktopNav/>
      <div className="home-logo">
        <Logo/>
      </div>

      <nav className="content" style={{display: 'none'}}>
        <Link to="/1794-1810/">1794-1810</Link>
        <Link to="/1811-1820/">1811-1820</Link>
      </nav>
    </header>
  )
}

export default Header
