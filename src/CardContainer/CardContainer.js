import PlantCard from './PlantCard/PlantCard'
import './CardContainer.scss'

const CardContainer = ({ cardsOnDisplay, addToFavorites, removeFromFavorites }) => {
  const plantCards = cardsOnDisplay.map(plant => {
    return (
      <PlantCard
        key={plant.id} 
        plant={plant} 
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