import CardContainer from './CardContainer'
import { screen, render } from '@testing-library/react'
import { samplePlantList, sampleFavorites } from '../../testData'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('CardContainer', () => {
  const history = createMemoryHistory()
  let addToFavorites
  let removeFromFavorites

  beforeEach(() => {
    addToFavorites = jest.fn()
    removeFromFavorites = jest.fn()

    render(
      <Router history={history}>
        <CardContainer
          cardsOnDisplay={samplePlantList}
          favorites={sampleFavorites}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </Router>
    )
  })

  it('should render the card container', () => {
    const card = screen.getByText('Evergreen oak')
    const allCards = screen.getAllByAltText('image')
    
    expect(card).toBeInTheDocument()
    expect(allCards.length).toBe(4)
  })

})