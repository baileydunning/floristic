import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { getPlant } from '../apiCalls'
import './FeatureView.scss'

const FeatureView = ({ id }) => {
  const [plantData, setPlantData] = useState(null)

  useEffect(() => {
    if (!plantData) {
      getPlant(id)
        .then(data => setPlantData(data.data))
        .catch(error => console.log(error))
    }
  }, [id, plantData])

  const listLocations = (type) => {
    if (plantData['main_species'].distributions[type]) {
      return plantData['main_species'].distributions[type].map(place => {
        return <li key={place.id}>{place.name}</li>
      })
    } else {
      return 'Unknown'
    }
  }

  return (
    <section className='feature' data-testid='feature-view'>
      {plantData ?
        <section>
          <h1>{plantData['scientific_name']}:</h1>
          <h2>{plantData['common_name']} from the {plantData['family_common_name']}</h2>
          <h3>Genus: {plantData.genus.name}</h3>
          <h3>Family: {plantData.family.name}</h3>
          <p><b>Observations: </b>{plantData.observations}</p>
          <div className='distributions'>
            <div className='native'>
              <p><b>Native: </b></p>
              <ul>
                {listLocations('native')}
              </ul>
            </div>
            <div className='introduced'>
              <p><b>Introduced: </b></p>
              <ul>
                {listLocations('introduced')}
              </ul>
            </div>
          </div>
          <div>
            {plantData['main_species'].edible ? <p>✓ Edible</p> : <p>✘ Inedible</p>}
            {plantData['main_species'].vegetable ? <p>✓ Vegetable</p> : <p>✘ Not a Vegetable</p>}
          </div>
          <img src={plantData['image_url']} />
        </section> :
        <Loading />
      }
      <Link to='/'>Go back</Link>
    </section>
  )
}

export default FeatureView