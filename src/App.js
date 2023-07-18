import React from 'react'
import './App.css'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
  return (
    
      <>
      <Router>
        <Header/>
      </Router>
        
      </>
   
  )
}

export default App