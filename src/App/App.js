import React, { useReducer } from 'react'
import { Switch, Route } from 'react-router-dom'
import MainContext from './MainContext'
import { initialState, mainReducer } from './MainReducer'
import HomeView from '../HomeView/HomeView'
import FeatureView from '../FeatureView/FeatureView'
import './App.scss'

const App = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  const selectPlant = (id) => {
    const action = { type: 'SELECT_PLANT' }
    dispatch(action)
  }

  return (
    <MainContext.Provider>
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            <HomeView 
              selectPlant={selectPlant} 
            />
          }}
        />
        <Route
          exact
          path='/:id'
          render={() => {
            <FeatureView
              id={state.plantId}
            />
          }}
        />
      </Switch>
    </MainContext.Provider>
  );
}

export default App
