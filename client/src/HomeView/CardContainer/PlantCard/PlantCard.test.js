import PlantCard from './PlantCard'
import { screen, render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { sampleCard } from '../../../testData'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('PlantCard', () => {
  const history = createMemoryHistory()
  let addToFavorites
  let removeFromFavorites
  let card
  let favToggleBtn

  beforeEach(() => {
    addToFavorites = jest.fn()
    removeFromFavorites = jest.fn()
  })

  it('should render a plant card', () => {
    render(
      <Router history={history}>
        <PlantCard
          key={sampleCard.id}
          plant={sampleCard}
          isFavorite={false}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </Router>
    )

    card = screen.getByText('Evergreen oak')
    favToggleBtn = screen.getByTestId('fav-toggle')
    expect(card).toBeInTheDocument()
  })

  it('should be able to add to favorites', () => {
    render(
      <Router history={history}>
        <PlantCard
          key={sampleCard.id}
          plant={sampleCard}
          isFavorite={false}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </Router>
    )

    card = screen.getByText('Evergreen oak')
    favToggleBtn = screen.getByTestId('fav-toggle')
    const notFavorited = screen.getByAltText('notFavorite')
    expect(notFavorited).toBeInTheDocument()

    userEvent.click(favToggleBtn)
    
    const favorited = screen.getByAltText('favorite')
    expect(favorited).toBeInTheDocument()
    expect(addToFavorites).toHaveBeenCalledTimes(1)
    expect(addToFavorites).toHaveBeenCalledWith(sampleCard)
  })

  it('should be able to remove from favorites', () => {
    render(
      <Router history={history}>
        <PlantCard
          key={sampleCard.id}
          plant={sampleCard}
          isFavorite={true}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </Router>
    )

    card = screen.getByText('Evergreen oak')
    favToggleBtn = screen.getByTestId('fav-toggle')
    userEvent.click(favToggleBtn)

    const notFavorited = screen.getByAltText('notFavorite')
    expect(notFavorited).toBeInTheDocument()
    expect(removeFromFavorites).toHaveBeenCalledTimes(1)
    expect(removeFromFavorites).toHaveBeenCalledWith(678281)
  })

  it('should redirect to plant page when link is clicked', () => {
    render(
      <Router history={history}>
        <PlantCard
          key={sampleCard.id}
          plant={sampleCard}
          isFavorite={true}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </Router>
    )

    const learnMoreLink = screen.getByText('Learn More')
    userEvent.click(learnMoreLink)
    expect(history.location.pathname).toBe('/678281')
  })
})