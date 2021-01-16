import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import HomeContext from '../../HomeContext'
import heart from '../../../images/heart.svg'
import heartFill from '../../../images/heart-fill.svg'
import photoNotAvailable from '../../../images/picture-not-available.png'
import './PlantCard.scss'

const PlantCard = ({ plant, addToFavorites, removeFromFavorites }) => {
  const [icon, setIcon] = useState(heart)
  const context = useContext(HomeContext)

  const handleClick = () => {
    const isFavorite = context.favorites.find(plantCard => {
      return plantCard.id === plant.id
    })

    if (!isFavorite) {
      addToFavorites(plant)
      setIcon(heartFill)
    } else {
      removeFromFavorites(plant.id)
      setIcon(heart)
    }
  }

  return (
    <div className='plant-card'>
      <div className='plant-card-inner'>
        <div className='plant-card-front'>
          {plant['image_url'] ? 
            <img src={ plant['image_url'] } alt='plant-img'/> :
            <img src={ photoNotAvailable } alt='plant-img' />
          }
        </div>
        <div className='plant-card-back'>
          <h2>{ plant['scientific_name'] }</h2>
          <h3>{ plant['common_name'] }</h3>
          <div>
            <button onClick={handleClick}>
              <img 
                src={icon}
                alt='fav-icon'
                className='heart-icon' 
              />
            </button>
          </div>
          <button>
            <Link to={`/${plant['id']}`}>Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlantCard