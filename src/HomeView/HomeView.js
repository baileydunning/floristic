import React, { useEffect, useState, useReducer } from 'react'
import Context from './Context'
import { initialState, reducer } from './Reducer'
import Header from '../Header/Header'
import ToggleCardView from '../ToggleCardView/ToggleCardView'
import CardContainer from '../CardContainer/CardContainer'
import Loading from './Loading/Loading'
import { getPlantList } from '../apiCalls'

const HomeView = () => {
  const [cardsOnDisplay, setCardsOnDisplay] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getPlantList()
      .then(data => handleFetch(data.data))
      .catch(error => console.log(error))
  }, [state.plantList])

  const handleFetch = (data) => {
    const action = { type: 'FETCH_DATA', plantList: data }
    dispatch(action)
    setCardsOnDisplay(state.plantList)
  }

  const toggleView = () => {
    const action = { type: 'TOGGLE_VIEW' }
    dispatch(action)

    if (state.view === 'all') {
      setCardsOnDisplay(state.plantList)
    } else {
      setCardsOnDisplay(state.favorites)
    }
  }

  const addToFavorites = (plant) => {
    const action = { type: 'ADD_TO_FAVORITES', plant: plant }
    dispatch(action)
  }

  return (
    <Context.Provider value={state.view}>
      <section>
        <Header />
        <ToggleCardView toggleView={toggleView}/>
        {state.plantList.length > 0 ?
          <CardContainer
            cardsOnDisplay={cardsOnDisplay}
            addToFavorites={addToFavorites}
          /> :
          <Loading />
        }
      </section>
    </Context.Provider>
  )
}

export default HomeView