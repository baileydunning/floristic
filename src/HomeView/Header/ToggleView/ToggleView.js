import { useContext, useState } from 'react'
import HomeContext from '../../HomeContext'
import heartFill from '../../../images/heart-fill.svg'
import leaf from '../../../images/leaf.svg'
import './ToggleView.scss'

const ToggleView = ({ toggleView }) => {
  const [icon, setIcon] = useState(heartFill)
  const [altText, setAltText] = useState('all-plants')
  const context = useContext(HomeContext)

  const handleToggle = () => {
    toggleView()
    if (context.view === 'all') {
      setIcon(leaf)
      setAltText('all-plants')
    } else {
      setIcon(heartFill)
      setAltText('fav-plants')
    }
  }

  return (
    <button 
      onClick={handleToggle}
      className='toggle-button'
      data-testid='toggle-button'>
      <img 
        src={icon} 
        alt={altText}
        className='svg' />
    </button>
  )
}

export default ToggleView