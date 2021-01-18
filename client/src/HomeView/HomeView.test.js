import HomeView from './HomeView'
import { useReducer } from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event'
import { samplePlantList, sampleFavorites, samplePlantData } from '../testData'
import '@testing-library/jest-dom'
import { getPlantList } from '../apiCalls'
import { homeReducer, initialState } from './HomeReducer'


describe('HomeView', () => {
  const history = createMemoryHistory()
  const mockFetchData = jest.fn()
  // const mockFetchLinks = jest.fn()
  // const mockJumpToPage = jest.fn()
  // const mockToggleView = jest.fn()
  
  jest.mock('../apiCalls')
  jest.mock('./HomeReducer.js', () => ({
    FETCH_DATA: mockFetchData
  }))
  
  // const { result } = renderHook(() => useReducer(homeReducer, initialState))
  // const [state, dispatch] = result.current
  
  beforeEach(async () => {
    // getPlantList.mockResolvedValue(() => samplePlantList)
    mockFetchData.mockImplementation(() => {
      return state.plantList = samplePlantList.data
    })
   
    await act(async () => {
      render(
        <Router history={history}>
          <HomeView />
        </Router>
      )

      // dispatch({type: 'FETCH_DATA', plantList: samplePlantList.data})
    })
  })
  
  it('should render the home page', async () => {
    
    screen.debug()
  })
})