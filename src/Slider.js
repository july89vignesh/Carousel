import React, { useState, useEffect } from "react";
import ImgComp from "./ImgComp";

function Slider() {
  const sliderArr = [
    {
      id: "1",
      imagePath:
        "http://hdwpro.com/wp-content/uploads/2018/07/Awesome-Lake-Image.jpeg",
      show: true
    },
    {
      id: "2",
      imagePath:
        "http://hdwpro.com/wp-content/uploads/2017/01/3D-Cool-Image.jpg",
      show: true
    },
    {
      id: "3",
      imagePath:
        "http://hdwpro.com/wp-content/uploads/2017/09/Widescreen-Arizona-Wallpaper.jpg",
      show: true
    },
    {
      id: "4",
      imagePath:
        "http://hdwpro.com/wp-content/uploads/2017/05/Ocean-HD-Wallpaper.jpg",
      show: true
    }
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goRight();
    }, 5000);
    return () => clearInterval(interval);
  }, [x]);

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
        <i className="fas fa-chevron-left fa-2x" />
      </button>
      <button id="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right fa-2x" />
      </button>
    </div>
  );
}

export default Slider;
