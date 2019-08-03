import React, { useState } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Carousel, { Modal, ModalGateway } from 'react-images'

export default () => {
  const [modal, setModal] = useState([])
  const toggleModal = (e, name) => {
    e.preventDefault()
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
              fluid(resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
                aspectRatio
              }
              title
            }
            collages {
              fluid(resizingBehavior: SCALE, maxHeight: 700) {
                ...GatsbyContentfulFluid_tracedSVG
                aspectRatio
              }
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
              fluid(resizingBehavior: SCALE, maxHeight: 700) {
                ...GatsbyContentfulFluid_tracedSVG
                aspectRatio
              }
              file {
                url
              }
              title
            }
            paysages {
              fluid(resizingBehavior: SCALE, maxHeight: 700) {
                ...GatsbyContentfulFluid_tracedSVG
                aspectRatio
              }
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
      paysages.push(i.fluid)
    })
  }

  var masculins = []
  {
    edges.node.nusMasculins.map(i => {
      masculins.push(i.fluid)
    })
  }

  var collages = []
  {
    edges.node.collages.map(i => {
      collages.push(i.fluid)
    })
  }
  return (
    <div>
      <section className="section is-small isSection" id="carnets">
        <h1
          className="title is-1 has-text-centered"
          style={{ marginBottom: '8rem' }}
        >
          Oeuvres sur papier
        </h1>
        <div className="columns is-desktop">
          <div className="column has-text-centered">
            <h1 className="title">Carnets</h1>

            <div id="containerCarnets">
              <img
                src={edges.node.carnets.file.url}
                style={{
                  zIndex: '0',
                }}
                alt={edges.node.carnets.title}
              />
              <div id="nusFeminins">
                <a>Nus Féminins</a>
              </div>
              <div id="visages">
                <a>Visages</a>
              </div>
              <div id="paysages">
                <a onClick={e => toggleModal(e, paysages)}>Paysages</a>{' '}
              </div>
              <div id="nusMasculins">
                <a onClick={e => toggleModal(e, masculins)}>Nus masculins</a>
              </div>
              <div id="videoAquarelles">
                <a href={edges.node.urlYoutube} target="_blank">
                  Vidéo d'aquarelles
                </a>{' '}
              </div>
            </div>
          </div>
          <div className="column has-text-centered">
            <Img
              fluid={edges.node.femmes.fluid}
              style={{ overflow: 'visible' }}
              imgStyle={{
                opacity: '0.8',
                objectFit: 'contain',
              }}
              alt={edges.node.femmes.title}
            />
          </div>
          <div className="column is-one-quarter-desktop has-text-centered slideshow3">
            <h1 className="title">Collages</h1>

            <a onClick={e => toggleModal(e, collages)}>
              <Img
                fluid={edges.node.collage.fluid}
                alt={edges.node.collage.title}
              />
            </a>
          </div>
        </div>
      </section>
      <ModalGateway>
        {modal.length > 0 ? (
          <Modal
            onClose={toggleModal}
            styles={{
              blanket: base => ({
                ...base,
                backgroundColor: 'black',
              }),
            }}
          >
            <Carousel views={modal} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
