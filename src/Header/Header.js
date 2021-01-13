import SearchContainer from '../SearchContainer/SearchContainer'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <h1>floristic</h1>
      <SearchContainer />
    </header>
  )
}

export default Header