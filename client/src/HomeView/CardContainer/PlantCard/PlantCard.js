import { useState } from 'react'
import { Link } from 'react-router-dom'
import heart from '../../../images/heart.svg'
import heartFill from '../../../images/heart-fill.svg'
import photoNotAvailable from '../../../images/picture-not-available.png'
import './PlantCard.scss'

const PlantCard = ({ plant, isFavorite, addToFavorites, removeFromFavorites }) => {
  const [icon, setIcon] = useState(isFavorite ? heartFill : heart)
  const [altText, setAltText] = useState(isFavorite ? 'favorite' : 'notFavorite')
  
  const handleClick = () => {
    if (!isFavorite) {
      addToFavorites(plant)
      setIcon(heartFill)
      setAltText('favorite')
    } else {
      removeFromFavorites(plant.id)
      setIcon(heart)
      setAltText('notFavorite')
    }
  }

  return (
    <div className='plant-card'>
      <div className='plant-card-inner'>
        <div className='plant-card-front'>
          {plant['image_url'] ?
            <img src={plant['image_url']} alt='image' /> :
            <img src={photoNotAvailable} alt='image' />
          }
        </div>
        <div className='plant-card-back'>
          <h2>{plant['scientific_name']}</h2>
          <h3>{plant['common_name']}</h3>
          <div className='plant-card-btns'>
            <button
              className='fav-btn'
              data-testid='fav-toggle' 
              onClick={handleClick}>
              <img
                src={icon}
                alt={altText}
                className='heart-icon'
              />
            </button>
            <button className='learn-link'>
              <Link to={`/plant/${plant['id']}`}>Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantCard