import React, { useEffect, useState, useReducer } from 'react'
import HomeContext from './HomeContext'
import { initialState, homeReducer } from './HomeReducer'
import Header from './Header/Header'
import CardContainer from './CardContainer/CardContainer'
import Loading from '../Loading/Loading'
import Footer from './Footer/Footer'
import { getPlantList } from '../apiCalls'

const HomeView = () => {
  const [state, dispatch] = useReducer(homeReducer, initialState)
  const [cardsOnDisplay, setCardsOnDisplay] = useState(state.plantList)
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    retrieveFromStorage()
  }, [localStorage])

  useEffect(() => {
    saveToStorage()
  }, [favorites])

  useEffect(() => {
    (state.plantList.length === 0) && fetchPlantList()

    if (state.view === 'all') {
      setCardsOnDisplay(state.plantList)
    } else {
      setCardsOnDisplay(favorites)
    }
  }, [state.view, state.plantList, state.pageNumber, favorites])

  const fetchPlantList = () => {
    setLoading(true)
    getPlantList(state.pageNumber)
      .then(data => {
        handleFetch(data.data)
        handleLinks(data.links)
        setLoading(false)
      })
      .catch(error => console.log(error))
    console.log('fetch')
  }

  const handleFetch = (data) => {
    const action = { type: 'FETCH_DATA', plantList: data }
    dispatch(action)
  }

  const handleLinks = (links) => {
    const action = { type: 'FETCH_LINKS', links: links }
    dispatch(action)
  }

  const jumpToPage = (page) => {
    const action = { type: 'JUMP_TO_PAGE', pageNumber: page }
    dispatch(action)
    fetchPlantList()
  }

  const toggleView = () => {
    const action = { type: 'TOGGLE_VIEW' }
    dispatch(action)
  }

  const retrieveFromStorage = () => {
    const storedFavorites = localStorage.getItem('favorites')
    const parsedFavorites = JSON.parse(storedFavorites)
    setFavorites(parsedFavorites)
    saveToStorage()
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

  const determineMaxPage = () => {
    if (state.links.last) {
      return state.links.last.split('=')[1]
    } else {
      return '1'
    }
  }

  return (
    <HomeContext.Provider value={state}>
      <section>
        <Header
          handleFetch={handleFetch}
          handleLinks={handleLinks}
          toggleView={toggleView}
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
            determineMaxPage={determineMaxPage} 
            jumpToPage={jumpToPage} 
          />
        }
      </section>
    </HomeContext.Provider>
  )
}

export default HomeView