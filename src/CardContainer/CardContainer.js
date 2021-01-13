import PlantCard from './PlantCard/PlantCard'
import './CardContainer.scss'

const CardContainer = ({ plantList }) => {
  const plantCards = plantList.map(plant => {
    return <PlantCard plant={plant} />
  })
  return (
    <section className='card-container'>
      { plantCards }
    </section>
  )
}

export default CardContainer