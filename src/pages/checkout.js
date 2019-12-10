import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clear } from "../state/actions/index"
import { navigate } from "gatsby"
import SEO from "../components/seo"
import SubpageHeader from "../components/subpageheader"
import Cart from "../components/cart"
import Footer from "../components/footer"
import axios from "axios"
import "../assets/icons/style.css"
import "../scss/style.scss"

const CHECKOUT_URL = "https://schneckenhof-lb4-live/payment/checkout"
//"https://schneckenhof-lb4-live.herokuapp.com/payment/checkout"

const Checkout = () => {
  // Set State for Form Inputs use Hooks
  const [state, setState] = useState({
    realname: "",
    street: "",
    city: "",
    email: "",
    phone: "",
    zip: "",
    message: "",
    agreement1: false,
    agreement2: false,
  })

  // React Redux Dispatch to access actions
  const dispatch = useDispatch()

  // Access React Redux State Items
  const cartState = useSelector(state => state.cart)

  useEffect(() => {
    if (!(cartState.items.length > 0)) {
      navigate("/rotweine")
    }
  })

  const reset = () => {
    setState({
      realname: "",
      street: "",
      city: "",
      email: "",
      phone: "",
      message: "",
      zip: "",
      agreement1: false,
      agreement2: false,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formBody = {
      realname: state.realname,
      street: state.street,
      city: state.city,
      email: state.email,
      phone: state.phone,
      zip: state.zip,
      message: state.message,
      agreement: ["1", "1"],
      items: cartState.items,
      shipping: cartState.shipping,
      subtotal: cartState.total.toFixed(2),
      total: cartState.grandTotal.toFixed(2),
    }
    axios({
      method: "post",
      url: CHECKOUT_URL,
      data: JSON.stringify(formBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        dispatch(clear())
        navigate("/danke")
      })
      .catch(() => {
        dispatch(clear())
        navigate("/fehler")
      })
  }

  return (
    <>
      <SEO title={"Checkout"} />
      <div className="content-container">
        <div className="checkout">
          <SubpageHeader />
          <Cart checkout={true} />
          <form onSubmit={handleSubmit} id="appnavigation">
            <p>
              Bitte beachten Sie bei Ihrer Bestellung: Wir liefern in{" "}
              <strong>6</strong>er, <strong>12</strong>er oder{" "}
              <strong>18</strong>
              er Kartons!
              <br />
              <br />
            </p>
            <fieldset className="personal">
              <legend>Ihre Daten:</legend>
              <div className="form-group">
                <label htmlFor="realname">
                  Name:
                  <span className="hint">*</span>
                </label>
                <input
                  type="text"
                  id="realname"
                  name="realname"
                  className="required form-control"
                  value={state.realname}
                  onChange={e =>
                    setState({ ...state, realname: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="street">
                  Stra&szlig;e, Haus-Nr:
                  <span className="hint">*</span>
                </label>
                <input
                  type="text"
                  name="street"
                  id="street"
                  className="required form-control"
                  value={state.street}
                  onChange={e => setState({ ...state, street: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="zip">
                  PLZ:
                  <span className="hint">*</span>
                </label>
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  className="required form-control"
                  value={state.zip}
                  onChange={e => setState({ ...state, zip: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">
                  Wohnort:
                  <span className="hint">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="required form-control"
                  value={state.city}
                  onChange={e => setState({ ...state, city: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" id="email">
                  Email:
                  <span className="hint">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="required email form-control"
                  value={state.email}
                  onChange={e => setState({ ...state, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  Telefon (optional, bei evtl. Rückfragen):
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  value={state.phone}
                  onChange={e => setState({ ...state, phone: e.target.value })}
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-check">
                <label className="form-check-label" htmlFor="agreement-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    required
                    id="agreement-1"
                    name="agreement1"
                    checked={state.agreement1}
                    onChange={() =>
                      setState({
                        ...state,
                        agreement1: state.agreement1 ? false : true,
                      })
                    }
                  />
                  Ich habe die{" "}
                  <a href="/agb" target="_blank">
                    AGB
                  </a>{" "}
                  und die Informationen zum{" "}
                  <a href="/datenschutz" target="_blank">
                    Datenschutz
                  </a>{" "}
                  gelesen und akzeptiert.
                </label>
                <br />
              </div>

              <div className="form-check">
                <label className="form-check-label" htmlFor="agreement-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    required
                    id="agreement-2"
                    name="agreement2"
                    checked={state.agreement2}
                    onChange={() =>
                      setState({
                        ...state,
                        agreement2: state.agreement2 ? false : true,
                      })
                    }
                  />
                  Ich bestätige, dass ich volljährig bin
                </label>
                <br />
                <br />
              </div>

              <div className="form-group">
                <label htmlFor="message">Bemerkungen:</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                />
              </div>

              <p>
                <br />
                <br />
                <strong>Keine Abgabe an Jugendliche unter 18Jahren.</strong>
                <br />
                <br />
              </p>
              {/* <p>
                <label>
                  <input type='radio' name='pay_method' value='invoice' checked />Invoice
                </label>
                <label style={{ marginLeft: '20px' }}>
                  <input type='radio' name='pay_method' value='paypal' />Paypal
                </label>
              </p> */}
              <div className="form-group">
                <input
                  type="reset"
                  value="Zurück"
                  className="btn btn-link btn-secondary"
                  onClick={reset}
                />

                <input
                  type="submit"
                  name="button"
                  id="submitter"
                  className="btn btn-lg btn-primary"
                  value="Bestellung abschicken"
                />
                <input
                  type="reset"
                  value="Zur&uuml;cksetzen"
                  id="order"
                  className="hidden"
                />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Checkout
