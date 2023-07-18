import React from 'react'
import Head from './Head'
import { Link } from "react-router-dom" 
import './header.css'

const Header = () => {
  return (
    <>
       <Head />
       <header>
         <nav className='flexSB'>
          <ul className='flexSB'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/findTutor'>Find a Tutor</Link></li>
            <li><Link to='/becomeTutor'>Become a Tutor</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li> <Link to='/contact'>Contact</Link></li>
          </ul>
          <div className='start'>
            <div className='button'>GET STARTED</div>
          </div>
         </nav>
       </header>
    </>
  )
}

export default Header