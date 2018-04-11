import React from 'react'

import SubpageHeader from '../components/SubpageHeader'
import WineNavigation from '../components/WineNavigation'
import Wines from '../components/Wines'

export default ({location, data}) => (
  <div className='content-container'>
    {console.log(data)}
    <SubpageHeader />

    <WineNavigation location={location}/>

    <h2>Sekt</h2>
    <Wines wines={data.allWine.edges.map((edge) => edge.node)} />
    
  </div>
)

export const query = graphql`
  query SparklingWineQuery {
    allWine(filter: { type: { eq: "champagne" } }) {
      edges {
        node {
          name
          image
          vintage
          varietal
          price
          content
        }
      }
    }
  }
`