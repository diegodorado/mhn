import React, {useState} from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import games from "./games.yml"

//    thumb: 6_Rompecabezas.jpg

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

    {games.games.map( g => {
      return (
        <div onClick={ ev => changeGame(g.url)} className="game" key={g.title}>
          <strong>{g.title}</strong>
          <br/>
          <span>{g.desciption}</span>
          <br/>
        </div>)
      })}

    <br/>
    <strong>Rompecabezas</strong>
    <ul>
    {games.jigsaws.map( g => {
      return (
        <li onClick={ ev => changeGame(g.url)} key={g.title}>
          <span>{g.title}</span>
        </li>)
      })}
    </ul>

    <br/>
    <strong>Para hacer con chiquitines</strong>
    <ul>
    {games.kids.map( g => {
      return (
        <li onClick={ ev => changeGame(g.url)} key={g.title}>
          <span>{g.title}</span>
        </li>)
      })}
    </ul>




  </Layout>
)
}

export default Page

