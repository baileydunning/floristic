import ToggleView from './ToggleView'
import HomeContext from '../../HomeContext'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('ToggleView', () => {
  let toggleView
  let toggleBtn

  beforeEach(() => {
    const mockContext = { view: 'all' }
    toggleView = jest.fn()

    render(
      <HomeContext.Provider value={mockContext}>
        <ToggleView
          toggleView={toggleView}
        />
      </HomeContext.Provider>
    )

    toggleBtn = screen.getByTestId('toggle-button')
  })

  it('should render the toggle button', () => {
    expect(toggleBtn).toBeInTheDocument()
  })

  it('should mock the context', () => {
    const allPlantsIcon = screen.getByAltText('all-plants')
    expect(allPlantsIcon).toBeInTheDocument()
  })

  it('should toggle on click', () => {
    userEvent.click(toggleBtn)
    expect(toggleView).toHaveBeenCalled()
  })
})