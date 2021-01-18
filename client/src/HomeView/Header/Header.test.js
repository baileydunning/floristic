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
    const mockContext = { view: 'all', pageNumber: 1 }
    
    handleFetch = jest.fn()
    handleLinks = jest.fn()
    toggleView = jest.fn()

    render(
      <HomeContext.Provider value={mockContext}>
        <Header
          handleFetch={handleFetch}
          handleLinks={handleLinks}
          toggleView={toggleView}
        />
      </HomeContext.Provider>
    )

    header = screen.getByTestId('header')
  })

  it('should render the toggle button', () => {
    const title = screen.getByText('floristic')

    expect(header).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })

  it('should mock the context', () => {
    const toggleBtn = screen.getByAltText('all-plants')
    expect(toggleBtn).toBeInTheDocument()
  })

  it('should render the search bar', () => {
    const searchField = screen.getByPlaceholderText('search...')
    const submitButton = screen.getByText('GO')

    expect(searchField).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  it('should render the toggle button', () => {
    const toggleBtn = screen.getByTestId('toggle-button')
    expect(toggleBtn).toBeInTheDocument()
  })
})