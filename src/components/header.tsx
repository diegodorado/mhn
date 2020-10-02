import { Link } from "gatsby"
import React, { useState, useRef, useEffect } from "react"

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
      <Link to="/">Propuestas educativas</Link>
      <Link to="/">Sobre esta muestra</Link>
      <Link to="/">Mapa del sitio</Link>
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
    <nav className={ `burger-menu ${showMenu? 'open':''}` } >
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
          <Link to="/">Sobre esta muestra</Link>
          <Link to="/">Mapa del sitio</Link>
        </Dropdown>
      )}
    </nav>
  )
}

const Header: React.FC<DataProps> = ({ siteTitle, variant }) => {

  return (
    <header className={variant}>
      <MobileNav/>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <DesktopNav/>
    </header>
  )
}

export default Header
