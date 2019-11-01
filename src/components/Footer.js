import React, { useState } from "react";
import logo from "../assets/images/logo_visual.svg";
import axios from "axios";

const Footer = () => {
  const [alertOpacity, setAlertOpacity] = useState("0");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClasses, setAlertClasses] = useState("alert alert-info");
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = value => {
    setInputValue(value);
  };

  const handleNewsletterSubmit = e => {
    e.preventDefault();
    const bodyFormData = {
      email: inputValue
    };
    // Making Create Recipient Request
    axios({
      method: "post",
      url: "https://schneckenhof-lb4-live.herokuapp.com/newsletters",
      data: JSON.stringify(bodyFormData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => {
        //handle success
        setAlertClasses("alert alert-success");
        setAlertMessage("Your email has been registered successfully");
        setAlertOpacity("1");
        setTimeout(() => {
          setAlertOpacity("0");
        }, 5000);
      })
      .catch(() => {
        //handle error
        setAlertClasses("alert alert-danger");
        setAlertMessage("Your email failed to register");
        setAlertOpacity("1");
        setTimeout(() => {
          setAlertOpacity("0");
        }, 5000);
      });
  };

  return (
    <footer>
      <div
        role="alert"
        className={alertClasses}
        style={{ position: "fixed", opacity: `${alertOpacity}` }}
      >
        {alertMessage}
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
                value={inputValue}
                onChange={e => handleInputValue(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-link">
            Subscribe
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
  );
};
export default Footer;
