import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App/App'
import './index.scss'

const router = <BrowserRouter basename='/floristic'><App /></BrowserRouter>

ReactDOM.render(router, document.getElementById('root'))
