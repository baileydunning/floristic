import SearchBar from './SearchBar/SearchBar'
import ToggleView from './ToggleView/ToggleView'
import '../../images/floral-background.jpg'
import './Header.scss'

const Header = ({ handleFetch, toggleView }) => {
  return (
    <header className='header'>
      <h1 className='title'>floristic</h1>
      <SearchBar handleFetch={ handleFetch }/>
      <ToggleView toggleView={ toggleView }/>
    </header>
  )
}

export default Header