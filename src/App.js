import React from 'react'
import './App.scss'

import '@fortawesome/fontawesome-free/css/all.css'
import 'bulma'

const App = () => {
  return (
    <div>
      <section className="hero is-fullheight has-background-black">
        <div className="hero-body">
          <div className="container center">
            <figure className="image">
              <img
                className=""
                style={{ maxWidth: '512px' }}
                src="evil-corp-logo.jpg"
                alt="Evil Corp's logo." />
            </figure>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
