import SearchBar from './SearchBar/SearchBar'
import ToggleView from './ToggleView/ToggleView'
import './Header.scss'

const Header = ({ handleFetch, toggleView }) => {
  return (
    <header className='header'>
      <h1 className='title'>floristic</h1>
      <section className='user-interaction'>
        <SearchBar handleFetch={handleFetch} />
        <ToggleView toggleView={toggleView} />
      </section>
    </header>
  )
}

export default Header