import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { withI18n } from "@lingui/react"
import logo from "../assets/images/logo.svg"
import family from "../assets/images/family.jpg"
import grapes from "../assets/images/grapes.jpg"
import wines from "../assets/images/wines.jpg"
import party1 from "../assets/images/party1.jpg"
import restaurant from "../assets/images/restaurant.jpg"

import config from "./index.json"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Teaser = props => (
  <div className="teaser">
    <div className="icon">
      <span className={"icon-i_" + props.data.icon} />
    </div>
    <h2>{props.data.title}</h2>
    <h3>{props.data.subtitle}</h3>
    <p>{props.data.text} </p>
  </div>
)

Teaser.propTypes = {
  props: PropTypes.object,
}

const IndexPage = ({ i18n }) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allNews {
        edges {
          node {
            id
            relevantTo
            relevantFrom
            title
            shortDescription
            description
            startDate
            endDate
            showOnHome
            homePageDescription
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title={"Home"} />
      <Layout>
        <div className="startseite content-container">
          <header>
            <div className="branding">
              <img src={logo} />
            </div>
            <div>
              <div className="info">

                <a href="/aktuelles">
                  {data &&
                    data.allNews.edges.map((newsdata, index) => {
                      return (
                        newsdata.node.showOnHome && (
                          <h4 key={index}
                              style={{ display: 'none' }}
                              data-relevant-from={newsdata.node.relevantFrom}
                              data-relevant-to={newsdata.node.relevantTo}>
                            {newsdata.node.title} <br />
                            {newsdata.node.homePageDescription}
                          </h4>
                        )
                      )
                    })}
                </a>

              </div>
            </div>
          </header>

          <section>
            <div
              className="image"
              style={{ backgroundImage: `url(${family})` }}
            />
            <div>
              <Teaser data={config.index.teaser.vineyard} />
            </div>
          </section>

          <section className="reverse">
            <div
              className="image"
              style={{ backgroundImage: `url(${grapes})` }}
            />
            <div>
              <Teaser data={config.index.teaser.grapes} />
            </div>
          </section>

          <section>
            <div
              className="image"
              style={{ backgroundImage: `url(${wines})` }}
            />
            <div>
              <div>
                <Teaser data={config.index.teaser.wines} />
                <div className="cta">
                  <a href="weine">Mehr über unsere Weine</a>
                </div>
              </div>
            </div>
          </section>

          <section className="reverse">
            <div
              className="image"
              style={{ backgroundImage: `url(${party1})` }}
            />
            <div>
              <div>
                <Teaser data={config.index.teaser.events} />
                <div className="cta">
                  <a href="aktuelles">Aktuelle Veranstaltungen</a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div
              className="image"
              style={{ backgroundImage: `url(${restaurant})` }}
            />
            <div>
              <div>
                <Teaser data={config.index.teaser.restaurant} />
                <div className="cta">
                  <a href="gasthaus">Mehr über unser Gasthaus</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default withI18n()(IndexPage)
