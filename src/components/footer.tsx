import { Link } from "gatsby"
import React from "react"

import FbIcon from "../assets/fb.svg"
import WebIcon from "../assets/web.svg"
import TwIcon from "../assets/tw.svg"
import IgIcon from "../assets/ig.svg"
import MinisterioLogo from "../assets/logo-ministerio.svg"
import MuseosLogo from "../assets/logo-museos.svg"
import MhnLogo from "../assets/logo-mhn.svg"

const Footer:React.FC = () => (
  <footer>
    <nav className="social">
      <Link to="/"><FbIcon/></Link>
      <Link to="/"><TwIcon/></Link>
      <Link to="/"><WebIcon/></Link>
      <Link to="/"><IgIcon/></Link>
    </nav>
    <nav className="extra">
      <Link to="/">Propuestas educativas</Link>
      <Link to="/">Sobre esta muestra</Link>
      <Link to="/">Mapa del sitio</Link>
    </nav>
    <nav className="logos">
      <Link to="/"><MinisterioLogo/></Link>
      <Link to="/"><MuseosLogo/></Link>
      <Link to="/"><MhnLogo/></Link>
    </nav>
  </footer>
)

export default Footer
