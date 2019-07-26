import React, { useState } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Carousel, { Modal, ModalGateway } from 'react-images'

export default () => {
  const [modal, setModal] = useState(-1)
  const toggleModal = index => {
    if (index) setModal(index)
    else setModal(-1)
  }

  const data = useStaticQuery(graphql`
    query HuilesQuery {
      allContentfulHuiles {
        edges {
          node {
            huiles {
              fluid(resizingBehavior: SCALE, maxHeight: 500) {
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
      var img = {}
      img.src = 'http:' + i.file.url
      huiles.push(img)
    })
  }

  return (
    <div>
      <section
        className="section is-small isSection"
        id="autres"
        style={{ backgroundColor: '#c8bfb2' }}
      >
        <h1 className="title is-1 has-text-centered">Huiles sur toile</h1>
        <div className="columns is-multiline is-centered is-vcentered">
          {edges.node.huiles.map((img, index) => (
            <div className="column " key={index}>
              <a onClick={() => toggleModal(index)}>
                <Img fluid={img.fluid} />
              </a>
            </div>
          ))}
        </div>
      </section>
      <ModalGateway>
        {modal > -1 ? (
          <Modal onClose={toggleModal}>
            <Carousel currentIndex={modal} views={huiles} isFullScreen={true} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
