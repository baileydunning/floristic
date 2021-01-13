import { Link } from 'react-router-dom'
import heart from './heart.svg'
import heartFill from './heart-fill.svg'
import './PlantCard.scss'

const PlantCard = ({ plant }) => {
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
            <img 
              src={heart}
              className='heart-icon' 
            />
          </div>
        <Link to={`/${plant['slug']}`}>Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default PlantCard