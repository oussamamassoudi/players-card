import React from 'react'

function Player({el}) {
  return (
    <div className='player-card'>
     <div className='img'> <img src={el.image}/></div>
      <h3>{el.name}</h3>
      <h3>{el.team}</h3>
      <div className='age-nati'>
        {el.nationality}
        <span>{el.age}</span>
      </div> 
    </div>
  )
}

export default Player