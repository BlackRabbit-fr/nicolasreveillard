import React, { useState } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Carousel, { Modal, ModalGateway } from 'react-images'

export default () => {
  const [modal, setModal] = useState([])
  const toggleModal = name => {
    if (name) setModal(name)
    else setModal([])
  }

  const data = useStaticQuery(graphql`
    query PapiersQuery {
      allContentfulOeuvresSurPapier {
        edges {
          node {
            carnets {
              fluid(resizingBehavior: SCALE, maxHeight: 500) {
                ...GatsbyContentfulFluid_tracedSVG
                aspectRatio
              }
              file {
                url
              }
              title
            }
            collage {
              fluid(resizingBehavior: SCALE, maxHeight: 500) {
                ...GatsbyContentfulFluid_tracedSVG
                aspectRatio
              }
              title
            }
            collages {
              file {
                url
              }
              title
            }
            femmes {
              fluid(resizingBehavior: SCALE, maxHeight: 600) {
                ...GatsbyContentfulFluid_tracedSVG
                aspectRatio
              }
              title
            }
            nusMasculins {
              file {
                url
              }
              title
            }
            paysages {
              file {
                url
              }
              title
            }
            urlYoutube
          }
        }
      }
    }
  `)
  const [edges] = data.allContentfulOeuvresSurPapier.edges

  var paysages = []
  {
    edges.node.paysages.map(i => {
      var img = {}
      img.src = 'http:' + i.file.url
      paysages.push(img)
    })
  }

  var masculins = []
  {
    edges.node.nusMasculins.map(i => {
      var img = {}
      img.src = 'http:' + i.file.url
      masculins.push(img)
    })
  }

  var collages = []
  {
    edges.node.collages.map(i => {
      var img = {}
      img.src = 'http:' + i.file.url
      collages.push(img)
    })
  }
  return (
    <div>
      <section className="section is-small isSection" id="carnets">
        <h1 className="title is-1 has-text-centered">Oeuvres sur papier</h1>
        <div className="columns is-desktop">
          <div className="column">
            <h1 className="title">Carnets</h1>
            <div id="containerCarnets">
              <img
                src={edges.node.carnets.file.url}
                style={{
                  zIndex: '0',
                }}
              />
              <div id="nusFeminins">
                <a>Nus Féminins</a>
              </div>
              <div id="visages">
                <a>Visages</a>
              </div>
              <div id="paysages">
                <a onClick={() => toggleModal(paysages)}>Paysages</a>{' '}
              </div>
              <div id="nusMasculins">
                <a onClick={() => toggleModal(masculins)}>Nus masculins</a>
              </div>
              <div id="videoAquarelles">
                <a href={edges.node.urlYoutube} target="_blank">
                  Vidéo d'aquarelles
                </a>{' '}
              </div>
              {/* <ul
                id="listCarnets"
              >
                <li className="slideshow">
                  <a href="#">Nus feminins</a>
                </li>
                <br />

                <li>
                  <a href="#">Visages</a>
                </li>
                <li>
                  <a onClick={() => toggleModal(paysages)}>Paysages</a>
                </li>

                <li>
                  <a onClick={() => toggleModal(masculins)}>Nus masculins</a>
                </li>
                <br />

                <li>
                  <a href={edges.node.urlYoutube} target="_blank">
                    Vidéo d'aquarelles
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="column has-text-centered">
            <Img fluid={edges.node.femmes.fluid} style={{ opacity: '0.8' }} />
          </div>
          <div className="column has-text-centered slideshow3">
            <h1 className="title">Collages</h1>

            <a onClick={() => toggleModal(collages)}>
              <Img fluid={edges.node.collage.fluid} />
            </a>
          </div>
        </div>
      </section>
      <ModalGateway>
        {modal.length > 0 ? (
          <Modal onClose={toggleModal}>
            <Carousel views={modal} frameProps={{ autoSize: 'height' }} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
