import React from 'react'

export default function footer() {
  return (
    <div>
      <footer className="footer has-background-dark has-text-centered is-vcentered">
        <div className="content has-text-centered has-text-white">
          <span>
            <i className="fas fa-envelope"></i>
            {'   '}
            <a href="mailto:nireve@laposte.net">nireve@laposte.net</a>{' '}
          </span>
          <br></br>
          <br></br>
          Lien vers un ami dessinateur de BD :{' '}
          <a href="https://www.fessenfer.fr/">Simon Penel</a>
          <br></br>
          <span>Copyright © 2019 - Made by </span>
          <a href="https://trvd.fr" target="_blank">
            Théo
          </a>
        </div>
      </footer>
    </div>
  )
}
