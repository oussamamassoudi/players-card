import React from 'react'
import Player from './Player'

function PlayerList({players}) {
  return (
    <div className='container'>
{players.map((el)=><Player el={el} />)}

    </div>
  )
}

export default PlayerList