import React from 'react'
import { Route } from 'react-router-dom'
import HomeView from '../HomeView/HomeView'
// import FeatureView from '../FeatureView'
import './App.scss'

const App = () => {
  return (
    <main>
      <h1>floristic</h1>
      <Route
        path='/'
        render={HomeView}
      />
    </main>
  );
}

export default App
