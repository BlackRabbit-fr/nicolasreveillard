import React, { useState } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'

export default () => {
  const [modal, setModal] = useState(-1)
  const toggleModal = (e, index) => {
    e.preventDefault()
    if (index) setModal(index)
    else setModal(-1)
  }

  const data = useStaticQuery(graphql`
    query HuilesQuery {
      allContentfulHuiles {
        edges {
          node {
            huiles {
              fluid(resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
                aspectRatio
              }
              file {
                url
              }
              title
            }
          }
        }
      }
    }
  `)
  const [edges] = data.allContentfulHuiles.edges

  var huiles = []
  {
    edges.node.huiles.map(i => {
      huiles.push(i.fluid)
    })
  }

  return (
    <div>
      <section
        className="section is-small isSection"
        id="autres"
        style={{ backgroundColor: '#c8bfb2' }}
      >
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
              }}
            >
              {props => (
                <h1
                  className="title is-1 has-text-centered"
                  style={{ ...props }}
                >
                  Huiles sur toile
                </h1>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
              }}
            >
              {props => (
                <div
                  className="columns is-multiline is-centered is-vcentered"
                  style={{ ...props }}
                >
                  {edges.node.huiles.map((img, index) => (
                    <div className="column is-2" key={index}>
                      <a onClick={e => toggleModal(e, index)}>
                        <Img fluid={img.fluid} alt={img.title} />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </section>
      <ModalGateway>
        {modal > -1 ? (
          <Modal
            onClose={toggleModal}
            styles={{
              blanket: base => ({
                ...base,
                backgroundColor: 'black',
              }),
            }}
          >
            <Carousel
              currentIndex={modal}
              views={huiles}
              slideStyle={{
                transition: 'transform 1000 ms ease',
                opacity: '700ms ease',
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
