import SearchContainer from './SearchContainer/SearchContainer'
import ToggleView from './ToggleView/ToggleView'
import '../images/floral-background.jpg'
import './Header.scss'

const Header = ({ toggleView }) => {
  return (
    <header className='header'>
      <h1 className='title'>floristic</h1>
      <SearchContainer />
      <ToggleView toggleView={ toggleView }/>
    </header>
  )
}

export default Header