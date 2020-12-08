import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ data, path }) => {
  return (
  <Layout bodyClass="about">
    <SEO title="Sobre esta muestra" />
    <h2>Sobre esta muestra</h2>
    <p>El Museo Histórico Nacional desarrolló esta exhibición virtual en 2020, año de conmemoración de los 200 años del fallecimiento de Manuel Belgrano y 250 años de su nacimiento. A lo largo de la web se puede recorrer la biografía política de Manuel Belgrano en vinculación con el patrimonio del Museo.</p>
    <p>La web está organizada en dos grandes secciones: 1794 -1810 y 1811-1820. La primera está dedicada al período en el que Manuel Belgrano se desempeñó como funcionario colonial e impulsó distintas reformas. La segunda refiere a la etapa que se abre tras el inicio de la Revolución de Mayo, cuando Belgrano encabezó fuerzas militares, tomó medidas políticas, se embarcó en una misión diplomática y volvió a participar en la guerra, hasta su muerte.</p>
    <p>Además, pueden encontrarse propuestas para los diferentes niveles educativos y juegos para todas las edades.</p>
    
    <p>El contenido de esta web fue desarrollado íntegramente por el equipo del Museo Histórico Nacional. Todo el patrimonio que se exhibe pertenece a las colecciones del Museo. Cuenta con el asesoramiento de la <a href="https://bac.org.ar/" target="_blank">Biblioteca Argentina de Ciegos</a> para la descripción de las imágenes y el desarrollo de la página.</p>
    <p>Esta web está desarrollada bajo la licencia <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">CC BY-NC-ND</a></p>
    <p>Esta licencia permite reutilizar, copiar y distribuir el material en cualquier medio o formato únicamente sin adaptaciones, para uso no comercial exclusivamente y siempre con atribución a su creador. CC BY-NC-ND incluye los siguientes elementos:<br/><br/>
      BY – Debe darse crédito al creador.<br/>
      NC – Material para uso no comercial solamente.<br/>
      ND – No se permiten derivados ni adaptaciones del material.<br/>
    </p>
  </Layout>
)
}

export default Page

