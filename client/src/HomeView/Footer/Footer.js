import { useEffect, useState } from 'react'
import './Footer.scss'

const Footer = ({ pageNumber, maxPage, jumpToPage }) => {
  const [maximum, setMaximum] = useState('10')
 
  useEffect(() => {  
    if (maxPage.includes('&q')) {
      let newMax = maxPage.split('&')[0]
      setMaximum(parseInt(newMax))
    } else {
      setMaximum(parseInt(maxPage))
    }
  }, [maximum, maxPage])

  const handleClick = (event, num) => {
    event.preventDefault()
    jumpToPage(num)
  }

  return (
    <footer className='footer' data-testid='footer'>
      { parseInt(pageNumber) > 1 && 
        <button 
          onClick={(event) => handleClick(event, parseInt(pageNumber) - 1)}>
          ←
        </button>
      }
      <p>{ pageNumber }</p>
      { parseInt(pageNumber) < maximum && 
        <button 
          onClick={(event) => handleClick(event, parseInt(pageNumber) + 1)}>
          →
        </button>
      }
    </footer>
  )
}

export default Footer