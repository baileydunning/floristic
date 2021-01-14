import { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { getPlant } from '../apiCalls'
import { featureReducer, initialState } from './FeatureReducer'

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

  return (
    <section>
      {state.plantData ?
        <section>
          <h1>{state.plantData['scientific_name']}:</h1>
          <h2>{state.plantData['common_name']} from the {state.plantData['family_common_name']}</h2>
          <h3>Genus: {state.plantData.genus.name}</h3>
          <h3>Family: {state.plantData.family.name}</h3>
          <p><b>Observations: </b>{state.plantData.observations}</p>
          {state.plantData['main_species'].edible ? <p>✓ Edible</p> : <p>✘ Inedible</p>}
          {state.plantData['main_species'].vegetable ? <p>✓ Vegetable</p> : <p>✘ Not a Vegetable</p>}
          <img src={state.plantData['image_url']} />
        </section> :
        <Loading />
      }
      <Link to='/'>Go back</Link>
    </section>
  )
}

export default FeatureView