import React, { useState, useLayoutEffect } from "react";
import "./carousel.styles.scss";

const Carousel = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.CarouselData.length;

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, length]);

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  if (!Array.isArray(props.CarouselData) || props.CarouselData <= 0) {
    return null;
  }

  return (
    <section>
      <div className="imagecontainer">
        {/* <button className="sliderbutton1" onClick={nextSlide}>
        next
      </button>
      <button className="sliderbutton2" onClick={prevSlide}>
        previous
      </button> */}

        {props.CarouselData.map((imageData, index) => (
          <div
            className={
              index === current
                ? "slide active"
                : index > current
                ? "slide left"
                : "slide right"
            }
            key={index}
          >
            <br />
            {index === current && (
              <div>
                <img
                  className="image"
                  alt="information"
                  key={imageData.index}
                  src={imageData.imageUrl}
                ></img>
                <p className="carouselHeading"> {imageData.message} </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="learnmorebutton">
        <a className="learnmorelink" href={`/test/${current}`}>
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Carousel;
