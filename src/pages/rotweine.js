import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

import SubpageHeader from "../components/SubpageHeader"
import WineNavigation from "../components/WineNavigation"
import Wines from "../components/Wines"
// import { WineFragment } from '../fragments'
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

  return (
    <Layout>
      <div className="content-container">
        <SubpageHeader />
        <WineNavigation location={location} />
        <h2>Rotweine</h2>
        <Wines wines={filterPremium(data, false)} />
        {
          //<h3><br /><br />
          //Zur Zeit ist der Shop in Wartung. Bestellungen werden in Kürze wieder
          //möglich sein.<br /><br /><br />
          //</h3>
        }
        <h2>Premium Rotweine</h2>
        <Wines wines={filterPremium(data, true)} />
      </div>
    </Layout>
  )
}

Rotweine.propTypes = {
  location: PropTypes.object,
}

export default Rotweine
