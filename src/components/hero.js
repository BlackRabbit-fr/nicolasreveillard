import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allContentfulBandeau {
        edges {
          node {
            asset1 {
              fluid(resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
                aspectRatio
              }
              title
            }
            asset2 {
              fluid(resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
                aspectRatio
              }
              title
            }
            citation
            titreDuSite
          }
        }
      }
    }
  `)
  const [edges] = data.allContentfulBandeau.edges
  console.log(edges)

  return (
    <div>
      <section className="hero is-fullheight header isSection">
        <div className="hero-head">
          <div className="columns is-gapless is-desktop" id="top">
            <div className="column">
              <Img
                className="bandeau1"
                fluid={edges.node.asset1.fluid}
                style={{ opacity: '0.8' }}
                alt={edges.node.asset1.title}
              />
            </div>
            <h1 className="title title-brand is-info">
              {edges.node.titreDuSite}
            </h1>
            <div className="column">
              <Img
                fluid={edges.node.asset2.fluid}
                style={{ opacity: '0.8' }}
                alt={edges.node.asset2.title}
              />
            </div>
          </div>
        </div>
        <div className="hero-body is-block has-text-centered is-paddingless">
          <blockquote>
            <h1 className="title has-text-white quote">
              {edges.node.citation}
            </h1>
          </blockquote>
        </div>
        <div className="hero-footer has-text-centered">
          <i className="fas fa-angle-down fa-2x"></i>
        </div>
      </section>
      <nav
        className="navbar is-info is-fixed-bottom "
        role="navigation"
        aria-label="main navigation"
        id="navbar"
      >
        <div className="navbar-brand">
          <a
            className="navbar-item has-text-weight-bold"
            id="brand"
            href="#top"
          >
            Nicolas Réveillard
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            id="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            // onClick="openMenu()"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start "></div>
          <div className="navbar-end"> </div>
        </div>
      </nav>
    </div>
  )
}
