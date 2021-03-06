import App from './App'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'

describe('App', () => {
  const history = createMemoryHistory()
  
  beforeEach(() => {
    render(
      <Router history={history}>
        <App />
      </Router>
    )
  })

  it('should render the app', () => {
    const title = screen.getByText('floristic')
    const searchBar = screen.getByPlaceholderText('search...')
    const toggleBtn = screen.getByAltText('all-plants')
    const footer = screen.getByTestId('footer')

    expect(title && searchBar && toggleBtn && footer).toBeInTheDocument()
  })
})
