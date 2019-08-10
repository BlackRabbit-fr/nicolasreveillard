import React, { useState } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Carousel, { Modal, ModalGateway } from 'react-images'

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
        style={{ backgroundColor: '#c8bfb2', marginTop: '10px' }}
      >
        <h1 className="title is-1 has-text-centered">Huiles sur toile</h1>
        <div className="columns is-multiline is-centered is-vcentered">
          {edges.node.huiles.map((img, index) => (
            <div className="column is-2" key={index}>
              <a onClick={e => toggleModal(e, index)}>
                <Img fluid={img.fluid} alt={img.title} />
              </a>
            </div>
          ))}
        </div>
      </section>
      <ModalGateway>
        {modal > -1 ? (
          <Modal
            onClose={toggleModal}
            styles={{
              blanket: base => ({
                ...base,
                backgroundColor: 'black',
                transition: 'opacity 1000ms',
              }),
            }}
          >
            <Carousel currentIndex={modal} views={huiles} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
