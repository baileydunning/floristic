import React, { useEffect, useState, useReducer } from 'react'
import HomeContext from './HomeContext'
import { initialState, homeReducer } from './HomeReducer'
import Header from './Header/Header'
import CardContainer from './CardContainer/CardContainer'
import Loading from '../Loading/Loading'
import Footer from './Footer/Footer'
import { getPlantList } from '../apiCalls'

// const useStateWithLocalStorage = localStorageKey => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem(localStorageKey) || ''
//   );

//   React.useEffect(() => {
//     localStorage.setItem(localStorageKey, value);
//   }, [value]);

//   return [value, setValue];
// }

const HomeView = () => {
  const [state, dispatch] = useReducer(homeReducer, initialState)
  const [cardsOnDisplay, setCardsOnDisplay] = useState(state.plantList)
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    const parsedFavorites = JSON.parse(storedFavorites)
    setFavorites(parsedFavorites)
  }, [localStorage])

  useEffect(() => {
    (state.plantList.length === 0) && fetchPlantList()

    if (state.view === 'all') {
      setCardsOnDisplay(state.plantList)
    } else {
      setCardsOnDisplay(favorites)
    }
  }, [state.view, state.plantList, state.pageNumber])

  useEffect(() => {
    saveToStorage()
  }, [favorites])

  const fetchPlantList = () => {
    setLoading(true)
    getPlantList(state.pageNumber)
      .then(data => {
        handleFetch(data.data)
        setLoading(false)
      })
      .catch(error => console.log(error))
    console.log('fetch')
  }
  
  const handleFetch = (data) => {
    const action = { type: 'FETCH_DATA', plantList: data }
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

  const saveToStorage = () => {
    localStorage.clear()
    let stringifiedFavorites = JSON.stringify(favorites)
    localStorage.setItem('favorites', stringifiedFavorites)
  }

  // const retrieveFromStorage = () => {
  //   let storedFavorites = localStorage.getItem('favorites')
  //   return JSON.parse(storedFavorites)
  //   // setFavorites(parsedFavorites)
  // }

  const addToFavorites = (plant) => {
    setFavorites([...favorites, plant])
    saveToStorage()
    console.log('added plant to favorites')
  }

  const removeFromFavorites = (id) => {
    const favPlants = state.favorites.filter(plant => plant.id !== id)
    setFavorites(favPlants)
    saveToStorage()
    console.log('removed plant from favorites')
  }

  return (
    <HomeContext.Provider value={state}>
      <section>
        <Header
          handleFetch={handleFetch} 
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
        <Footer jumpToPage={jumpToPage}/>
      </section>
    </HomeContext.Provider>
  )
}

export default HomeView