import Footer from './Footer'
import HomeContext from '../HomeContext'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'


describe('Footer', () => {

  beforeEach(() => {
    const mockContext = { pageNumber: 1 }
    let determineMaxPage = jest.fn()
    let jumpToPage = jest.fn()
    determineMaxPage.mockImplementation(() => '5')

    render(
      <HomeContext.Provider value={mockContext}>
        <Footer
          determineMaxPage={determineMaxPage}
          jumpToPage={jumpToPage}
        />
      </HomeContext.Provider>
    )
  })
  
  it('should mock the context', () => {
    const pageNumber = screen.getByText('1')
    expect(pageNumber).toBeInTheDocument()
  })
})