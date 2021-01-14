import React, { useEffect, useState, useReducer } from 'react'
import Context from './Context'
import { initialState, reducer } from './Reducer'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import Loading from './Loading/Loading'
import { getPlantList } from '../apiCalls'

const HomeView = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
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
  }, [state.view, state.plantList])

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
  }

  const removeFromFavorites = (id) => {
    const action = { type: 'REMOVE_FROM_FAVORITES', id: id }
    dispatch(action)
  }

  return (
    <Context.Provider value={state.view}>
      <section>
        <Header />
        <button onClick={toggleView}>Toggle view</button>
        {state.plantList.length > 0 ?
          <CardContainer
            cardsOnDisplay={cardsOnDisplay}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          /> :
          <Loading />
        }
      </section>
    </Context.Provider>
  )
}

export default HomeView