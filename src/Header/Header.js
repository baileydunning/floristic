import SearchContainer from './SearchContainer/SearchContainer'
import '../images/floral-background.jpg'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='title'>floristic</h1>
      <SearchContainer />
    </header>
  )
}

export default Header