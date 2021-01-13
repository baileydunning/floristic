import React from 'react'
import { Route } from 'react-router-dom'
import HomeView from '../HomeView/HomeView'
import FeatureView from '../FeatureView/FeatureView'
import './App.scss'

const App = () => {
  return (
    <main>
      <Route
        path='/'
        component={HomeView}
      />
      <Route 
        path='/:plantName'
        component={FeatureView}
      />
    </main>
  );
}

export default App
