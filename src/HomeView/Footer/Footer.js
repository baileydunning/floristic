import { useEffect, useState } from 'react'
import './Footer.scss'

const Footer = ({ pageNumber, maxPage, jumpToPage }) => {
  const [maximum, setMaximum] = useState('10')
  const [pageInput, setPageInput] = useState(null)

  useEffect(() => {
    if (maxPage.includes('&q')) {
      let newMax = maxPage.split('&')[0]
      setMaximum(+newMax)
    } else {
      setMaximum(+maxPage)
    }
  }, [maximum, maxPage])

  const submitPage = e => {
    e.preventDefault()
    jumpToPage(+pageInput)
    setPageInput(null)
  }

  return (
    <section>
      <footer className='footer' data-testid='footer'>
        {+pageNumber > 1 &&
          <button
            onClick={() => jumpToPage(+pageNumber - 1)}>
            ←
        </button>
        }
        <form
          onSubmit={e => submitPage(e)}
          className="page-form"
        >
          <input
            type="number"
            className="page-input"
            placeholder={pageNumber}
            value={pageInput}
            min={0}
            max={maximum}
            onChange={e => setPageInput(e.target.value)}
          />
        </form>
        {+pageNumber < maximum &&
          <button
            onClick={() => jumpToPage(+pageNumber + 1)}>
            →
        </button>
        }
      </footer>
      <div className='footer-credits'>
        <a href='https://github.com/baileydunning' target='_blank'>developed by Bailey Dunning</a>
        <a href='https://docs.trefle.io/reference/' target='_blank'>data provided by Trefle REST API</a>
      </div>
    </section>
  )
}

export default Footer