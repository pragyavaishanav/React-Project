import React from "react";
import "./animator.styles.scss";

import PrimaryButton from "../../components/button/button.component";
import CarouselData from "../../datafiles/carouseldata";
import Carousel from "../../components/carousel/carousel.component";

const AnimScroll = () => (
  <div className="container">
    <div>
      <div className="home-intro">
        FUTURE OF INSTRUMENTATION MONITORING IS HERE
      </div>

      <br />

      <div style={{ float: "left", color: "white", fontWeight: "bold" }}>
        INTELLIGENT IOT PLATFORM FOR MONITORING INSTRUMENTATION
      </div>

      <br />

      <div style={{ float: "left", paddingTop: "1vw", display: "flex" }}>
        <PrimaryButton>WATCH THE VIDEO</PrimaryButton>
        <PrimaryButton color="brown">BOOK A DEMO</PrimaryButton>
      </div>
    </div>

    <div>
      <Carousel CarouselData={CarouselData} />
    </div>
  </div>
);

export default AnimScroll;
