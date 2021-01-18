import Footer from './Footer'
import HomeContext from '../HomeContext'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('Footer', () => {
  let determineMaxPage
  let jumpToPage

  describe('FirstPage', () => {
    beforeEach(() => {
      const mockContext = { pageNumber: 1 }
      determineMaxPage = jest.fn()
      jumpToPage = jest.fn()
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

    it('should render the footer', () => {
      const footer = screen.getByTestId('footer')
      expect(footer).toBeInTheDocument()
    })

    it('should mock the context', () => {
      const pageNumber = screen.getByText('1')
      expect(pageNumber).toBeInTheDocument()
    })

    it('should not show previous button on first page', () => {
      const navigatePageBtns = screen.getAllByRole('button')
      expect(navigatePageBtns.length).toBe(1)
    })

    it('should be able to click to the next page', () => {
      const nextPageBtn = screen.getByText('→')
      userEvent.click(nextPageBtn)
      expect(jumpToPage).toHaveBeenCalledTimes(1)
      expect(jumpToPage).toHaveBeenCalledWith(2)
    })
  })

  describe('LastPage', () => {
    beforeEach(() => {
      const mockContext = { pageNumber: 5 }
      determineMaxPage = jest.fn()
      jumpToPage = jest.fn()
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


    it('should not show next button on last page', () => {
      const navigatePageBtns = screen.getAllByRole('button')
      expect(navigatePageBtns.length).toBe(1)
    })

    it('should be able to click to the next page', () => {
      const prevPageBtn = screen.getByText('←')
      userEvent.click(prevPageBtn)
      expect(jumpToPage).toHaveBeenCalledTimes(1)
      expect(jumpToPage).toHaveBeenCalledWith(4)
    })
  })
})