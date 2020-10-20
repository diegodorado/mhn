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

  useEffect( () => {
    const vid = vidRef.current

    if (!vid) 
      return

    const handleEnded = () => {
      console.log('ended')
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
        <div className="chairL" onClick={() => navigate("/1794-1810/")}>
          <Img fluid={data.image0.childImageSharp.fluid} />
          <a href="/">VER 1794-1810</a>
        </div>
        <div className="chairR" onClick={() => navigate("/1811-1820/")}>
          <Img fluid={data.image1.childImageSharp.fluid} />
          <a href="/">VER 1811-1820</a>
        </div>
    </div>
  </Layout>
)
}

export default IndexPage

export const query = graphql`
  query {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
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

