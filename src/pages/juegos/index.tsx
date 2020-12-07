import React, {useState} from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Page = ({ data, path }) => {
  const [title, setTitle] = useState("Retratos escondidos")
  const [url, setUrl] = useState("https://view.genial.ly/5f5f8843aeba3b0d96ca8f91")

  return (
  <Layout bodyClass="about">
    <SEO title="Juegos para todas las edades" />
    <h2>Juegos para todas las edades</h2>
    <h3>{title}</h3>
    <div style={{ width: '100%' }}>
      <div style={{ position: 'relative', paddingBottom: '56.25%',paddingTop: 0,height: 0 } }>
        <iframe style={{width: '100%',height: '100%',position:'absolute',top:0,left:0}} frameBorder="0" width="1200px" height="675px" src={url} type="text/html" allowscriptaccess="always" allowFullScreen={ true } scrolling="yes" allownetworking="all"></iframe>
      </div>
    </div>

    <ul>
      <li>
        <h3> Retratos escondidos.  </h3>
        <p>Para poner a prueba tu memoria visual</p>
      </li>
      <li>
        <h3>La valija de Belgrano</h3>
        <p>Ayudá a Belgrano con el equipaje para su primer viaje como revolucionario</p>
      </li>
    </ul>




la-valija-de-belgrano
Ayudá a Belgrano con el equipaje para su primer viaje como revolucionario
https://view.genial.ly/5fa97d0b347e0f0d17e47935


Aventura europea con Belgrano
aventura-europea-con-belgrano
Tirá el dado y acompañá a Belgrano en el famoso “Serpientes y Escaleras”
https://view.genial.ly/5f3ed0f6fc68630d97057464/game-serpientes-y-escaleras-aventura-europea-con-belgrano

Hacer bandera
hacer-bandera
Personalizá una bandera con símbolos y colores que te representen a vos y a tu grupo
https://view.genial.ly/5f58ffe41835080da96a00bf/interactive-content-hacer-bandera

Rompecabezas
rompecabezas
Manuel Belgrano por Fortunato Fontana
https://www.jigsawplanet.com/?rc=play&pid=093cafd2cbdb
manuel-belgrano-por-fortunato-fontana

Captura de Buenos Aires
captura-de-buenos-aires
https://www.jigsawplanet.com/?rc=play&pid=39911afe3690

Vista de Buenos Aires de 1790
vista-de-buenos-aires-de-1790
https://www.jigsawplanet.com/?rc=play&pid=2948eddad26c

Escribanía de plata con frascos de tinta y arena
escribania-de-plata-con-frascos-de-tinta-y-arena
https://www.jigsawplanet.com/?rc=play&pid=338db6d0ce90

Escudo de 1813
escudo-de-1813
https://www.jigsawplanet.com/?rc=play&pid=20d3fa76fc7c

Para hacer con chiquitines

Veo veo con mi catalejo
veo-veo-con-mi-catalejo
https://view.genial.ly/5f5f887e1c33852b41244657/learning-experience-challenges-veo-veo-con-mi-catalejo-veo-lejos

Tinta que deja huella
tinta-que-deja-huella
https://view.genial.ly/5f74d39d09ee130d09804e79/learning-experience-challenges-tinta-que-deja-huella

Plantar semillas como ideas
plantar-semillas-como-ideas
https://view.genial.ly/5f74bfdc60fdea0d08cb2581/learning-experience-challenges-plantar-semillas-como-ideas

La Tarja sonora
la-tarja-sonora
Una invitación a mirar de cerca la Tarja de Potosí e imaginar sus sonidos
https://view.genial.ly/5f6e46c81722e90da36f863b/interactive-image-la-tarja-de-potosi-museo-historico-nacional

Cruzar el océano en barco
cruzar-el-oceano-en-barco
https://view.genial.ly/5f6e4b57d911060d5ce26b91/learning-experience-challenges-cruzar-el-oceano-en-barco




    <p>Retratos escondidos.</p>
  </Layout>
)
}

export default Page

