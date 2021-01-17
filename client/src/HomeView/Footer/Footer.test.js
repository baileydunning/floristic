import Footer from './Footer'
import HomeContext from '../HomeContext'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Footer', () => {
  let nextPage
  let prevPage

  const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(
      <HomeContext.Provider value={providerProps}>{ui}</HomeContext.Provider>,
      renderOptions
    )
  }


  // beforeEach(() => {
  //   render(
  //       <HomeContext.Consumer>
  //         <Footer />
  //       </HomeContext.Consumer>
  //   )

  //   nextPage = screen.getByText('Next page')
  //   prevPage = screen.getByText('Previous page')
  // })

  it('should have a default page number from Provider', () => {
    const providerProps = {
      pageNumber: 1
    }

    customRender(<Footer />, providerProps)
    screen.debug()

  })

  it('should render the footer', () => {
  })

  it('should redirect to a new url', () => {
    
  })
})