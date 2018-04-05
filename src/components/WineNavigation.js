import React from 'react'
import Link from 'gatsby-link'
import { logo } from '../assets'

const WineLink = ({ to, icon, location}) => (
  <Link to={to}>
    <li className={location.pathname.startsWith(to) ? 'active' : ''}>
      <span className={icon}>
        <span className='path1' />
        <span className='path2' />
      </span>
    </li>
  </Link>
)

export default ({ location }) => (
  <div>
    <nav className='wine-navigation'>
      <ul>
        <WineLink to='/rotweine' location={location} icon='icon-i_red' />
        <WineLink to='/weissweine' location={location} icon='icon-i_white' />
        <WineLink to='/roseweine' location={location} icon='icon-i_rose' />
        <WineLink to='/sekt' location={location} icon='icon-i_champagne' />
      </ul>
    </nav>

    <div className='price-badge'>
      <img src='/assets/images/badge.svg' />
    </div>
  </div>
)
