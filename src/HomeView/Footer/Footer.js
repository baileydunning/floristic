import { useContext } from 'react'
import HomeContext from '../HomeContext'

const Footer = ({ jumpToPage }) => {
  const context = useContext(HomeContext)

  return (
    <footer>
      { context.pageNumber < 18879 && <button onClick={() => jumpToPage(context.pageNumber += 1)}>Next page</button>}
      <p>{context.pageNumber}</p>
      { context.pageNumber > 1 && <button onClick={() => jumpToPage(context.pageNumber -= 1)}>Previous page</button>}
    </footer>
  )
}

export default Footer