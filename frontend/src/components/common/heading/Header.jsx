import React, {useState} from 'react'
import Head from './Head'
import { Link } from "react-router-dom" 
import './header.css'
import { HiOutlineX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [click, setClick] = useState(false)
  const location = useLocation();

   // Check if the current location is login or signup
   const isLoginPage = location.pathname === '/login';
   const isSignupPage = location.pathname === '/signup';

   // Render the header only if not on login or signup pages
   if (isLoginPage || isSignupPage) {
       return null;
   }
  
  return (
    <>
       <Head />
       <header>
         <nav className='flexSB flex justify-between'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/findTutor'>Find a Tutor</Link></li>
            <li><Link to='/becomeTutor'>Become a Tutor</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li> <Link to='/contact'>Contact</Link></li>
          </ul>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <HiOutlineX /> : <FaBars />}
          </button>
         </nav>
         
       </header>
    </>
  )
}

export default Header