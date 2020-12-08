import React, {useState} from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import games from "./games.yml"



const Page = ({ data, path }) => {
  const [url, setUrl] = useState(games.games[0].url)
  const changeGame = (url) => {
    setUrl(url)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
  <Layout bodyClass="games">
    <SEO title="Juegos para todas las edades" />
    <h2>Juegos para todas las edades</h2>
    <div className="iframeHolder" >
        <iframe frameBorder="0" width="1200px" height="675px" src={url} type="text/html" allowscriptaccess="always" allowFullScreen={ true } scrolling="yes" allownetworking="all"></iframe>
    </div>

    <div className="game-list">
    {games.games.map( g => {
      return (
        <div onClick={ ev => ev.preventDefault() || changeGame(g.url)} className="game" key={g.title}>
          <h3>{g.title}</h3>
          <span>{g.description}</span>
          <br/>
          <br/>
          <img src={`/juegos/${g.thumb}`} alt={g.title} />
          <br/>
          <br/>
          <a href={g.url}>Ir al juego</a>
        </div>)
      })}
    </div>

    <br/>
    <div className="game">
      <h3>Rompecabezas</h3>
      <span>Descubrí los objetos.</span>
      <br/>
      <br/>
      <img src={`/juegos/6_Rompecabezas.jpg`} alt="Rompecabezas" />
    </div>
    <div className="game-list">
    {games.jigsaws.map( g => {
      return (
        <div onClick={ ev => ev.preventDefault() || changeGame(g.url)} className="game" key={g.title}>
          <span>{g.title}</span>
          <br/>
          <a href={g.url}>Ir al juego</a>
        </div>)
      })}
    </div>

    <br/>
    <h3>Para hacer con chiquitines</h3>
    <div className="game-list">
    {games.kids.map( g => {
      return (
        <div onClick={ ev => ev.preventDefault() || changeGame(g.url)} className="game" key={g.title}>
          <span>{g.title}</span>
          <br/>
          <br/>
          <img src={`/juegos/${g.thumb}`} alt={g.title} />
          <br/>
          <br/>
          <a href={g.url}>Ir al juego</a>
        </div>)
      })}
    </div>



  </Layout>
)
}

export default Page

