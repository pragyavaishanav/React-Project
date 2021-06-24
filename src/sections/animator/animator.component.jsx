import React from "react";
import { Link } from "react-router-dom";

import "./animator.styles.scss";

import Carousel from "../../components/carousel/carousel.component";
import CarouselData from "../../datafiles/carouseldata";
import PrimaryButton from "../../components/button/button.component";

const AnimScroll = () => (
  <div className="h-screen ml-32 mr-32 pt-32 flex-col flex md:flex-row">
    <div className="introContent pt-48">
      <div className="home-intro">
        FUTURE OF INSTRUMENTATION MONITORING IS HERE
      </div>

      <div style={{ float: "left", color: "white", fontWeight: "bold" }}>
        INTELLIGENT IOT PLATFORM FOR MONITORING INSTRUMENTATION
      </div>

      <br />

      <div style={{ float: "left", paddingTop: "1vw", display: "flex" }}>
        <PrimaryButton>WATCH THE VIDEO</PrimaryButton>
        <Link to="/contact-us">
          <PrimaryButton color="brown">BOOK A DEMO</PrimaryButton>
        </Link>
      </div>
    </div>
    <Carousel CarouselData={CarouselData} />
  </div>
);

export default AnimScroll;
