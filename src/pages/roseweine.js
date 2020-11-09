import React, { useEffect } from "react"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import SubpageHeader from "../components/subpageheader"
import WineNavigation from "../components/winenavigation"
import Wines from "../components/wines"
import maintenance from "../config"

const Roseweine = ({ location }) => {
  const data = useStaticQuery(graphql`
    query RoseWineQuery {
      allWines(filter: { type: { eq: "rose" } }) {
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
      <SEO title={"Roséweine"} />
      <Layout>
        <div className="content-container">
          <SubpageHeader />

          <WineNavigation location={location} />

          <h2>Roséweine</h2>

          {!maintenance && (
            <Wines wines={data.allWines.edges.map((edge) => edge.node)} />
          )}

          {maintenance && (
            <h3>
              Zur Zeit ist der Shop in Wartung. Bestellungen werden in Kürze
              wieder möglich sein.
            </h3>
          )}
        </div>
      </Layout>
    </>
  )
}

Roseweine.propTypes = {
  location: PropTypes.object,
}

export default Roseweine
