import React from 'react'

export default function footer() {
  return (
    <div>
      <footer className="footer has-background-dark has-text-centered is-vcentered">
        <div className="content has-text-centered has-text-white">
        <br></br>
          <span>
            <i className="fas fa-envelope"></i>
            {'   '}
            nireve@laposte.net{' '}
          </span>
          <br></br>
          <br></br>
          Lien vers un ami dessinateur de BD :{' '}
          <a href="https://www.fessenfer.fr/" target="_blank">
            Simon Penel
          </a>
          <br></br>
          <br></br>
          Copyright © 2019 - Réalisé par{' '}
          <a href="https://trvd.fr" target="_blank">
            Théo
          </a>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </footer>
    </div>
  )
}
