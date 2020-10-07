import { Link } from "gatsby"
import React from "react"

import FbIcon from "../assets/fb.svg"
import WebIcon from "../assets/web.svg"
import TwIcon from "../assets/tw.svg"
import IgIcon from "../assets/ig.svg"
import MinisterioLogo from "../assets/logo-ministerio.svg"
import MuseosLogo from "../assets/logo-museos.svg"
import MhnLogo from "../assets/logo-mhn.svg"

const Footer: React.FC = () => (
  <footer>
    <nav className="social">
      <Link to="/">
        <FbIcon />
      </Link>
      <Link to="/">
        <TwIcon />
      </Link>
      <Link to="/">
        <WebIcon />
      </Link>
      <Link to="/">
        <IgIcon />
      </Link>
    </nav>
    <nav className="links">
      <Link to="/propuestas-educativas/">Propuestas educativas</Link>
      <Link to="/sobre-esta-muestra/">Sobre esta muestra</Link>
      <Link to="/mapa-del-sitio/">Mapa del sitio</Link>
    </nav>
    <Link to="/" className="mhn">
      <MhnLogo />
    </Link>
    <Link to="/" className="museos">
      <MuseosLogo />
    </Link>
    <Link to="/" className="ministerio">
      <MinisterioLogo />
    </Link>
  </footer>
)

export default Footer
