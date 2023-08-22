import React from "react";

import Counter from "./Counter";
import './counter.css'

const Awrapper = () => {
  return (
           <>
              <div className="countup_contain">
                <p className="headerText one">Our Progress In Figures</p>
                <div style={{ width: "10rem" }} className="divider" />
                <div className="counter-container">
                  <Counter value={7900} text={"Qualified Tutors"} />
                  <Counter value={5800} text={"Students"} />
                  <Counter value={30} text={"Courses"} />
                </div>
              </div>
           </>
  );
};

export default Awrapper;
