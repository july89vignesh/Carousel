import React, { useState, useEffect } from "react";
import ImgComp from "./ImgComp";
import { useTransition, animated } from "react-spring";

function Slider() {
  const [items] = useState([
    {
      id: 0,
      imagePath:
        "http://hdwpro.com/wp-content/uploads/2018/07/Awesome-Lake-Image.jpeg",
      show: true
    },
    {
      id: 1,
      imagePath:
        "http://hdwpro.com/wp-content/uploads/2017/01/3D-Cool-Image.jpg",
      show: true
    },
    {
      id: 2,
      imagePath:
        "http://hdwpro.com/wp-content/uploads/2017/09/Widescreen-Arizona-Wallpaper.jpg",
      show: true
    },
    {
      id: 3,
      imagePath:
        "http://hdwpro.com/wp-content/uploads/2017/05/Ocean-HD-Wallpaper.jpg",
      show: true
    }
  ]);
  const [index, setIndex] = useState(0);
  const goLeft = () => {
    index === 0
      ? setIndex(state => items.length - 1)
      : setIndex(state => (state - 1) % items.length);
  };
  const goRight = () => {
    setIndex(state => (state + 1) % items.length);
  };

  const fadingTextPropsTransition = useTransition(
    items[index],
    item => item.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { tension: 220, friction: 120 }
    }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(state => (state + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {fadingTextPropsTransition.map(({ item, props, key }) => (
        <animated.div
          key={key}
          className="slide"
          style={{
            ...props,
            position: "absolute"
          }}
        >
          <ImgComp src={item.imagePath} />
        </animated.div>
      ))}
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
