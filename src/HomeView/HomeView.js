import React, { useEffect, useState, useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import HomeContext from './HomeContext'
import { initialState, homeReducer } from './HomeReducer'
import Header from './Header/Header'
import CardContainer from './CardContainer/CardContainer'
import Loading from '../Loading/Loading'
import Footer from './Footer/Footer'
import Error from '../Error/Error'
import { getPlantList, searchPlants } from '../apiCalls'

const HomeView = ({ query, page }) => {
  const history = useHistory()
  const [state, dispatch] = useReducer(homeReducer, initialState)
  const [cardsOnDisplay, setCardsOnDisplay] = useState(state.plantList)
  const [favorites, setFavorites] = useState([])
  const [pageNumber, setPageNumber] = useState(page)
  const [search, setSearch] = useState(query)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    retrieveFromStorage()
  }, [localStorage])

  useEffect(() => {
    saveToStorage()
  }, [favorites])

  useEffect(() => {
    fetchPlantList()
  }, [search, page])

  useEffect(() => {
    (state.plantList.length === 0) && fetchPlantList()

    if (state.view === 'all') {
      setCardsOnDisplay(state.plantList)
    } else {
      setCardsOnDisplay(favorites)
    }
  }, [state.view, state.plantList, favorites])

  const fetchPlantList = () => {
    setLoading(true)
    if (!search) {
      getPlantList(pageNumber)
        .then(data => {
          makeFetchHappen(data)
          history.push(`/${pageNumber}`)
        })
        .catch(err => setError(err))
    } else {
      searchPlants(search, pageNumber)
        .then(data => {
          makeFetchHappen(data)
        })
        .catch(err => setError(err))
    }
  }

  const makeFetchHappen = (data) => {
    handleFetch(data.data)
    handleLinks(data.links)
    setLoading(false)
  }

  const handleFetch = (data) => {
    const action = { type: 'FETCH_DATA', plantList: data }
    dispatch(action)
  }

  const handleLinks = (links) => {
    const action = { type: 'FETCH_LINKS', links: links }
    dispatch(action)
  }

  const toggleView = () => {
    const action = { type: 'TOGGLE_VIEW' }
    dispatch(action)
  }

  const retrieveFromStorage = () => {
    const storedFavorites = localStorage.getItem('favorites')
    const parsedFavorites = JSON.parse(storedFavorites)
    if (parsedFavorites) {
      setFavorites(parsedFavorites)
      saveToStorage()
    }
  }

  const saveToStorage = () => {
    localStorage.clear()
    let stringifiedFavorites = JSON.stringify(favorites)
    localStorage.setItem(`favorites`, stringifiedFavorites)
  }

  const addToFavorites = (plant) => {
    setFavorites([...favorites, plant])
    saveToStorage()
  }

  const removeFromFavorites = (id) => {
    const favPlants = favorites.filter(plant => plant.id !== id)
    setFavorites(favPlants)
    saveToStorage()
  }

  const updateSearch = (queryRequest) => {
    setSearch(queryRequest)

    if (state.view === 'favorites') {
      toggleView()
    }
  }

  const jumpToPage = (page) => {
    setPageNumber(page)

    if (search) {
      history.push(`/search/${search}/${page}`)
    } else {
      history.push(`/${page}`)
    }
  }

  const determineMaxPage = () => {
    if (state.links.last) {
      return state.links.last.split('=')[1]
    } else {
      return '1'
    }
  }

  return (
    <HomeContext.Provider value={state}>
      {!error ?
        <section>
          <Header
            toggleView={toggleView}
            updateSearch={updateSearch}
          />
          {!loading ?
            <CardContainer
              favorites={favorites}
              cardsOnDisplay={cardsOnDisplay}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            /> :
            <Loading />
          }
          {state.view === 'all' &&
            <Footer
              pageNumber={page}
              maxPage={determineMaxPage()}
              jumpToPage={jumpToPage}
            />
          }
        </section> :
        <Error />
      }
    </HomeContext.Provider>
  )
}

export default HomeView