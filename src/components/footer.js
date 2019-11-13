import React, { useState } from "react"
import logo from "../assets/images/logo_visual.svg"
import axios from "axios"

const Footer = () => {
  const [state, setState] = useState({
    alertOpacity: "0",
    alertMessage: "",
    alertClasses: "alert alert-info",
    inputValue: "",
  })
  const handleInputValue = value => {
    setState({ ...state, inputValue: value })
  }

  const handleNewsletterSubmit = e => {
    e.preventDefault()
    const bodyFormData = {
      email: state.inputValue,
    }
    // Making Create Recipient Request
    axios({
      method: "post",
      url: "https://schneckenhof-lb4-live.herokuapp.com/newsletters",
      data: JSON.stringify(bodyFormData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        //handle success
        setState({
          ...state,
          alertOpacity: "1",
          alertClasses: "alert alert-success",
          alertMessage: "Ihre Email wurde in den Verteiler aufgenommen",
        })
        setTimeout(() => {
          setState({ ...state, alertOpacity: "0" })
        }, 5000)
      })
      .catch(() => {
        //handle error
        setState({
          ...state,
          alertOpacity: "1",
          alertClasses: "alert alert-danger",
          alertMessage:
            "Die Registrierung war nicht erfolgreich. Bitte versuchen Sie es noch einmal",
        })
        setTimeout(() => {
          setState({ ...state, alertOpacity: "0" })
        }, 5000)
      })
  }

  return (
    <>
      <footer>
        <div
          role="alert"
          className={state.alertClasses}
          style={{ position: "fixed", opacity: `${state.alertOpacity}` }}
        >
          {state.alertMessage}
        </div>
        <aside className="content-container text-light">
          <h2>Newsletter</h2>
          <form onSubmit={e => handleNewsletterSubmit(e)}>
            <div className="form-group row">
              <label htmlFor="email" id="newsletters-label">
                Email
              </label>
              <div className="col-6">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={state.inputValue}
                  onChange={e => handleInputValue(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-link">
              Anmelden
            </button>
          </form>
        </aside>
        <div className="branding">
          <img src={logo} />
          <p>&copy; 2017 Weingut Müller</p>
        </div>
        <nav className="footer-nav">
          <ul>
            <li className="menu-item menu-item-143">
              <a href="/">
                <span>Startseite</span>
              </a>
            </li>
            <li className="menu-item menu-item-675">
              <a href="/impressum">
                <span>Impressum</span>
              </a>
            </li>
            <li className="menu-item menu-item-677">
              <a href="/datenschutz">
                <span>Datenschutzinformationen</span>
              </a>
            </li>
            <li className="menu-item menu-item-147">
              <a href="/rotweine">
                <span>Shop</span>
              </a>
            </li>
            <li className="menu-item menu-item-677">
              <a href="/agb">
                <span>AGB's</span>
              </a>
            </li>
            <li className="menu-item menu-item-676">
              <a href="/versand">
                <span>Lieferung und Versandkosten</span>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document); // sticky hover fix in iOS",
        }}
      />
    </>
  )
}
export default Footer
