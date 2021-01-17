import { useContext } from 'react'
import HomeContext from '../HomeContext'
import './Footer.scss'

// make dynamic to interpolate link pages

const Footer = ({ maxPage, jumpToPage }) => {
  const context = useContext(HomeContext)

  return (
    <footer className='footer'>
      { context.pageNumber > 1 && <button onClick={() => jumpToPage(context.pageNumber -= 1)}>←</button>}
      <p>{context.pageNumber}</p>
      { context.pageNumber < maxPage && <button onClick={() => jumpToPage(context.pageNumber += 1)}>→</button>}
    </footer>
  )
}

export default Footer