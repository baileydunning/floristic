import Header from './Header'
import HomeContext from '../HomeContext'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Header', () => {
  let header
  let handleFetch
  let handleLinks
  let toggleView

  beforeEach(() => {
    const mockContext = { view: 'all' }
    
    handleFetch = jest.fn()
    handleLinks = jest.fn()
    toggleView = jest.fn()

    render(
      <HomeContext.Provider value={mockContext}>
        <Header
          query={null}
          toggleView={toggleView}
        />
      </HomeContext.Provider>
    )

    header = screen.getByTestId('header')
  })

  it('should render the toggle button', () => {
    const title = screen.getByText('floristic')
    expect(header && title).toBeInTheDocument()
  })

  it('should mock the context', () => {
    const toggleBtn = screen.getByAltText('all-plants')
    expect(toggleBtn).toBeInTheDocument()
  })

  it('should render the search bar', () => {
    const searchField = screen.getByPlaceholderText('search...')
    expect(searchField).toBeInTheDocument()
  })

  it('should render the toggle button', () => {
    const toggleBtn = screen.getByTestId('toggle-button')
    expect(toggleBtn).toBeInTheDocument()
  })
})