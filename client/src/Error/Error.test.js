import Error from './Error'
import { screen, render } from '@testing-library/react'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('Error', () => {
  const history = createMemoryHistory()

  beforeEach(() => {
    render(
      <Router history={history}>
        <Error />
      </Router>
    )

    history.location.pathname = '/error'
  })

  it('should render the error section', () => {
    const oops = screen.getByText('Oops!')
    expect(oops).toBeInTheDocument()
  })

  it('should redirect to the home page on click', () => {
    const homeLink = screen.getByText('home')
    
    expect(history.location.pathname).toBe('/error')
    userEvent.click(homeLink)
    expect(history.location.pathname).toBe('/')
  })
})