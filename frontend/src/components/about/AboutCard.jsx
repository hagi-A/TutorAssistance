import React from 'react'
import Title from '../common/title/Title'
import { homeAbout } from "../../Dummydata"
import Awrapper from './Awrapper'
import './about.css'
import AboutImage  from '../../images/AboutImage.jpg'

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src={AboutImage} alt='' />
          </div>
          <div classname='right row'>
            <Title title='Benefits About TUTOR ASISSTANCE' />
            <div className='items'>
              {homeAbout.map((val) => {
                return(
                  <div className='item flexSB rounded border border-violet-300'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        </section>
        <div className="m-8">
        <Awrapper />
        </div>
    </>
  )
}

export default AboutCard