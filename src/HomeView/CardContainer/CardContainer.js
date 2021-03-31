import PlantCard from './PlantCard/PlantCard'
import './CardContainer.scss'

const CardContainer = ({ favorites, cardsOnDisplay, addToFavorites, removeFromFavorites }) => {
  const evaluateFavorite = (id) => {
    if (favorites) {
      const isFavorite = favorites.find(plantCard => {
        return plantCard.id === id
      })
      return isFavorite ? true : false
    } else {
      return false
    }
  }
  
const plantCards = cardsOnDisplay?.map(plant => {
    return (
      <PlantCard
        key={plant.id}
        plant={plant}
        isFavorite={evaluateFavorite(plant.id)}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    )
  })


  return (
    <section className='card-container'>
      { plantCards }
    </section>
  )
}

export default CardContainer