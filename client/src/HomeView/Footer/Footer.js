import { useContext, useEffect, useState } from 'react'
import HomeContext from '../HomeContext'
import './Footer.scss'

const Footer = ({ determineMaxPage, jumpToPage }) => {
  const [maxPage, setMaxPage] = useState(1)
  const context = useContext(HomeContext)
  
  useEffect(() => {
    let pageNum = determineMaxPage()
    
    if (pageNum.includes('&q')) {
      pageNum = pageNum.split('&')[0]
      setMaxPage(parseInt(pageNum))
    } else {
      setMaxPage(parseInt(pageNum))
    }
  })

  return (
    <footer className='footer' data-testid='footer'>
      { context.pageNumber > 1 && 
        <button 
          onClick={() => jumpToPage(context.pageNumber -= 1)}>
          ←
        </button>}
      <p>{ context.pageNumber }</p>
      { context.pageNumber < maxPage && 
        <button 
          onClick={() => jumpToPage(context.pageNumber += 1)}>
          →
        </button>}
    </footer>
  )
}

export default Footer