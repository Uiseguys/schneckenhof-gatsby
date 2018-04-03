import React from 'react'
import Link from 'gatsby-link'
import { Trans, withI18n } from '@lingui/react'

import logo from '../assets/images/logo.svg'
import badge from '../assets/images/badge.svg'

// <div>
//   <h1>
//     <Trans>Hi people</Trans>
//   </h1>
//   <p><Trans>Welcome to your new Gatsby site.</Trans></p>
//   <Trans render="p">Now go build something great.</Trans>
//   <Link to={i18n.t`/page-2`}><Trans>Go to page 2</Trans></Link>
// </div>
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
      <div className='image' style={{ backgroundImage: `url('./assets/images/family.jpg')` }} />
      <div />
    </section>

    {/* <section className='reverse'>
      <div className='image' style='background-image: url(&#39;/assets/images/grapes.jpg&#39;);' />
      <div />
    </section> */}
  </div>
)

export default withI18n()(IndexPage)
