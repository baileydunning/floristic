import Footer from './Footer'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'

describe('Footer', () => {
  const history = createMemoryHistory()
  const jumpToPage = jest.fn()

  describe('FirstPage', () => {
    beforeEach(() => {
      render(
        <Router history={history}>
          <Footer
            pageNumber={1}
            maxPage={'3'}
            jumpToPage={jumpToPage}
          />
        </Router>
      )
    })

    it('should render the footer', () => {
      const footer = screen.getByTestId('footer')
      expect(footer).toBeInTheDocument()
    })

    it('should display pageNumber', () => {
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
      render(
        <Router history={history}>
          <Footer
            pageNumber={3}
            maxPage={'3'}
            jumpToPage={jumpToPage}
          />
        </Router>
      )
    })

    it('should not show next button on last page', () => {
      const navigatePageBtns = screen.getAllByRole('button')
      expect(navigatePageBtns.length).toBe(1)
    })

    it('should be able to click to the previous page', () => {
      const prevPageBtn = screen.getByText('←')
      userEvent.click(prevPageBtn)
      expect(jumpToPage).toHaveBeenCalledTimes(1)
      expect(jumpToPage).toHaveBeenCalledWith(2)
    })
  })

})
