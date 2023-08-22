import React from 'react'
import './App.css'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Home from './components/home/Home'
import About from './components/about/About'
import FindTutor from './components/findtutor/FIndTutor'
import Price from './components/pricing/Price'
import Login from './components/sign/Login'
import Signup from './components/sign/Signup'
import { useAuthContext } from './hooks/useAuthContext'


const App = () => {
  const { user } = useAuthContext()

  return (
    
      <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route  path="/" element={user ? <Home/> : <Navigate to = "/login"/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/findTutor" element={<FindTutor/>} />
          <Route  path="/pricing" element={<Price/>} />
          <Route  path="/login" element={!user ? <Login/> : <Navigate to= "/"/>} />
          <Route  path="/signup" element={!user ? <Signup/> : <Navigate to = "/"/>} />
        </Routes>
      </BrowserRouter>
        
      </>
   
  )
}

export default App