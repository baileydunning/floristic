import FeatureView from './FeatureView'
import { screen, render, waitFor } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { act } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { samplePlantData } from '../testData'
import '@testing-library/jest-dom'
import { getPlant } from '../apiCalls'
jest.mock('../apiCalls')

describe('FeatureView', () => {
  const history = createMemoryHistory()

  beforeEach(async () => {
    getPlant.mockResolvedValue(samplePlantData)

    await act(async () => {
      render(
        <Router history={history}>
          <FeatureView id={117699} />
        </Router>
      )
    })

    history.location.pathname = '/117699'
  })

  it('should render the feature section', () => {
    const featureView = screen.getByTestId('feature-view')
    expect(featureView).toBeInTheDocument()
  })

  it('should render the plant names', () => {
    const scientificName = screen.getByText('Cornus racemosa:')
    const commonName = screen.getByText('gray dogwood from the Dogwood family')

    expect(scientificName && commonName).toBeInTheDocument()
  })

  it('should display whether plant is edible or a vegetable', () => {
    const inedible = screen.getByText('✘ Inedible')
    const notVeggie = screen.getByText('✘ Not a Vegetable')
    
    expect(inedible && notVeggie).toBeInTheDocument()
  })

  it('should redirect to the homepage on click', () => {
    const goBack = screen.getByText('Go back')
    expect(history.location.pathname).toBe('/117699')
    userEvent.click(goBack)
    expect(history.location.pathname).toBe('/')
  })
})