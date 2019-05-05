import React from 'react'
import './App.scss'

import '@fortawesome/fontawesome-free/css/all.css'
import 'bulma'

const App = () => {
  return (
    <div>
      <section className="hero has-background-black">
        <div className="hero-body">
          <div className="container center">
            <figure className="image">
              <img
                style={{ maxWidth: '128px' }}
                src="evil-corp-logo.png"
                alt="Evil Corp's logo." />
            </figure>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="notification is-info">
                <p className="is-size-5">
                  E Corp, known to Elliot by the derogatory name Evil Corp, is one of the largest multi-national conglomerates in the world.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="notification is-primary">
                <p className="is-size-5">
                  Fsociety is responsible for a DDoS attack that lead to the dismissal and potential criminal prosecution of Terry Colby, E Corp's former Chief Technology Officer (CTO).
                </p>
              </div>
            </div>
            <div className="column">
              <div className="notification is-warning">
                <p className="is-size-5">
                  In 1986, Lester Moore was made CEO. Under him, the company became the world's largest employer in 1990, Bank of E became the world's largest consumer bank in 1992.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
