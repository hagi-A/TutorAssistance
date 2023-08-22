import React from 'react'
import { useLogout } from '../../../hooks/useLogout'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { Link } from "react-router-dom"

const Head = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <>
        <section className='head'>
          <div className='container flexSB'>
              <div className='logo'>
                <h1>TUTOR ASSISTANCE</h1>
                <span>ONLINE TUTORING & PORTAL</span>
              </div>
              <div className='social'>
                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-instagram icon'></i>
                <i className='fab fa-twitter icon'></i>
                <i className='fab fa-youtube icon'></i>
              </div>
              <nav>
                {user && (
                <div>
                  <span className="text-violet-400">{user.username}</span>
                <button onClick={handleClick} className='text-violet-400 border border-violet-400 bg-white bg-opacity-20'>Log out</button>
                </div>
                )}
              </nav>
            
          </div>
        </section>
    </>
  )
}

export default Head