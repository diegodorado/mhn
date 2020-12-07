import React, {useRef, useEffect,useState} from "react"
import { PageProps, Link, navigate, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import IntroSq from "../assets/intro-sq.mp4"
import IntroWide from "../assets/intro-wide.mp4"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const vidRef = useRef(null)
  const [wide, setWide] = useState(false)
  const [ended, setEnded] = useState(false)

  const lLink = "/1794-1810/burocrata/sello-consulado/"
  const rLink = "/"
  const lAlt = "Sillón de madera de jacarandá tallada, con apoyabrazos curvos y alargados. La parte superior del respaldo está coronada con un motivo tallado. El asiento  y el respaldo alto están tapizados en pana. Tiene marcas de las herramientas con las que se labraron a mano,  huella del trabajo de los artesanos. El sillón tiene las patas rectas acordes al estilo neoclásico. Aunque en términos estilísticos puede considerarse en una etapa de transición."
  const rAlt = "Silla Plegable de campaña, reclinada, con apoya brazos, hecha en madera, con asiento y respaldo de listones."

  useEffect( () => {
    const vid = vidRef.current

    if (!vid) 
      return

    const handleEnded = () => {
      setEnded(true)
    }

    const handleResize = () => {
      setWide(wide => {
        const w = window.innerWidth > 768
        if ( w !== wide ){
          setEnded(false)
          vid.load()
        }
        return w
      })
    }

    handleResize()

    window.addEventListener("resize", handleResize);
    vid.addEventListener("ended", handleEnded)
    return () => {
      window.removeEventListener("resize", handleResize)
      vid.removeEventListener("ended", handleEnded)
    }

  },[])

  return (
  <Layout bodyClass="home">
    <SEO title="Inicio" />
    <div className={ `intro ${ ended ? 'ended' : 'playing'} ${ wide ? 'wide' : 'small'}` }>
      <video ref={vidRef} autoPlay={true} muted={true} >
        <source src={wide ? IntroWide : IntroSq} type="video/mp4" />
      </video>
        <p>Fue reformista y después revolucionario. Fue republicano y luego monárquico. Tuvo victorias y también derrotas. Muchas variaciones pero una constante: la confianza en la acción para modificar el mundo. A esa certeza dedicó su vida Manuel Belgrano.</p>
        <div className="chairL" onClick={() => navigate(lLink)}>
          <Img fluid={data.image0.childImageSharp.fluid} alt={lAlt} />
          <Link to={lLink}>VER 1794-1810</Link>
        </div>
        <div className="chairR" onClick={() => navigate(rLink)}>
          <Img fluid={data.image1.childImageSharp.fluid} alt={rAlt} />
          <Link to={rLink}>VER 1811-1820</Link>
        </div>
    </div>
  </Layout>
)
}

export default IndexPage

export const query = graphql`
  query {
    image0: file(relativePath: {eq: "1794-1810.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: {eq: "1811-1820.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

