import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { getPlant } from '../apiCalls'
import './FeatureView.scss'

const FeatureView = ({ id }) => {
  const [plantData, setPlantData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!plantData) {
      getPlant(id)
        .then(data => setPlantData(data.data))
        .catch(err => setError(err))
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

  const openModal = () => {
    const modal = document.getElementById('modal')
    modal.style.display = 'block'
  }

  const closeModal = () => {
    const modal = document.getElementById('modal')
    modal.style.display = 'none'
  }

  return (
    <section className='feature' data-testid='feature-view'>
      {plantData ?
        <section>
          <section className='title-container'>
            <Link to='/'>
              <img
                src='https://img.icons8.com/pastel-glyph/2x/circled-left.png'
                alt='go-back-btn'
                className='go-back'
              />
            </Link>
            <div>
              <h1 className='header-feature'>{plantData['scientific_name']}:</h1>
              <h2>{plantData['common_name']} from the {plantData['family_common_name']}</h2>
            </div>
          </section>
          <section className='table-img'>
            <img src={plantData['image_url']} />
            <table className='table'>
              <tr>
                <th>Genus</th>
                <td>{plantData.genus.name}</td>
              </tr>
              <tr>
                <th>Family</th>
                <td>{plantData.family.name}</td>
              </tr>
              <tr>
                <th>Year</th>
                <td>{plantData.year}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{plantData['main_species'].status}</td>
              </tr>
              <tr>
                <th>Edible</th>
                {plantData['main_species'].edible ? <td>✓</td> : <td>✘</td>}
              </tr>
              <tr>
                <th>Vegetable</th>
                {plantData['main_species'].vegetable ? <td>✓</td> : <td>✘</td>}
              </tr>
              <tr>
                <th
                  className='observations'
                  onClick={() => openModal()}
                >
                  Observations
                </th>
                <td>{plantData.observations}</td>
              </tr>
            </table>
          </section>
          <section id='modal' onClick={() => closeModal()}>
            <div className='modal-content'>
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
          </section>
        </section> :
        <Loading />
      }
    </section>
  )
}

export default FeatureView