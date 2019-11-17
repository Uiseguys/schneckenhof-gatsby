import React, { useCallback } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { add, remove, clear } from "../state/actions/index"
import crypto from "crypto"

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <div className="itemRow">
      <div className="item-decrement">
        <a onClick={() => dispatch(remove(1, item))}> - </a>
      </div>
      <div className="item-quantity">{item.quantity}</div>
      <div className="item-increment">
        <a onClick={() => dispatch(add(1, item))}>+</a>
      </div>
      <div className="item-systemname">
        {item.content}l {item.name}
      </div>
      <div className="item-price">€{parseFloat(item.price).toFixed(2)}</div>
      <div className="item-total">€{item.total.toFixed(2)}</div>
      <div className="item-remove">
        <a
          className="cart-anchor"
          onClick={() => dispatch(remove(item.quantity, item))}
        >
          X
        </a>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object,
}

const Cart = () => {
  const dispatch = useDispatch()
  const cartState = useSelector(state => {
    return {
      count: state.cart.count,
      shipping: state.cart.shipping,
      total: state.cart.total,
      grandTotal: state.cart.grandTotal,
      items: state.cart.items,
    }
  })

  const renderCart = useCallback(() => {
    if (cartState.count > 0) {
      return (
        <aside
          className={
            location.pathname == "/checkout/" ? "cart checkout" : "cart"
          }
          role="button"
        >
          <div className="summary">
            <div className="quantity simpleCart_quantity">
              {cartState.count}
            </div>
            <span className="icon-i_basket" />
            <div className="grand-total simpleCart_grandTotal">
              €{cartState.grandTotal.toFixed(2)}
            </div>
          </div>

          <div className="details">
            <a
              className="empty-cart simpleCart_empty cart-anchor"
              onClick={() => dispatch(clear())}
            >
              X Korb leeren
            </a>
            <div className="cart-items">
              <div className="simpleCart_items">
                <div>
                  {cartState.items.map(item => (
                    <CartItem
                      item={item}
                      key={crypto.randomBytes(6).toString("hex")}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="simpleCart_total">
              €{cartState.total.toFixed(2)}
            </div>
            <div className="simpleCart_quantity">{cartState.count}</div>
            <div className="simpleCart_shipping">
              €{cartState.shipping.toFixed(2)}
            </div>
            <div className="simpleCart_grandTotal">
              €{cartState.grandTotal.toFixed(2)}
            </div>
            <div className="checkout-button">
              <a href="../checkout">&gt; Bestellen</a>
            </div>
          </div>
        </aside>
      )
    }
  })

  return <>{renderCart()}</>
}

Cart.propTypes = {
  pageContext: PropTypes.object,
}

export default Cart
