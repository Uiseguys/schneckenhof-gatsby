import React from "react"
import Footer from "../components/footer"
import "../assets/icons/style.css"
import "../scss/style.scss"

const Fehler = () => (
  <>
    <div className="content-container">
      <div className="checkout">
        <h4>Serverfehler, bitte versuchen Sie es erneut!</h4>
        <br />
        <br />
        <a href="/"> &lt; Zurück zur Startseite </a>
        <br />
      </div>
    </div>
    <Footer />
  </>
)

export default Fehler
