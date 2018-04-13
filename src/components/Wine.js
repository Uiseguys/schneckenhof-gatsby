import React from 'react'
import accounting from 'accounting'
import AddToCart from './AddToCart'

const onWineChange = (wine) => {}

const priceInt = (price) => Math.floor(price)
const priceDecimals = (price) => Math.round((price - priceInt(price)) * 100)

const PriceInt = ({ price }) => <span className='price__int'>{priceInt(price)}</span>

const PriceDec = ({ price }) => <span className='price__decimals'>{priceDecimals(price) ? priceDecimals(price) : ''}</span>

export default ({ wine }) => (
  <div className='simpleCart_shelfItem c-wine'>
    <div className='image'>
      <a>
        <img src={wine.image} />
      </a>
    </div>

    <div className='description'>
      <div>
        <div className='wine__vintage'>{wine.vintage}</div>
        <h4 className='item_name'>{wine.name ? wine.name : wine.varietal}</h4>

        {wine.varietal && (
          <h4 className='item_varietal' style={{ height: 10 }}>
            {wine.varietal}
          </h4>
        )}

        <AddToCart item={wine} />

        {/* <div className='shop-link'>
          <div className='input'>
            <input type='text' defaultValue='1' className='item_Quantity' onChange={onWineChange(wine)} />
            <br />
          </div>
          <div className='button'>
            <a className='item_add' href='javascript:;'>
              <span className='icon-i_basket' />
            </a>
          </div>
        </div> */}
        <div className='wine__costs'>
          <span className='content'>
            <span className='item_content'>{wine.content}l</span>
            {wine.content < 1 && <span className='liter-price'>{accounting.formatMoney(wine.price / (wine.content * 100) * 100, '€', 2, '.', ',')}/l</span>}
          </span>

          <span className='item_price visuallyhidden'>{wine.price}</span>

          <span className='c-price'>
            <PriceInt price={wine.price} />
            <PriceDec price={wine.price} />
          </span>
        </div>
      </div>
    </div>
  </div>
)
