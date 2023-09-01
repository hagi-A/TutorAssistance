import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'
import { FaArrowRight } from "react-icons/fa";
import Header from '../../common/heading/Header';



const Hero = () => {
    
  return (
    <>
        <Header />
        <section className='hero'>
         <div className='container'>
          <div className='row'>
            {/* <Title subtitle='WELCOME TO TUTOR ASSISTANCE' title='"EMPOWERING LEARNING BEYOND THE CLASSROOM"'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus dolorum pariatur, repellat aperiam sequi eos magni facere sunt, 
                distinctio sapiente quasi fugiat illum quia nulla laborum doloremque, expedita nam.</p>
                <div className='button'> */}
                  {/* <button className='primary-btn'>GET STARTED NOW <FaArrowRight /></button>
                  <button>Find a Tutor NOW <FaArrowRight /></button> */}
                </div>
        
         </div>
        </section>
        <div className='margin'></div>
    </>
  )
}

export default Hero