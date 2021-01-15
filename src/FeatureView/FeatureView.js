import { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { featureReducer, initialState } from './FeatureReducer'
import Loading from '../Loading/Loading'
// import DistributionMap from './DistributionMap/DistributionMap'
import { getPlant } from '../apiCalls'
import './FeatureView.scss'

const FeatureView = ({ id }) => {
  const [state, dispatch] = useReducer(featureReducer, initialState)

  useEffect(() => {
    if (!state.plantData) {
      getPlant(id)
        .then(data => handleFetch(data.data))
        .catch(error => console.log(error))
    }
  }, [id, state.plantData])

  const handleFetch = (data) => {
    const action = { type: 'FETCH_DATA', plantData: data }
    dispatch(action)
  }

  const listLocations = (type) => {
    return state.plantData['main_species'].distributions[type].map(place => {
      return <li key={place.id}>{place.name}</li>
    })
  }

  return (
    <section>
      {state.plantData ?
        <section>
          <h1>{state.plantData['scientific_name']}:</h1>
          <h2>{state.plantData['common_name']} from the {state.plantData['family_common_name']}</h2>
          <h3>Genus: {state.plantData.genus.name}</h3>
          <h3>Family: {state.plantData.family.name}</h3>
          <p><b>Observations: </b>{state.plantData.observations}</p>
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
            {state.plantData['main_species'].edible ? <p>✓ Edible</p> : <p>✘ Inedible</p>}
            {state.plantData['main_species'].vegetable ? <p>✓ Vegetable</p> : <p>✘ Not a Vegetable</p>}
          </div>
          <img src={state.plantData['image_url']} />
          {/* <DistributionMap distributions={state.plantData['main_species'].distribution}/> */}
        </section> :
        <Loading />
      }
      <Link to='/'>Go back</Link>
    </section>
  )
}

export default FeatureView