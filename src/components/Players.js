import React from 'react'

import PlayerList from './PlayerList'

function Players() {
    const players=[
        {name:"Cristiano Ronaldo", team:"Real Madrid", nationality:"Portugal", age:"38", image:"https://s.france24.com/media/display/679eeec2-0922-11e9-a051-005056a964fe/w:1280/p:1x1/120115%20ronaldo%20ballond%27or.jpg"},
        {name:"Zidan", team:"Real Madrid", nationality:"France", age:"36", image:"https://i.pinimg.com/474x/76/23/53/7623539a820bec864bbcb1e852dba956.jpg"},
        {name:"Sergio Ramos", team:"Real Madrid", nationality:"Spain", age:"39", image:"https://i.pinimg.com/564x/38/0e/ef/380eefba09d354bbe0cbfd3b1cbb3767.jpg"},
        {name:"Luka Modric", team:"Real Madrid", nationality:"Croatia", age:"38", image:"https://assets.laliga.com/assets/2020/01/27/large/a0a5d21df104113811lukamodricbalondeoro.jpeg"}
    ]
  return (
    <div>
        <PlayerList players={players} />
    </div>
  )
}

export default Players