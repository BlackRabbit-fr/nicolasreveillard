import React from 'react'
import Img from 'gatsby-image'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default ({ data }) => (
  <div>
    <section className="hero is-fullheight header isSection">
      <div className="hero-head">
        <h1 className="title title-brand is-info">{data.titreDuSite}</h1>
        <div className="columns is-gapless is-desktop" id="top">
          {data.bandeau1.map((img, index) => {
            return (
              <div className="column" key={img.title}>
                <Img key={img.title} fluid={img.fluid} id={img.title} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="hero-body is-block has-text-centered is-paddingless">
        <blockquote>
          <h1 className="title has-text-white quote">{data.citation}</h1>
        </blockquote>
      </div>
      <div className="hero-footer has-text-centered">
        <i className="fas fa-angle-down fa-2x"></i>
      </div>
    </section>
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
      id="navbar"
    >
      <div className="navbar-brand">
        <a className="navbar-item has-text-weight-bold" id="brand" href="#top">
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
        <div className="navbar-end"></div>
      </div>
    </nav>
  </div>
)
