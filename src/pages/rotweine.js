import React from 'react'

import SubpageHeader from '../components/SubpageHeader'
import WineNavigation from '../components/WineNavigation'

import { redWines, redPremiumWines } from './rotweine.json'

const onWineChange = (wine) => console.log('should change wine', wine)

const Wine = ({ wine }) => (
  <div className='simpleCart_shelfItem c-wine'>
    <div className='image'>
      <a>
        <img src={'/assets/images/wines/' + wine.image} />
      </a>
    </div>

    <div className='description'>
      <div>
        <div className='wine__vintage'>{wine.vintage}</div>
        <h4 className='item_name'>{wine.name ? wine.name : wine.varietal}</h4>

        <div className='item_systemname' style={{ display: 'none' }}>
          {wine.content}l
          {wine.name}
          {wine.varietal ? wine.varietal : ''}
          <div className='shop-link'>
            <div className='input'>
              <input type='text' defaultValue='1' className='item_Quantity' onChange={onWineChange(wine)}/>
              <br />
            </div>
            <div className='button'>
              <a className='item_add' href='javascript:;'>
                <span className='icon-i_basket' />
              </a>
            </div>
          </div>
          <div className='wine__costs'>
            <span className='content'>
              <span className='item_content'>{wine.content}l</span>
              {wine.content < 1 && <span className='liter-price'>wine.price</span>}
            </span>

            <span className='item_price visuallyhidden'>{wine.price}</span>

            <span className='c-price' />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Wines = ({ wines }) => (
  <div className='wine-list'>
    {wines.map((wine, index) => <Wine wine={wine} key={index}/>)}

    {/* <div>No wines</div> */}
  </div>
)

export default () => (
  <div className='content-container'>
    <SubpageHeader />

    <WineNavigation />

    <h2>{redWines.title}</h2>
    <Wines wines={redWines.list} />

    <h2>{redPremiumWines.title}</h2>
    <Wines wines={redPremiumWines.list} />

  </div>
)
