import React from 'react'

import SubpageHeader from '../components/SubpageHeader'
import WineNavigation from '../components/WineNavigation'
import Wines from '../components/Wines'

import { roseWines, rosePremiumWines } from '../assets/roseweine.json'

export default ({location}) => (
  <div className='content-container'>
    <SubpageHeader />

    <WineNavigation location={location}/>

    <h2>{roseWines.title}</h2>
    <Wines wines={roseWines.list} />
    
  </div>
)
