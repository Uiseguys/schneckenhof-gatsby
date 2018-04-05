import React from 'react'

import SubpageHeader from '../components/SubpageHeader'
import WineNavigation from '../components/WineNavigation'
import Wines from '../components/Wines'

import { redWines, redPremiumWines } from '../assets/rotweine.json'

export default ({location}) => (
  <div className='content-container'>
    <SubpageHeader />

    <WineNavigation location={location}/>

    <h2>{redWines.title}</h2>
    <Wines wines={redWines.list} />

    <h2>{redPremiumWines.title}</h2>
    <Wines wines={redPremiumWines.list} />
  </div>
)
