import React from 'react'

function Player(props) {
  return (
    <div className="playerDiv">
      <img src={props.pic} alt=''></img>
        <h2>name:{props.name}</h2>
        <h3>team:{props.team}</h3>
        <h3>role:{props.role}</h3>
    </div>
  )
}

export default Player
