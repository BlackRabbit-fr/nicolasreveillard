import React from 'react'

export default function footer() {
  return (
    <div>
      <footer className="footer has-background-dark has-text-centered is-vcentered">
        <div className="content has-text-centered has-text-white">
          <span>
            <i className="fas fa-envelope"></i>
            {'   '}
            <a href="mailto:nicolas.reveillard@laposte.net">
              nicolas.reveillard@laposte.net
            </a>{' '}
          </span>
          <br></br>
          <br></br>
          <span>Copyright © 2019 - Made by </span>
          <a href="https://trvd.fr " target="_blank">
            Théo
          </a>
        </div>
      </footer>
    </div>
  )
}
