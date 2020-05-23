import React from "react";
import "./styles.css";
import Slider from "./Slider";

const fadein = "fadein";

export default function App() {
  return (
    <div className="App">
      <Slider anim={fadein} />
    </div>
  );
}
