import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SubpageHeader from "../components/subpageheader"
import WineNavigation from "../components/winenavigation"
import Wines from "../components/wines"
import Layout from "../components/layout"
import { WineFragment } from "../fragments"
import { filterPremium } from "../util"

const Weissweine = ({ location }) => {
  const data = useStaticQuery(graphql`
    query WhiteWineQuery {
      allWines(filter: { type: { eq: "white" } }) {
        edges {
          node {
            ...WineFragment
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="content-container">
        <SubpageHeader />
        <WineNavigation location={location} />
        <h2>Weißweine</h2>
        <Wines wines={filterPremium(data, false)} />
        {
          //<h3>
          //Zur Zeit ist der Shop in Wartung. Bestellungen werden in Kürze wieder
          //möglich sein.
          //</h3>
        }
        <h2>Premium Weißweine</h2>
        <Wines wines={filterPremium(data, true)} />
      </div>
    </Layout>
  )
}

Weissweine.propTypes = {
  location: PropTypes.object,
}

export default Weissweine
