import React from 'react'
import './hero.css'

const Hero = () => {
    
  return (
    <>
        <section className='hero'>
         <div className='container'>
          <div className='row'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus dolorum pariatur, repellat aperiam sequi eos magni facere sunt, 
                distinctio sapiente quasi fugiat illum quia nulla laborum doloremque, expedita nam.</p>
                <div className='button'>
                  <button className='primary-btn'>GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i></button>
                  <button>Find a Tutor NOW <i className='fa fa-long-arrow-alt-right'></i></button>
                </div>
          </div>
         </div>
        </section>
        <div className='margin'></div>
    </>
  )
}

export default Hero