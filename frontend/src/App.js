import React from 'react'
import './App.css'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Home from './components/home/Home'
import About from './components/about/About'
import FindTutor from './components/findtutor/FIndTutor'
import BecomeTutor from './components/becometutor/BecomeTutor'
import Price from './components/pricing/Price'
import Login from './components/sign/Login'
import Signup from './components/sign/Signup'
import { useAuthContext } from './hooks/useAuthContext'
import Loading from './components/state/Loading'
import Footer from './components/common/footer/footer'
import ProtectedRoute from '../src/utils/ProtectedRoute'// Import the ProtectedRoute component
import AdminPage from './components/admin/AdminPage'
import ParentPage from './components/parent/ParentPage'
import StudentPage from './components/student/StudentPage'
import SupervisorPage from './components/supervisor/SupervisorPage'
import TutorPage from './components/tutor/TutorPage'

const App = () => {
  const { user } = useAuthContext()

  return (
    
      <>
      <BrowserRouter>
      {/* <Loading/> */}
        <Routes>
          <Route  path="/" element={user ? <Home/> : <Navigate to = "/login"/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/findTutor" element={<FindTutor/>} />
          <Route  path="/becomeTutor" element={<BecomeTutor/>} />
          <Route  path="/pricing" element={<Price/>} />
          <Route  path="/login" element={!user ? <Login/> : <Navigate to= "/"/>} />
          <Route  path="/signup" element={!user ? <Signup/> : <Navigate to = "/"/>} />

          <Route  path="/admin/*" element={<AdminPage/>} />
          <Route  path="/parent/*" element={<ParentPage/>} />
          <Route  path="/student/*" element={<StudentPage/>} />
          <Route  path="/tutor/*" element={<TutorPage/>} />
          <Route  path="/supervisor/*" element={<SupervisorPage/>} />


        {/* <Route path='/admin' element={<ProtectedRoute/>}/> */}


        </Routes>
        <Footer/>
      </BrowserRouter>
        
      </>
   
  )
}

export default App