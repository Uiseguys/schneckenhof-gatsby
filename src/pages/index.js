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
      <div />
    </section>

    <section className='reverse'>
      <div className='image' style={{ backgroundImage: `url(${grapes})` }} />
      <div />
    </section>

    <section>
      <div className='image' style={{ backgroundImage: `url(${wines})` }} />
      <div className='cta'>
        <a href='weine'>Mehr über unsere Weine</a>
      </div>
    </section>

    <section className='reverse'>
      <div className='image' style={{ backgroundImage: `url(${party1})` }} />
      <div />
    </section>

    <section>
      <div className='image' style={{ backgroundImage: `url(${restaurant})` }} />
      <div className='cta'>
        <a href='weine'>Mehr über unsere Weine</a>
      </div>
    </section>
  </div>
)

export default withI18n()(IndexPage)
