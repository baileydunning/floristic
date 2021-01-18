import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeView from '../HomeView/HomeView'
import FeatureView from '../FeatureView/FeatureView'
import Error from '../Error/Error'
import './App.scss'

const App = () => {
  return (
    <main>
      <Switch>
        <Route
          exact
          path='/'
          render={() => 
            <HomeView query={null} />
          }
        />
        <Route
          exact
          path='/search/:query'
          render={({ match }) =>
            <HomeView query={match.params.query} />
          }
        />
        <Route
          exact
          path='/plant/:id'
          render={({ match }) => 
            <FeatureView id={match.params.id} />
          }
        />
        <Route
          path='/'
          component={Error}
        />
      </Switch>
    </main>
  )
}

export default App
