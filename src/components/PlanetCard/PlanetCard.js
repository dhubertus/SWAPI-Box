import React from 'react'
import PropTypes from 'prop-types'

export const PlanetCard = ({ singlePlanet, handleToggle, favoriteClass, favorites }) => {
  let favs = favorites.map((obj) => {
    return obj.name
  })

  let favoriteCssClass = favoriteClass(singlePlanet.name, favs)

  return (
    <section id={singlePlanet.name} className={`planet-card ${favoriteCssClass}`} onClick={() => {handleToggle(singlePlanet)}}>
      <h2>{singlePlanet.name}</h2>
      <h4><span className='labels'>Terrain:</span><br />{singlePlanet.terrain}</h4>
      <h4><span className='labels'>Population:</span><br />{singlePlanet.population}</h4>
      <h4><span className='labels'>Climate:</span><br />{singlePlanet.climate}</h4>
      <h4><span className='labels'>Residents:</span></h4>
      {singlePlanet.residents.map((res) => {
        return(
      <h4 key={res.name}>{res}</h4>
        )
      })}
    </section>
  )
}

PlanetCard.PropTypes = {
  singlePlanet: PropTypes.object,
  handleToggle: PropTypes.func,
  favoriteClass: PropTypes.string,
  favorites: PropTypes.array
}
