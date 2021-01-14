import React, { useEffect, useState, useReducer } from 'react'
import HomeContext from './HomeContext'
import { initialState, homeReducer } from './HomeReducer'
import Header from '../Header/Header'
import CardContainer from './CardContainer/CardContainer'
import Loading from '../Loading/Loading'
import { getPlantList } from '../apiCalls'

const HomeView = ({ selectPlant }) => {
  const [state, dispatch] = useReducer(homeReducer, initialState)
  const [cardsOnDisplay, setCardsOnDisplay] = useState(state.plantList)

  useEffect(() => {
    getPlantList()
      .then(data => handleFetch(data.data))
      .catch(error => console.log(error))

    if (state.view === 'all') {
      setCardsOnDisplay(state.plantList)
    } else {
      setCardsOnDisplay(state.favorites)
    }
  }, [state.view, state.plantList, state.favorites])

  const handleFetch = (data) => {
    const action = { type: 'FETCH_DATA', plantList: data }
    dispatch(action)
  }

  const toggleView = () => {
    const action = { type: 'TOGGLE_VIEW' }
    dispatch(action)
  }

  const addToFavorites = (plant) => {
    const action = { type: 'ADD_TO_FAVORITES', plant: plant }
    dispatch(action)
    console.log('added plant to favorites')
  }

  const removeFromFavorites = (id) => {
    const action = { type: 'REMOVE_FROM_FAVORITES', id: id }
    dispatch(action)
    console.log('removed plant from favorites')
  }

  return (
    <HomeContext.Provider value={state}>
      <section>
        <Header toggleView={toggleView}/>
        {state.plantList.length > 0 ?
          <CardContainer
            cardsOnDisplay={cardsOnDisplay}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            selectPlant={selectPlant}
          /> :
          <Loading />
        }
      </section>
    </HomeContext.Provider>
  )
}

export default HomeView