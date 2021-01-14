import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
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
      {plantData ?
        <section>
          <h1>{plantData['scientific_name']}:</h1>
          <h2>{plantData['common_name']} from the {plantData['family_common_name']}</h2>
        </section> :
        <Loading />
      }
      <Link to='/'>Go back</Link>
    </section>
  )
}

export default FeatureView