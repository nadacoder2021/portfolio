import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";


import "./Carousel.css";

export const CarouselItem = ({ title, text, image, link, width }) => {
  return (
    <div className="gpt3__carousel-item" style={{ width: width }}>
      <div className="gpt3__carousel-item_container">
        <h1>{title}</h1>
        <img src={image} alt="pic" />
        <p>{text}</p>
        <a href={link}>Go to Project</a>
      </div>
    </div>
  );
};

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  }
      useEffect(()=>{
      const interval = setInterval(() => {
          if(!paused){
          updateIndex(activeIndex + 1)};
      }, 2000)

      return () => {
          if(interval){
              clearInterval(interval)
          }

      }
  })
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });
  return (
    <div {...handlers} className="gpt3__carousel">
      <div
        className="gpt3__carousel-inner"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        <div className="test">
          {" "}
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
      <div className="gpt3__carousel-indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
