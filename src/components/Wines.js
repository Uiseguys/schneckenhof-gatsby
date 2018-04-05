import React from 'react'

import Wine from './Wine'

export default ({ wines }) => (
  <div className='wine-list'>
    {wines.map((wine, index) => <Wine wine={wine} key={index} />)}

    {/* <div>No wines</div> */}
  </div>
)
