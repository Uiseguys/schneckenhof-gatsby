import React from 'react'

import SubpageHeader from '../components/SubpageHeader'
import WineNavigation from '../components/WineNavigation'
import Wines from '../components/Wines'

import { sparklingWines, sparklingPremiumWines } from '../assets/sekt.json'

export default () => (
  <div className='content-container'>
    <SubpageHeader />

    <WineNavigation />

    <h2>{sparklingWines.title}</h2>
    <Wines wines={sparklingWines.list} />
    
  </div>
)
