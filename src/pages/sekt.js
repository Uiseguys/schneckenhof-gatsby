import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

import SubpageHeader from "../components/SubpageHeader"
import WineNavigation from "../components/WineNavigation"
import Wines from "../components/Wines"
import { WineFragment } from "../fragments"

const Sekt = ({ location }) => {
  const data = useStaticQuery(graphql`
    query SparklingWineQuery {
      allWines(filter: { type: { eq: "champagne" } }) {
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

        <h2>Sekt</h2>

        {
          //<h3>
          //Zur Zeit ist der Shop in Wartung. Bestellungen werden in Kürze wieder
          //möglich sein.
          //</h3>
        }
        {<Wines wines={data.allWines.edges.map(edge => edge.node)} />}
      </div>
    </Layout>
  )
}

Sekt.propTypes = {
  location: PropTypes.object,
}

export default Sekt
