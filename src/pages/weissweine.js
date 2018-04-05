import React from 'react'

import SubpageHeader from '../components/SubpageHeader'
import WineNavigation from '../components/WineNavigation'
import Wines from '../components/Wines'

import { whiteWines, whitePremiumWines } from '../assets/weissweine.json'

export default ({location}) => (
  <div className='content-container'>
    <SubpageHeader />

    <WineNavigation location={location}/>

    <h2>{whiteWines.title}</h2>
    <Wines wines={whiteWines.list} />

    <h2>{whitePremiumWines.title}</h2>
    <Wines wines={whitePremiumWines.list} />
  </div>
)
