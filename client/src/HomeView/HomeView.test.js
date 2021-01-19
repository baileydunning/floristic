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
import { homeReducer } from './HomeReducer'


describe('HomeView', () => {
  const mockState = {
    plantList: samplePlantList.data,
    links: samplePlantList.links,
    pageNumber: 1,
    view: 'all'
  }
  jest.mock('../apiCalls')

  jest.mock('./HomeReducer.js', () => ({
    FETCH_DATA: () => mockFetchData(),
    FETCH_LINKS: () => mockFetchLinks(),
    JUMP_TO_PAGE: () => mockJumpToPage(),
    TOGGLE_VIEW: () => mockToggleView()
  }))
  const { result } = renderHook(() => useReducer(homeReducer, mockState))
  const [state, dispatch] = result.current
  
  const history = createMemoryHistory()
  const mockFetchData = jest.fn().mockImplementation(() => {
    state.plantList = samplePlantList.data
  })
  const mockFetchLinks = jest.fn().mockImplementation(() => {
    state.links = samplePlantList.links
  })
  const mockJumpToPage = jest.fn()
  const mockToggleView = jest.fn()
  
  
  
  
  beforeEach(async () => {
    await act(async () => {
      render(
        <Router history={history}>
          <HomeView />
        </Router>
      )
    })
  })

  it('should hold state in reducer', () => {
    expect(state.plantList).toBeTruthy()
    expect(state.plantList.length).toBe(4)
    expect(state.links).toBeTruthy()
    expect(state.view).toBe('all')
    expect(state.pageNumber).toBe(1)
  })

  it('should dispatch actions', () => {
  
  })
  
  it('should render the home page', () => {
    const header = screen.getByText('floristic')
    expect(header).toBeInTheDocument()
  })
  
  it('should trigger search', () => {
    const inputField = screen.getByPlaceholderText('search...')
    userEvent.type(inputField, 'bailey')
    const submitBtn = screen.getByText('GO')
    expect(inputField).toHaveValue('bailey')
    expect(submitBtn).toBeInTheDocument()
  })
})