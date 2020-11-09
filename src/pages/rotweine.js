import React, { useEffect } from "react"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import maintenance from "../config"
import SubpageHeader from "../components/subpageheader"
import WineNavigation from "../components/winenavigation"
import Wines from "../components/wines"
import { WineFragment } from "../fragments"
import { filterPremium } from "../util"

const Rotweine = ({ location }) => {
  const data = useStaticQuery(graphql`
    query RedWineQuery {
      allWines(filter: { type: { eq: "red" } }) {
        edges {
          node {
            ...WineFragment
          }
        }
      }
    }
  `)

  useEffect(() => {
    navigate("/shop")
  }, [])

  return (
    <>
      <SEO title="Rotweine" />
      <Layout>
        <div className="content-container">
          <SubpageHeader />
          <WineNavigation location={location} />
          <h2>Rotweine</h2>

          {!maintenance && <Wines wines={filterPremium(data, false)} />}

          {maintenance && (
            <h3>
              <br />
              <br />
              Zur Zeit ist der Shop in Wartung. Bestellungen werden in Kürze
              wieder möglich sein.
              <br />
              <br />
              <br />
            </h3>
          )}

          {!maintenance && <h2>Premium Rotweine</h2>}

          {!maintenance && <Wines wines={filterPremium(data, true)} />}
        </div>
      </Layout>
    </>
  )
}

Rotweine.propTypes = {
  location: PropTypes.object,
}

export default Rotweine
