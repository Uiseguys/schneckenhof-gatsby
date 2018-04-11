import React from 'react'
import Link from 'gatsby-link'
import { Trans, withI18n } from '@lingui/react'

import logo from '../assets/images/logo.svg'
import badge from '../assets/images/badge.svg'
import family from '../assets/images/family.jpg'
import grapes from '../assets/images/grapes.jpg'
import wines from '../assets/images/wines.jpg'
import party1 from '../assets/images/party1.jpg'
import restaurant from '../assets/images/restaurant.jpg'

import config from './index.json'

const Teaser = (props) => (
  <div className='teaser'>
    <div className='icon'>
      <span className={'icon-i_' + props.data.icon} />
    </div>
    <h2>{props.data.title}</h2>
    <h3>{props.data.subtitle}</h3>
    <p>{props.data.text} </p>
  </div>
)

const IndexPage = ({ i18n }) => (
  <div className='startseite content-container'>
    <header>
      <div className='branding'>
        <img src={logo} />
      </div>

      <div>
        <img src={badge} />
      </div>
    </header>

    <section>
      <div className='image' style={{ backgroundImage: `url(${family})` }} />
      <Teaser data={config.index.teaser.vineyard} />
    </section>

    <section className='reverse'>
      <div className='image' style={{ backgroundImage: `url(${grapes})` }} />
      <Teaser data={config.index.teaser.grapes} />
    </section>

    <section>
      <div className='image' style={{ backgroundImage: `url(${wines})` }} />
      <div>
        <Teaser data={config.index.teaser.wines} />
        <div className='cta'>
          <a href='weine'>Mehr über unsere Weine</a>
        </div>
      </div>
    </section>

    <section className='reverse'>
      <div className='image' style={{ backgroundImage: `url(${party1})` }} />
      <div>
        <Teaser data={config.index.teaser.events} />
        <div className='cta'>
          <a href='aktuelles'>Aktuelle Veranstaltungen</a>
        </div>
      </div>
    </section>

    <section>
      <div className='image' style={{ backgroundImage: `url(${restaurant})` }} />
      <div>
        <Teaser data={config.index.teaser.restaurant} />
        <div className='cta'>
          <a href='gasthaus'>Mehr über unser Gasthaus</a>
        </div>
      </div>
    </section>
  </div>
)

export default withI18n()(IndexPage)
