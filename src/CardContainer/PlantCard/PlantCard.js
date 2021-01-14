import { useState, useContext } from 'react'
import Context from '../../HomeView/HomeContext'
import { Link } from 'react-router-dom'
import heart from './heart.svg'
import heartFill from './heart-fill.svg'
import './PlantCard.scss'

const PlantCard = ({ plant, addToFavorites, removeFromFavorites }) => {
  const [icon, setIcon] = useState(heart)
  const context = useContext(Context)

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
    <div className="flip-box">
      <div className="flip-box-inner">
        <div className="flip-box-front">
          <img src={ plant['image_url'] } alt='plant-img'/>
        </div>
        <div className="flip-box-back">
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
        <Link to={`/${plant['slug']}`}>Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default PlantCard