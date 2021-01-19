import { useContext, useEffect, useState } from 'react'
import './Footer.scss'

const Footer = ({ pageNumber, maxPage, jumpToPage }) => {
  const [maximum, setMaximum] = useState('1')
 
  useEffect(() => {  
    if (maxPage.includes('&q')) {
      let newMax = maxPage.split('&')[0]
      setMaximum(parseInt(newMax))
    } else {
      setMaximum(parseInt(maxPage))
    }
  }, [maximum])


  return (
    <footer className='footer' data-testid='footer'>
      { parseInt(pageNumber) > 1 && 
        <button 
          onClick={() => jumpToPage(parseInt(pageNumber) - 1)}>
          ←
        </button>
      }
      <p>{ pageNumber }</p>
      { parseInt(pageNumber) < maximum && 
        <button 
          onClick={() => jumpToPage(parseInt(pageNumber) + 1)}>
          →
        </button>
      }
    </footer>
  )
}

export default Footer