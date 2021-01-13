import PlantCard from './PlantCard/PlantCard'
import './CardContainer.scss'

const CardContainer = ({ plantList, addToFavorites }) => {
  const plantCards = plantList.map(plant => {
    return (
      <PlantCard 
        plant={plant} 
        addToFavorites={addToFavorites} 
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