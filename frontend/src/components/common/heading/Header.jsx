import React, {useState} from 'react'
import Head from './Head'
import { Link } from "react-router-dom" 
import './header.css'
import { HiOutlineX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false)
  const location = useLocation();

   // Check if the current location is login or signup
   const isLoginPage = location.pathname === '/login';
   const isSignupPage = location.pathname === '/signup';
   const isActive = (path) => window.location.pathname === path;

   // Render the header only if not on login or signup pages
   if (isLoginPage || isSignupPage) {
       return null;
   }
  
  return (
    <>
       <Head />
       <header activeClassName="text-blue-500">
         <nav className='flexSB flex justify-between' >
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)} >
            <li><Link to='/'  className={`text-xl font-light mr-6 ${isActive('/') ? 'text-black' : ''}`}>Home</Link></li>
            <li><Link to='/findTutor' className={`text-xl font-light mr-6 ${isActive('/findTutor') ? 'text-black' : ''}`}>Find a Tutor</Link></li>
            <li><Link to='/becomeTutor' className={`text-xl font-light mr-6 ${isActive('/becomeTutor') ? 'text-black' : ''}`}>Become a Tutor</Link></li>
            <li><Link to='/about' className={`text-xl font-light mr-6 ${isActive('/about') ? 'text-black' : ''}`}>About</Link></li>
            <li><Link to='/pricing' className={`text-xl font-light mr-6 ${isActive('/pricing') ? 'text-black' : ''}`}>Pricing</Link></li>
            <li> <Link to='/contact' className={`text-xl font-light mr-6 ${isActive('/contact') ? 'text-black' : ''}`}>Contact</Link></li>
          </ul>
          <div className="social flex space-x-4 text-white font-light">
               <FaInstagram />
               <FaFacebook />
               <FaTwitter />
               <FaYoutube />
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <HiOutlineX /> : <FaBars />}
          </button>
         </nav>
         
       </header>
    </>
  )
}

export default Header