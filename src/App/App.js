import React, { useEffect, useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import HomeView from '../HomeView/HomeView'
import FeatureView from '../FeatureView/FeatureView'
import './App.scss'

const App = () => {
  const [routeId, setRouteId] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      setRouteId(location.pathname.split('/')[1])
    }
  }, [routeId, location.pathname])

  return (
    <main>
      <Switch>
        <Route
          exact
          path='/'
          render={() => 
            <HomeView />
          }
        />
        <Route
          exact
          path='/:id'
          render={() => 
            <FeatureView
              id={routeId}
            />
          }
        />
      </Switch>
    </main>
  )
}

export default App
