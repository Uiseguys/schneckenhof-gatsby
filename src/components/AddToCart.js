import React, { useState } from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { add } from "../state/actions/index"

const AddToCart = ({ item }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const handleQuantityInput = e => {
    setQuantity(parseInt(e.target.value))
  }

  return (
    <div className="shop-link">
      <div className="input">
        <input
          type="text"
          className="item_Quantity"
          onChange={handleQuantityInput}
          value={quantity}
        />
        <br />
      </div>
      <div className="button">
        <a
          className="item_add"
          href="javascript:void(0);"
          onClick={() => dispatch(add(quantity, item))}
        >
          <span className="icon-i_basket" />
        </a>
      </div>
    </div>
  )
}

AddToCart.propTypes = {
  item: PropTypes.object,
}

export default AddToCart
