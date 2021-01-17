import CardContainer from './CardContainer'
import { screen, render } from '@testing-library/react'
import { samplePlantList, sampleFavorites } from '../../testData'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'

describe('CardContainer', () => {
  const history = createMemoryHistory()
  let addToFavorites
  let removeFromFavorites
  let card

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
    card = screen.getByText('Evergreen oak')
  })

  it('should render the card container', () => {
    const allCards = screen.getAllByAltText('image')
    
    expect(card).toBeInTheDocument()
    expect(allCards.length).toBe(4)
  })

  it('should indicate whether a plant has been favorited', () => {
    const favorites = screen.getAllByAltText('favorite')
    const otherPlants = screen.getAllByAltText('notFavorite')
    
    expect(favorites.length).toBe(1)
    expect(otherPlants.length).toBe(3)
  })

})