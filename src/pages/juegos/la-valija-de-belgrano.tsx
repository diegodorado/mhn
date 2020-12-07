import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Page = ({ data, path }) => {
  return (
  <Layout bodyClass="about">
    <SEO title="Juegos para todas las edades" />
    <h2>Juegos para todas las edades</h2>



  <iframe frameborder="0" width="1200px" height="675px" src="https://view.genial.ly/5f5f887e1c33852b41244657" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe>


    <p>Retratos escondidos.</p>
  </Layout>
)
}

export default Page

