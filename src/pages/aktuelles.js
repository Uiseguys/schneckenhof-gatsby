import React from 'react'

import SubpageHeader from '../components/SubpageHeader'
import { restaurant1, restaurant2, restaurant3 } from '../assets'

import News from '../components/News'

export default (data) => (
  <div className='content-container'>
    <SubpageHeader />

    <h2>Aktuelles</h2>

    <div className='subpage-content news'>
      <div style={{ padding: '1rem 2rem' }}>
        <span style={{ textTransform: 'uppercase' }}>Der Blog vom Schneckenhof!</span> Begleiten Sie uns durch das Jahr im Weinberg und Keller, auf
        Weinfestesten und Veranstaltungen. Auf unserem Blog informieren wir Sie immer wieder was es Neues im Schneckenhof gibt:
        <a href='http://www.weingut-schneckenhof.blogspot.com/' target='_blank'>
          www.weingut-schneckenhof.blogspot.com
        </a>
        <br />
        <br />
        <br />
        <br />
      </div>

      <h2 className='aktuelles'>Vorschau und Termine 2018:</h2>

      <News news={data}></News>
    </div>
  </div>
)

export const query = graphql`
  query NewsQuery {
    allNews{
      edges {
        node {
           id,
           relevantTo, 
           relevantFrom,
           title,
           shortDescription,
           description,
           startDate,
           endDate
        }
      }
    }
  }
`
