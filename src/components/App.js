import React, {useState} from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

import logo from '../images/Shape.png';

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);

  const slideMaxIndex = 2;
  const slideWidth = 1024;
  const posThreshold = 100;

  const setSlide = (slideIndex) => () => {
    setCurrentSlideIndex(slideIndex);
    setCurrentX(slideIndex * -slideWidth);
  };

  const handleSwipeStart = (e) => {
    const evt = e.clientX ? e : e.touches[0];
    setStartX(evt.clientX);
    setMouseDown(true);
  };

  const handleSwipeMove = (e) => {
    if (!mouseDown) return;

    const evt = e.clientX ? e : e.touches[0];

    const diff = Math.abs(startX - evt.clientX) < 30 ? 0 : startX - evt.clientX;

    let x = currentX - diff;

    if (x > 0) {
      x = 0;
    }

    if (x < -slideWidth * slideMaxIndex) {
      x = -slideWidth * slideMaxIndex;
    }

    if (
      (currentSlideIndex === 0 && x > 0) ||
      (currentSlideIndex === slideMaxIndex && x < -slideWidth * slideMaxIndex)
    ) {
      return;
    }

    setCurrentX(x);
  };

  const handleSwipeEnd = (e) => {
    const finalX = e.clientX || e.changedTouches[0].clientX;

    let nextSlideIndex = currentSlideIndex;

    if (Math.abs(startX - finalX) > posThreshold) {
      if (startX > finalX) {
        nextSlideIndex =
          currentSlideIndex < slideMaxIndex
            ? currentSlideIndex + 1
            : currentSlideIndex;
      } else {
        nextSlideIndex =
          currentSlideIndex === 0 ? currentSlideIndex : currentSlideIndex - 1;
      }
    }

    setCurrentSlideIndex(nextSlideIndex);
    setCurrentX(nextSlideIndex * -slideWidth);
    setMouseDown(false);
  };
  return (
    <div className="wrapper">
        <div
          className="slider"
          onTouchMove={handleSwipeMove}
          onTouchStart={handleSwipeStart}
          onTouchEnd={handleSwipeEnd}
          onMouseDown={handleSwipeStart}
          onMouseMove={handleSwipeMove}
          onMouseUp={handleSwipeEnd}
          style={{
            transform: `translate(${currentX}px, 0)`,
            cursor: mouseDown ? "grabbing" : "grab",
          }}
        >
        <First setSlide={setSlide} />
        <Second currentSlideIndex={currentSlideIndex} />
        <Third />
        </div>
        <img src={logo} alt="logo" className="logo" />
        <button className="button__home" onClick={setSlide(0)}></button>
    </div>
  );
}

export default App;