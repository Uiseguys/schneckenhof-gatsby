import React from 'react'

import SubpageHeader from '../components/SubpageHeader'
import WineNavigation from '../components/WineNavigation'
import Wines from '../components/Wines'

import { sparklingWines, sparklingPremiumWines } from '../assets/sekt.json'

export default ({location}) => (
  <div className='content-container'>
    <SubpageHeader />

    <WineNavigation location={location}/>

    <h2>{sparklingWines.title}</h2>
    <Wines wines={sparklingWines.list} />
    
  </div>
)
