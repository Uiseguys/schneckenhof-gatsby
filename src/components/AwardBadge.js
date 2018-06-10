import React from 'react'
import { css } from 'glamor'

let box = css({
  cursor: 'pointer',
  display: 'block',
  position: 'absolute',
  right: '10px',
  top: '20px',
  '& .badge': { width: '50px', height: '50px', 'border-radius': '50%',  },
  '& .silver': {'background-color': 'silver'},
  '& .gold': {'background-color': 'gold'},
  '& .bronze': {'background-color': 'orange'},
  '& .text': {
    display: 'none',
    position: 'absolute',
    top: '-30px',
    right: 0,
    'background-color': '#333333',
    'box-shadow': '2px 2px 4px -1px #888',
    color: 'white',
    padding: '4px',
    'white-space': 'nowrap'
  },
  ':hover .text': { display: 'block' }
})

const AwardBadge = ({awardText, awardLevel}) => (

  <div {...box} >
    {awardText && <div className='text'>{awardText}</div>}
    {(awardLevel == '' && awardText != '' ? <div className={`coin gold`}/> : null)}
    {awardLevel && <div className={`coin ` + awardLevel}/>}
  </div>
)
export default AwardBadge
