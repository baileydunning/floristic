import PlantCard from './PlantCard/PlantCard'

const CardContainer = ({ plantList }) => {
  const plantCards = plantList.map(plant => {
    return <PlantCard plant={plant} />
  })
  return (
    <section>
      { plantCards }
    </section>
  )
}

export default CardContainer