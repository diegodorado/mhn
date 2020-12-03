import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ data, path }) => {
  return (
  <Layout bodyClass="about">
    <SEO title="Sobre esta muestra" />
    <h2>Sobre esta muestra</h2>
    <p>Loren ipsum</p>
    <h3>Titulo 3</h3>
    <p>Loren ipsum</p>
  </Layout>
)
}

export default Page
