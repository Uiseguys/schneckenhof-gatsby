import React from 'react'
import accounting from 'accounting'
import AddToCart from './AddToCart'
import AwwardBadge from './AwardBadge'

const onWineChange = (wine) => {};
import redwineImage from '../assets/images/wines/rot_liter.jpg'
import redwinePremiumImage from '../assets/images/wines/rot_premium.jpg'
import whitewineImage from '../assets/images/wines/weiss_liter.jpg'
import whitewinePremiumImage from '../assets/images/wines/weiss_premium.jpg'
import rosewineImage from '../assets/images/wines/rose_liter.jpg'
import rosewinePremiumImage from '../assets/images/wines/rose.jpg'
import champagneImage from '../assets/images/wines/sekt.jpg'



const priceInt = (price) => Math.floor(price)
const priceDecimals = (price) => Math.round((price - priceInt(price)) * 100)

const PriceInt = ({ price }) => <span className='price__int'>{priceInt(price)}</span>

const PriceDec = ({ price }) => <span className='price__decimals'>{priceDecimals(price) ? priceDecimals(price) : '00'}</span>


export default ({ wine }) => (
  <div className='simpleCart_shelfItem c-wine'>
    <div className='image'>

      <a>

          {(wine.type ==='red' && wine.premium) && (
            <img src={redwinePremiumImage} />
          )}
          {(wine.type ==='red' && !wine.premium) && (
              <img src={redwineImage} />
          )}

          {(wine.type ==='white' && wine.premium) && (
              <img src={whitewinePremiumImage} />
          )}
          {(wine.type ==='white' && !wine.premium) && (
              <img src={whitewineImage} />
          )}

          {(wine.type ==='rose' && wine.premium) && (
              <img src={rosewinePremiumImage} />
          )}
          {(wine.type ==='rose' && !wine.premium) && (
              <img src={rosewineImage} />
          )}

          {(wine.type ==='champagne' && wine.premium) && (
              <img src={champagneImage} />
          )}
          {(wine.type ==='champagne' && !wine.premium) && (
              <img src={champagneImage} />
          )}
      </a>
    </div>

    <AwwardBadge awardText={wine.awardText} awardLevel={wine.awardLevel} />

    <div className='description'>
      <div>
        <div className='wine__vintage'>{wine.vintage}</div>
        <h4 className='item_name'>{wine.name ? wine.name : wine.varietal}</h4>

        {wine.varietal && (
          <h4 className='item_varietal' style={{ height: 10 }}>
            {wine.varietal}
          </h4>
        )}
          {wine.availability && (
        <AddToCart item={wine} />
          )}

          {wine.availability && (
        <div className='wine__costs'>
          {wine.packaging && (
            <span className='content'>
              <span className='item_content'>{wine.packaging.displayName || wine.packaging.measure + wine.packaging.unitOfMeasure}</span>
              {/* {wine.content < 1 && <span className='liter-price'>{accounting.formatMoney(wine.price / (wine.content * 100) * 100, '€', 2, '.', ',')}/l</span>} */}
              {wine.packaging.measure < 1000 && (
                <span className='liter-price'>{accounting.formatMoney(wine.price / wine.packaging.measure * 1000, '€', 2, '.', ',')}/l</span>
              )}
            </span>
          )}

            {!wine.availability && (
                <span>Ausgetrunken. Ab Dezember wieder verfügbar</span>
            )}

          <span className='c-price'>
            <PriceInt price={wine.price} />
            <PriceDec price={wine.price} />
          </span>
        </div>
          )}
      </div>
    </div>
  </div>
)
