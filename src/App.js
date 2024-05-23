import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import './App.css'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
