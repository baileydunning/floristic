import SearchBar from './SearchBar/SearchBar'
import ToggleView from './ToggleView/ToggleView'
import './Header.scss'

const Header = ({ updateSearch, toggleView }) => {
  return (
    <header className='header' data-testid='header'>
      <h1 className='title'>floristic</h1>
      <SearchBar updateSearch={updateSearch} />
      <ToggleView toggleView={toggleView} />
    </header>
  )
}

export default Header