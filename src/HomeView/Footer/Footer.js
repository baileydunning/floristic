import { useContext } from 'react'
import HomeContext from '../HomeContext'
import './Footer.scss'

const Footer = ({ jumpToPage }) => {
  const context = useContext(HomeContext)

  return (
    <footer className='footer'>
      { context.pageNumber > 1 && <button onClick={() => jumpToPage(context.pageNumber -= 1)}>←</button>}
      <p>{context.pageNumber}</p>
      { context.pageNumber < 18879 && <button onClick={() => jumpToPage(context.pageNumber += 1)}>→</button>}
    </footer>
  )
}

export default Footer