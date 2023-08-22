import React from "react";
import CountUp from "react-countup";
import "./counter.css";

const Counter = ({ value, text }) => {
  return (
    <div className="count_contain">
      <div className="count_up">
        <CountUp
          duration={2}
          delay={1}
          end={value}
          suffix="+"
          enableScrollSpy={true}
        />
      </div>
      <p className="count_label">{text}</p>
    </div>
  );
};

export default Counter;
