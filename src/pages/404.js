import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <section>
      <h2>404</h2>
      <p>Página no encontrada.</p>
    </section>
  </Layout>
)

export default NotFoundPage
