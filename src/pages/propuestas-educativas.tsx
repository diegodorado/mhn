import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ data, path }) => {
  return (
  <Layout bodyClass="about">
    <SEO title="Propuestas educativas" />
    <h2>Propuestas para el aula</h2>

    <p>Estas actividades propuestas para acompañar la muestra virtual BELGRANO – <em>Transformar la realidad</em>, establecen temas transversales a la cronología de Manuel Belgrano.</p>
    <p>Cada cuadernillo presenta actividades que pueden ser leídas desde las computadoras escolares, celulares, aulas virtuales o de forma presencial. Las consignas de escritura o producción colectiva pueden ser realizadas en las carpetas, cuadernos, afiches o documentos compartidos, sin necesidad de imprimir las hojas.</p>

    <h3>Educación Inicial</h3>

    <Img fluid={data.inicial.childImageSharp.fluid} />

    <p>Estas cuatro propuestas abordan la figura de Manuel Belgrano a partir de preguntas y actividades de exploración. Buscan presentar posibles situaciones para compartir y socializar los saberes y prácticas cotidianas que tenían Manuel Belgrano y las personas contemporáneas a él. Si quieren, pueden mandar las producciones de las niñas y los niños a las redes sociales del museo, o hacer una muestra virtual propia sobre Manuel Belgrano.</p>

    <ul>
      <li> Cruzar el océano en barco </li>
      <li> Veo, veo, por el catalejo </li>
      <li> Tinta que deja huella </li>
      <li> Plantar semillas como ideas </li>
    </ul>

    <a href="https://museohistoriconacional.cultura.gob.ar/noticia/educacion-inicial-propuestas-para-el-aula/" target="_blank"> Click acá para descargar los materiales</a>

    <h3>Educación Primaria</h3>
    <Img fluid={data.primaria.childImageSharp.fluid} />

    <p>Estas secuencias de actividades proponen reflexionar sobre la fuerza de los símbolos para unir ideas y voluntades. También, invitan a analizar la producción pictórica existente en el Museo Histórico Nacional sobre Manuel Belgrano, para que las niñas y los niños pongan en juego cierta perspectiva histórica al describir y comprender situaciones del pasado, y compararlas con el presente.
    </p>

    <p>Primer ciclo:</p>
    <ul>
      <li>Historia en imágenes (recomendado para 1º grado)</li>
      <li>Retratos llenos de preguntas</li>
    </ul>

    <p>Segundo ciclo:</p>
    <ul>
      <li>El perfil de Manuel Belgrano</li>
      <li>El retrato que falta</li>
    </ul>

    <p>Cuadernillos docentes</p>
    <ul>
      <li>Orientaciones docentes para 1º grado</li>
      <li>Orientaciones docentes para 2º a 7º grado</li>
    </ul>

    <a href="https://museohistoriconacional.cultura.gob.ar/noticia/educacion-primaria-propuestas-para-el-aula/" target="_blank"> Click acá para descargar los materiales</a>

    <h3> Educación Media </h3>
    <Img fluid={data.media.childImageSharp.fluid} />


    <p>
    Cuatro recortes posibles que invitan a profundizar sobre temas complejos que se abordan en la muestra virtual y proponen otros recursos alternativos para la reflexión y comprensión de la figura de Manuel Belgrano, su participación política, sus ideas y su trayectoria como revolucionario.
    </p>

    <ul>
      <li>Bandera de Macha</li>
      <li>Belgrano y los proyectos monárquicos</li>
      <li>Indigenismo</li>
      <li>La Tarja de Potosí</li>
    </ul>

    <a href="https://museohistoriconacional.cultura.gob.ar/noticia/educacion-media-propuestas-para-el-aula/" target="_blank"> Click acá para descargar los materiales</a>

  </Layout>
)
}

export default Page

export const query = graphql`
  query {
    inicial: file(relativePath: {eq: "propuestas-educativas/inicial.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    media: file(relativePath: {eq: "propuestas-educativas/media.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    primaria: file(relativePath: {eq: "propuestas-educativas/primaria.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

