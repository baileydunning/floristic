import SearchBar from './SearchBar/SearchBar'
import ToggleView from './ToggleView/ToggleView'
import './Header.scss'

const Header = ({ handleFetch, handleLinks, toggleView }) => {
  return (
    <header className='header'>
      <h1 className='title'>floristic</h1>
      <SearchBar 
        handleFetch={handleFetch} 
        handleLinks={handleLinks}
      />
      <ToggleView toggleView={toggleView} />
    </header>
  )
}

export default Header