import React from 'react'
import './App.scss'
import classnames from 'classnames'

import '@fortawesome/fontawesome-free/css/all.css'
import 'bulma'

const App = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <div className="container center">
            <figure className="image">
              <img
                style={{ maxWidth: '128px', filter: 'invert(1)' }}
                src="evil-corp-logo.png"
                alt="Evil Corp's logo." />
            </figure>
          </div>
        </div>
      </section>
      <section className="section has-background-light">
        <div className="container">
          <div className="columns">
            <InfoBox
              title="Evil Corp?"
              text="E Corp, known to Elliot by the derogatory name Evil Corp, is one of the largest multi-national conglomerates in the world."
              colorStyle={1}
              faIconClass="fas fa-ad" />
            <InfoBox
              title="Trivia?"
              text="Fsociety is responsible for a DDoS attack that lead to the dismissal and potential criminal prosecution of Terry Colby, E Corp's former Chief Technology Officer (CTO)."
              colorStyle={2}
              faIconClass="far fa-address-card" />
            <InfoBox
              title="History?"
              text="In 1986, Lester Moore was made CEO. Under him, the company became the world's largest employer in 1990, Bank of E became the world's largest consumer bank in 1992."
              colorStyle={3}
              faIconClass="far fa-angry" />
          </div>
        </div>
      </section>
    </div>
  )
}

const InfoBox = ({
  title,
  text,
  colorStyle,
  faIconClass
}) => {
  const colorClassNames = classnames(
    { 'is-info':    colorStyle === 1 },
    { 'is-primary': colorStyle === 2 },
    { 'is-warning': colorStyle === 3 }
  )
  return (
    <div className="column">
      <article className={`media notification ${colorClassNames}`}>
        <figure className="media-left">
          <span className="icon is-medium">
            <i className={`fa-2x ${faIconClass}`} />
          </span>
        </figure>
        <div className="media-content">
          <div className="content">
            <h1 className="title is-size-5">{title}</h1>
            <p className="is-size-6">{text}</p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default App
