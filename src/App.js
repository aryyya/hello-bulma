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
            <div className="column">
              <PrimaryInfoBox
                title="Evil Corp?"
                text="E Corp, known to Elliot by the derogatory name Evil Corp, is one of the largest multi-national conglomerates in the world."
                colorStyle={1}
                faIconClass="fas fa-ad" />
            </div>
            <div className="column">
              <PrimaryInfoBox
                title="Trivia?"
                text="Fsociety is responsible for a DDoS attack that lead to the dismissal and potential criminal prosecution of Terry Colby, E Corp's former Chief Technology Officer (CTO)."
                colorStyle={2}
                faIconClass="far fa-address-card" />
            </div>
            <div className="column">
              <PrimaryInfoBox
                title="History?"
                text="In 1986, Lester Moore was made CEO. Under him, the company became the world's largest employer in 1990, Bank of E became the world's largest consumer bank in 1992."
                colorStyle={3}
                faIconClass="far fa-angry" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <SecondaryInfoBox
                title="Evil"
                text="They are very evil."
                colorStyle={1}
                faIconClass="fas fa-align-justify" />
            </div>
            <div className="column is-one-third">
              <SecondaryInfoBox
                title="Mean"
                text="They are very mean."
                colorStyle={2}
                faIconClass="fas fa-align-left" />
            </div>
            <div className="column is-one-third">
              <SecondaryInfoBox
                title="Cold"
                text="They are very cold."
                colorStyle={3}
                faIconClass="fas fa-align-right" />
            </div>
            <div className="column is-one-third">
              <SecondaryInfoBox
                title="Tricky"
                text="They are very tricky."
                colorStyle={1}
                faIconClass="fas fa-angle-double-down" />
            </div>
            <div className="column is-one-third">
              <SecondaryInfoBox
                title="Devious"
                text="They are very devious."
                colorStyle={2}
                faIconClass="fas fa-angle-double-left" />
            </div>
            <div className="column is-one-third">
              <SecondaryInfoBox
                title="Slimy"
                text="They are very slimy."
                colorStyle={3}
                faIconClass="fas fa-angle-double-right" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const PrimaryInfoBox = ({
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
    <article className={`primary-info-box media notification ${colorClassNames}`}>
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
  )
}

const SecondaryInfoBox = ({
  title,
  text,
  faIconClass
}) => {
  return (
    <article className="secondary-info-box media notification has-background-white">
      <figure className="media-left">
        <span className="icon is-large">
          <i className={`fa-2x ${faIconClass}`}/>
        </span>
      </figure>
      <div className="media-content">
        <div className="content">
          <h1 className="title is-size-5">{title}</h1>
          <p className="subtitle is-size-6">{text}</p>
        </div>
      </div>
    </article>
  )
}

export default App
