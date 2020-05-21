import React, { useState, useEffect } from "react";
import ImgComp from "./ImgComp";

function Slider() {
  const sliderArr = [
    {
      id: "1",
      imagePath: "path-to-image",
      show: true
    },
    {
      id: "2",
      imagePath: "path-to-image",
      show: false
    },
    {
      id: "3",
      imagePath: "path-to-image",
      show: false
    },
    {
      id: "4",
      imagePath: "path-to-image",
      show: false
    }
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  setInterval(() => {
    console.log("Interval triggered");
  }, 3000);
  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            <ImgComp src={item.imagePath} />
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i className="fas fa-chevron-left" />
      </button>
      <button id="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right" />
      </button>
    </div>
  );
}

export default Slider;
