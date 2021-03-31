import SearchBar from './SearchBar'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('SearchBar', () => {
  let inputField

  beforeEach(() => {
    render(
      <SearchBar query={null} />
    )
      
    inputField = screen.getByPlaceholderText('search...')
  })
  
  it('should render the search bar', () => {
    expect(inputField).toBeInTheDocument()
  })
  
  it('should render submit button with value', async () => {
    userEvent.type(inputField, 'bailey')
    expect(inputField).toHaveValue('bailey')

    const submitBtn = screen.getByText('GO')
    expect(submitBtn).toBeInTheDocument()
  })
})