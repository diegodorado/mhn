import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Inicio" />
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>You're currently on the page "{path}" which was built on {data.site.buildTime}.</p>
    <p>Loren ipsum dolor sit amet.</p>
    <Link to="/">Go bace homepage</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
