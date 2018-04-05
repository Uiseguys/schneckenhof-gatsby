import React from 'react'

const onWineChange = (wine) => {}

export default ({ wine }) => (
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