import Loading from './Loading'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Loading', () => {
  beforeEach(() => {
    render(<Loading />)
  })

  it('should render the loading section', () => {
    const loadingSection = screen.getByTestId('loading')
    expect(loadingSection).toBeInTheDocument()
  })  
})