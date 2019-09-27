import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Papiers from '../components/papiers'
import Huiles from '../components/huiles'
import Layout from '../components/layout'
import Footer from '../components/footer'
import '../css/mystyles.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const keywords = get(this, 'props.data.site.siteMetadata.keywords')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle}>
          <meta name="description" content={siteDescription} />
          <meta name="keywords" content={keywords} />
        </Helmet>
        <Hero />
        <Papiers />
        <Huiles />
        <Footer />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
