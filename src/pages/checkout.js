import React from 'react'
import 'cross-fetch/polyfill'

import SubpageHeader from '../components/SubpageHeader'
import Cart from '../components/Cart'

class Checkout extends React.Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)

    console.log(data)

    for (let name of data.keys()) {
      console.log(name, data.get(name))
    }

    fetch('https://schneckenhof-api.herokuapp.com/api/payment/checkout', {
      method: 'POST',
      headers: {
        Accept: 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      mode: 'no-cors',
      body: data
    }).then((res) => console.log(res))
  }

  reset () {
    console.log('reset')
  }

  render () {
    return (
      <div class='content-container'>
        <div className='checkout'>
          <SubpageHeader />

          <Cart checkout={true} />

          <form onSubmit={this.handleSubmit} id='appnavigation'>
            <p>
              Bitte beachten Sie bei Ihrer Bestellung: Wir liefern in <strong>6</strong>er, <strong>12</strong>er oder <strong>18</strong>er Kartons!
              <br />
              <br />
            </p>
            <fieldset class='personal'>
              <legend>Ihre Daten:</legend>

              <div class='form-group'>
                <label for='realname'>
                  Name:
                  <span class='hint'>*</span>
                </label>
                <input type='text' id='realname' name='realname' class='required form-control' required />
              </div>
              <div class='form-group'>
                <label for='street'>
                  Stra&szlig;e, Haus-Nr:
                  <span class='hint'>*</span>
                </label>
                <input type='text' name='street' id='street' class='required form-control' required />
              </div>
              <div class='form-group'>
                <label for='zip'>
                  PLZ:
                  <span class='hint'>*</span>
                </label>
                <input type='text' name='zip' id='zip' class='required form-control' required />
              </div>
              <div class='form-group'>
                <label for='city'>
                  Wohnort:
                  <span class='hint'>*</span>
                </label>
                <input type='text' name='city' id='city' class='required form-control' required />
              </div>
              <div class='form-group'>
                <label for='email' id='email'>
                  Email:
                  <span class='hint'>*</span>
                </label>
                <input type='email' name='email' class='required email form-control' required />
              </div>
              <div class='form-group'>
                <label for='phone'>Telefon (optional, bei evtl. Rückfragen):</label>
                <input type='text' name='phone' id='phone' class='form-control' />
              </div>
            </fieldset>
            <fieldset>
              <div class='form-check'>
                <label class='form-check-label' for='agreement-1'>
                  <input type='checkbox' class='form-check-input' required id='agreement-1' name='agreement[1]' value='1' />
                  Ich habe die{' '}
                  <a href='/agb' target='_blank'>
                    AGB
                  </a>{' '}
                  und die Informationen zum{' '}
                  <a href='/datenschutz' target='_blank'>
                    Datenschutz
                  </a>{' '}
                  gelesen und akzeptiert.
                </label>
                <br />
              </div>

              <div class='form-check'>
                <label class='form-check-label' for='agreement-2'>
                  <input type='checkbox' class='form-check-input' required id='agreement-2' name='agreement[3]' value='1' />
                  Ich bestätige, dass ich volljährig bin
                </label>
                <br />
                <br />
              </div>

              <div class='form-group'>
                <label for='message'>Bemerkungen:</label>
                <textarea name='message' id='message' class='form-control' />
              </div>

              <p>
                <br />
                <br />
                <strong>Keine Abgabe an Jugendliche unter 18Jahren.</strong>
                <br />
                <br />
              </p>
              <p>
                <label>
                  <input type='radio' name='pay_method' value='invoice' checked />Invoice
                </label>
                <label style={{ marginLeft: '20px' }}>
                  <input type='radio' name='pay_method' value='paypal' />Paypal
                </label>
              </p>
              <div class='form-group'>
                <input type='reset' value='Zurück' class='btn btn-link btn-secondary' onClick={this.reset} />

                <input type='submit' name='button' id='submitter' class='btn btn-lg btn-primary' value='Bestellung abschicken' />
                <input type='reset' value='Zur&uuml;cksetzen' id='order' class='hidden' />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default Checkout