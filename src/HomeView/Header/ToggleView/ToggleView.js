import { useContext, useState } from 'react'
import HomeContext from '../../HomeContext'
import heartFill from '../../../images/heart-fill.svg'
import leaf from '../../../images/leaf.svg'
import './ToggleView.scss'

const ToggleView = ({ toggleView }) => {
  const [icon, setIcon] = useState(heartFill)
  const context = useContext(HomeContext)

  const handleToggle = () => {
    toggleView()
    context.view === 'all' ? setIcon(leaf) : setIcon(heartFill)
  }

  return (
    <button 
      onClick={handleToggle}
      className='toggle-button'>
      <img 
        src={icon} 
        alt='toggle-view'
        className='svg' />
    </button>
  )
}

export default ToggleView