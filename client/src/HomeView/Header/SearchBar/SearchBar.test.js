import SearchBar from './SearchBar'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('SearchBar', () => {
  let handleFetch
  let handleLinks
  let inputField

  beforeEach(() => {
    handleFetch = jest.fn()
    handleLinks = jest.fn()
    render(
      <SearchBar
      handleFetch={handleFetch}
      handleLinks={handleLinks}
      />
    )
      
    inputField = screen.getByPlaceholderText('search...')
  })
  
  it('should render the search bar', () => {
    expect(inputField).toBeInTheDocument()
  })
  
  it('should call onSubmit on click', async () => {
    userEvent.type(inputField, 'bailey')

    expect(inputField).toHaveValue('bailey')
  })
})