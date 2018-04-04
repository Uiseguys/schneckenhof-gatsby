import React from 'react'
import { logo } from '../assets'
export default () => (
  <div>
    <nav className='wine-navigation'>
      <ul>
        <li className='active'>
          <a href='../rotweine'>
            <span className='icon-i_red'>
              <span className='path1' />
              <span className='path2' />
            </span>
          </a>
        </li>

        <li className='active'>
          <a href='../weissweine'>
            <span className='icon-i_white'>
              <span className='path1' />
              <span className='path2' />
            </span>
          </a>
        </li>

        <li className='active'>
          <a href='../roseweine'>
            <span className='icon-i_rose'>
              <span className='path1' />
              <span className='path2' />
            </span>
          </a>
        </li>

        <li className='active'>
          <a href='../sekt'>
            <span className='icon-i_champagne'>
              <span className='path1' />
              <span className='path2' />
            </span>
          </a>
        </li>
      </ul>
    </nav>

    <div className='price-badge'>
      <img src='/assets/images/badge.svg' />
    </div>
  </div>
)
