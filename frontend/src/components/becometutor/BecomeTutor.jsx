import React from "react";
import '../findtutor/findtutor.css'
import Header from "../common/heading/Header";
import Title from "../common/title/Title";
import { FaArrowRight } from "react-icons/fa";
// import AvailableTutors from "./AvailableTutors";
// import FindTutorNote from "./FindTutorNote.";

const BecomeTutor = () => {
  return (
    <>
      {/* <Back/> */}
      
      <section className="bg-img bg-cover bg-fixed min-h-screen bg-no-repeat ">
      <Header />
      <section className="bg-cover bg-fixed  top-0 left-0 z-0 w-full h-screen pt-20 pr-50 text-white">
         <div className='container'>
          <div>
            {/* <Title  title='"EMPOWERING LEARNING BEYOND THE CLASSROOM"'/> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus dolorum pariatur, repellat aperiam sequi eos magni facere sunt, 
                distinctio sapiente quasi fugiat illum quia nulla laborum doloremque, expedita nam.</p> */}
                {/* <div className=" mt-40"> 
                  <button className='primary-btn'>GET STARTED NOW <FaArrowRight /></button>
                  <button>Find a Tutor NOW <FaArrowRight /></button>
                </div> */}
          </div>
         </div>
        </section>
      </section>
      <div className="mt-9">
        {/* <FindTutorNote />
        <AvailableTutors /> */}
      </div>
    </>
  );
};

export default BecomeTutor;
//bg-center bg-cover bg-no-repeat h-screen flex items-center justify-center