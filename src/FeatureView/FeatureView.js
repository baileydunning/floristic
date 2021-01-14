import { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import { getPlant } from '../apiCalls'

const FeatureView = ({ id }) => {
  const [plantData, setPlantData] = useState()

  useEffect(() => {
    getPlant(id)
      .then(data => setPlantData(data.data))
      .catch(error => console.log(error))
  }, [id])

  return (
    <section>
    <h1>{plantData['scientific_name']}</h1>
    <Link to='/'>Go back</Link>
    </section>
  )
}

export default FeatureView