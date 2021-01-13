import './PlantCard.scss'

const PlantCard = ({ plant }) => {
  return (
    <div className="flip-box">
      <div className="flip-box-inner">
        <div className="flip-box-front">
          <img src={ plant['image_url'] } alt='plant-img'/>
        </div>
        <div className="flip-box-back">
          <h3>{ plant['common_name'] }</h3>
        </div>
      </div>
    </div>
  )
}

export default PlantCard