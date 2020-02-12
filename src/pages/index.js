import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Yakult Personal Test Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Bem vindo!{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Este blog foi gerado pelo Gatsby e usa CMS pelo Netlify</p>
        <p>
          A página contém integração com styled components e gerenciamento de conteúdo com o Netlify
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Ir ao Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
