import React, { useEffect, useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import HomeView from '../HomeView/HomeView'
import FeatureView from '../FeatureView/FeatureView'
import './App.scss'

const App = () => {
  const [plantId, setPlantId] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      setPlantId(location.pathname.split('/')[1])
    }
  }, [plantId])

  const selectPlant = (plant) => {
    setPlantId(plant.id)
  }

  return (
    <main>
      <Switch>
        <Route
          exact
          path='/'
          render={() => 
            <HomeView 
              selectPlant={selectPlant} 
            />
          }
        />
        {plantId && <Route
          exact
          path={`/${plantId}`}
          render={() => 
            <FeatureView
              id={plantId}
            />
          }
        />}
      </Switch>
    </main>
  );
}

export default App
