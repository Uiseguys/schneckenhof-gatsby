import React from 'react'

import SubpageHeader from '../components/SubpageHeader'
import { restaurant1, restaurant2, restaurant3 } from '../assets'

import News from '../components/News'

export default (data) => (
  <div className='content-container'>
    <SubpageHeader />

      <h2>Aktuelles</h2>

      <div className='subpage-content news'>
      <div style={{ padding: '1rem 2rem' }}>
        <span style={{ textTransform: 'uppercase' }}>Der Blog vom Schneckenhof!</span> Begleiten Sie uns durch das Jahr im Weinberg und Keller, auf

          <span>Der Blog vom Schneckenhof!</span> Begleiten Sie uns durch das Jahr im Weinberg und Keller, auf
          Weinfestesten und Veranstaltungen. Auf unserem Blog und auf Facebook informieren wir Sie immer wieder was es
          Neues im Schneckenhof gibt:
          <a href='http://www.weingut-schneckenhof.blogspot.com/' target='_blank'>
              www.weingut-schneckenhof.blogspot.com
          </a>
<br />
<br />
          <a href='http://www.facebook.com/WeingutSchneckenhof' target='_blank'>
              www.facebook.com/WeingutSchneckenhof
          </a>
          <br/>
          <br/>
          <br/>
          <br/>
      </div>

      <h2 className='aktuelles'>Vorschau und Termine 2019:</h2>


      <div className='c-news'>
          <div className='item'>
              <div className='date'>
            <span className='day'>
              22<span className='separator'> - </span>24
            </span>
                  <br/>
                  <span className='month'>Mär</span>
              </div>

              <div className='description'>
                  <h4>Rebenglühen </h4>

                  <h6>Freitag 22. März und Samstag 23. März 18-23 Uhr, Sonntag 24. März 2019 11-18 Uhr </h6>
                  <br/>
                  <br/>
                  <p>
                      Rebenglühen - DAS neue Weinevent in Hohenlohe!<br/>
                      Erleben Sie die Bretzfelder Weinvielfalt direkt dort, wo ihre Qualität entsteht: im Wengert!
                      Wir Winzer brennen für unseren Wein! Um das zu zeigen, bringen wir den Berg für sie zum Brennen
                      und die Reben zum Glühen! Es erwartet Sie an drei Tagen eine knapp 4 km lange Wanderung am
                      Bretzfelder Lindelberg , der durch Feuer, stimmungsvolle Lichter und Lichtskulpturen in Szene
                      gesetzt wird. An 10 Stationen gibt es eine vielfältigen Wein- und Speiseangebot. <br/><br/>
                      Der 3- Tages- Pass ist im Vorverkauf für 5 € bei uns und allen teilnehmende Weingütern erhältlich.
                      Abendkasse 7 €, Tagespass am Sonntag 3 €.
                      <br/> <br/>
                      <a href='http://www.rebengluehen.de/' target='_blank'>
                          Weitere Infos finden Sie auf: www.rebengluehen.de
                      </a>

                  </p>
              </div>
          </div>
      </div>


      <div className='c-news'>
          <div className='item'>
              <div className='date'>
            <span className='day'>
              27<span className='separator'>+</span>28
            </span>
                  <br/>
                  <span className='month'>Apr</span>
              </div>

              <div className='description'>
                  <h4>Tag der offenen Weingüter - 360 Grad Württemberg </h4>

                  <h6>Samstag 27. April und Sonntag 28. April ab 11 Uhr </h6>
                  <br/>
                  <br/>
                  <p>
                      Wir begrüßen Sie auf dem Schneckenhof anlässlich des "Tag der offenen Weingüter - 360°
                      Württemberg" Zahlreiche Betriebe quer durch das ganze
                      Anbaugebiet laden zum Besuch ein! Lernen Sie die Weinmacher persönlich kennen<br/> <br/>
                      Am Samstag und Sonntag ab 11 Uhr öffnen wir unsere Türen zum Weinkeller und sie bekommen einen
                      Einblick wie unsere Weine hergestellt werden. Eine
                      Auswahl unsere Weine können Sie bei einer Selbstverkostung in einer besonderen Lichtatmosphäre im
                      Keller zwischen Fässer, Filter und Pumpen
                      probieren.
                      <br/> <br/>
                      Spazieren Sie doch mit uns durch die wunderschönen Weinberge und erfahren sie direkt vor Ort alles
                      rund um die Sorten, die Lage, den Boden und den
                      Anbau. Weinbergsführungen finden an beiden Tagen um 11.45 Uhr und 14.45 Uhr statt.
                      <br/> <br/>
                      Am Sonntag spielen für Sie ab 11.30 Uhr die Weissacher Dorfmuskikanten . Es gibt feines aus der
                      Küche und unsere Weine können sie am Weinstand im
                      Hof probieren.
                      <br/> <br/>
                      Mit einem kostenlosen Shuttelbus der die verschiedene Weingüter der Selbstvermarktenden Weingüter
                      Brezfeld e.V. anfährt, kommen sie Samstag und
                      Sonntag zwischen 11 und 19 Uhr stündlich nach Geddelsbach und auch wieder weiter. Der Bus fährt
                      immer in dieser Runde die Weingüter an :
                      Geddelsbach - Unterheimbach - Adolzfurt - Bretzfeld - Dimbach - Schwabbach - Siebeneich -
                      Adolzfurt - Geddelsbach.
                      <br/> <br/>
                      Wir freuen uns auf Ihren Besuch!
                  </p>
              </div>
          </div>
      </div>

      <div className='c-news'>
          <div className='item'>
              <div className='date'>
            <span className='day'>
              4<span className='separator'>-</span>8
            </span>
                  <br/>
                  <span className='month'>Jul</span>
              </div>
              <div className='description'>
                  <h4>Hohenloher Weindorf in Öhringen </h4>

                  <h6>Donnerstag 4. Juli 2019 bis Montag 8. Juli 2019</h6>
                  <br/>
                  <br/>
                  <p>
                      Genießen Sie unsere Weine vom Schneckenhof in malerischer Kulisse des Marktplatzes in Öhringen auf
                      dem wohl schönsten Weindorf Deutschlands. Sie
                      finden uns direkt am Brunnen am Stand der Selbstvermarktenden Weingüter.
                      <br/> <br/>
                      Bei der feierlichen Eröffnung am Donnerstag wird traditionell der Weinschlüssel an einen
                      prominenten Preisträger überreicht und die Weinhoheiten
                      aus dem Hohenloher Land begrüßt. Auch der begehrte Weißweinpreis wird bei der Eröffnung
                      überreicht, dessen Gewinner im Vorfeld durch eine
                      Experten-Jury ermittelt werden.
                      <br/> <br/>
                      <a href='http://www.hohenloher-weindorf.de/' target='_blank'>
                          Weitere Infos finden Sie auf: www.hohenloher-weindorf.de
                      </a>
                  </p>
              </div>
          </div>
      </div>

      <div className='c-news'>
          <div className='item'>
              <div className='date'>
                  <span className='day'>5-7</span>
                  <br/>
                  <span className='month'>Jul</span>
              </div>

              <div className='description'>
                  <h4>Weinbrunnenfest in Vellberg</h4>
                  <h6>Freitag 5. Juli bis Sonntag 7. Juli 2019</h6>
                  <br/>
                  <br/>
                  <p>
                      In Vellberg laden die Edelleut wieder zum Feste! Genießen sie ein buntes Programm mit historischem
                      Umzug und Feuerwerk in Vellbergs
                      mittelalterlichem Städtchen. Kommen Sie an unseren Stand und genießen Sie entspannt den spritzigen
                      Sekt und die feinen Weine vom Schneckenhof !
                      <br/> <br/>
                      <a href='http://www.vellberg.de' target='_blank'>
                          Weitere Infos finden Sie auf: www.vellberg.de
                      </a>

                  </p>
              </div>
          </div>
      </div>

      <div className='c-news'>
          <div className='item'>
              <div className='date'>
                  <span className='day'>13</span>
                  <br/>
                  <span className='month'>Jul</span>
              </div>

              <div className='description'>
                  <h4> WEIN - ROCK - NACHT</h4>
                  <h6>Samstag 13. Juli ab 19 Uhr</h6>
                  <br/>
                  <br/>
                  <p>
                      In Geddelsbach wird gerne auch mal gerockt! Zusammen mit dem Weingut Birkert präsentieren wir nun
                      die 3. WEIN-ROCK-NACHT mit der Bands MULTITRACK und JIMMY BETON AND THE MÖRTELMAKER . Natürlich
                      gibt es Weine von beiden Weingütern und leckeres zu Essen vom Foodtruck „International Streetfood
                      by Toni Tänzer“. <br/> <br/>
                      Karten gibt es für 6 € im Vorverkauf bei uns oder dem Weingut Birkert, der Reiffeisenbank
                      Bretzfeld und bei Kober Getränkevertrieb Neuenstein. <br/>
                      Restkarten gibt es an der Abendkasse für 10€
                      <br/> <br/>
                  </p>
              </div>
          </div>
      </div>

      <div className='c-news'>
          <div className='item'>
              <div className='date'>
                  <span className='day'>2</span>
                  <br/>
                  <span className='month'>Okt</span>
              </div>

              <div className='description'>
                  <h4> Schnittchen-Party</h4>
                  <h6>Mittwoch 2. Oktober ab 19 Uhr</h6>
                  <br/>
                  <br/>
                  <p>
                      Neu - die Schnittchenparty! Mit Schnitten, Schnittchen und Wein. Eine Party mit DJ und guter
                      Laune!
                      <br/> <br/>
                  </p>
              </div>
          </div>
      </div>


      <div className='c-news'>
          <div className='item'>
              <div className='date'>
                  <span className='day'>3</span>
                  <br/>
                  <span className='month'>Okt</span>
              </div>

              <div className='description'>
                  <h4> Neue-Wein-Party</h4>
                  <h6>Donnerstag 3. Oktober ab 11 Uhr</h6>
                  <br/>
                  <br/>
                  <p>
                      Fröhliches Zusammensein mit dem „Musikverein Bretzfeld“ der von 12-15 Uhr spielt. Es gibt
                      natürlich Wein und regionale Gerichte außerdem frisch auch der Kelter Neuen Wein und Zwiebelkuchen
                      von den Geddelsbacher Landfrauen.
                      <br/> <br/>
                  </p>
              </div>
          </div>
      </div>


      <div className='c-news'>
          <div className='item'>
              <div className='date'>
                  <span className='month'>30.Nov +</span>
                  <span className='month'>1.Dez</span>
              </div>

              <div className='description'>
                  <h4>Geddelsbacher Adventszauber</h4>
                  <h6>am 1. Adventwochenende <br/>
                      Samstag 30. November ab 15.00 Uhr, Sonntag 1. Dezember ab 11.00 Uhr</h6>
                  <br/>
                  <br/>
                  <p>
                      Es hat sich herumgesprochen, dass in Geddelsbach ein kleiner aber feiner Weihnachtsmarkt
                      stattfindet... Rund um den großen Weihnachtsbaum auf unserem Weingut bieten Ihnen die
                      Geddelsbacher Bürger und Vereine Hausgemachtes. Die Landfrauen verwöhnen unsere Gäste mit Kaffee &
                      Kuchen und bieten selbstgemachte Marmelade zum Kauf an. Die Freiwillige Feuerwehr kümmert sich am
                      Grill um das leibliche Wohl. Getränke aller Art findet man am Ständle des MGV und natürlich bieten
                      wir an unserem Weinstand Weine und Sekt vom Schneckenhof. Auch der Glühwein, der natürlich nicht
                      fehlen darf, kommt aus eigener Produktion vom Weingut Müller. <br/>

                      Mit dabei ist auch der Geddelsbacher Bienenhof, die heimischen Jäger mit Wildwurst, die
                      Geddelsbacher Jungscharler backen Waffeln, der Nikolaus kommt zu Besuch mit Geschenken für unsere
                      kleinen Gäste, der MGV wird Lieder unterm Tannenbaum singen und auch die Kinder des Geddelsbacher
                      Kinderchors Pipsgöckel sind hoffentlich wieder dabei. Es gibt allerlei Stände und die Kreative aus
                      unserer Region bieten Gebasteltes, Gestricktes und Genähtes an
                  </p>
              </div>
          </div>
      </div>
  </div>
              </div>

)

export const query = graphql`
  query NewsQuery {
    allNews{
      edges {
        node {
           id,
           relevantTo, 
           relevantFrom,
           title,
           shortDescription,
           description,
           startDate,
           endDate
        }
      }
    }
  }
`
