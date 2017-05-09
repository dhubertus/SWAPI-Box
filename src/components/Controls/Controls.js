import React from 'react'

export const Controls = ( {getPeople, getVehicles, getPlanets}) => {
  return (
    <div>
      <button onClick= {() => getPeople()}>PEOPLE</button>
      <button onClick= {() => getPlanets()}>PLANETS</button>
      <button onClick= {() => getVehicles()}>VEHICLES</button>


    </div>
  )
}
