import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SubpageHeader from "../components/SubpageHeader"
import Layout from "../components/layout"
import { restaurant1, restaurant2, restaurant3 } from "../assets"

import News from "../components/News"

const Aktuelles = () => {
  const data = useStaticQuery(graphql`
    query NewsQuery {
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
          }
        }
      }
      allSettings {
        edges {
          node {
            id
            key
            value {
              text
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="content-container">
        <SubpageHeader />
        <h2>Aktuelles</h2>
        <News data={data}></News>
      </div>
    </Layout>
  )
}

export default Aktuelles
