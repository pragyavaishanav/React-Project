import React from "react";
import Carousel from "../components/carousel/carousel.component";
import CarouselData from "../datafiles/carouseldata";

function TestPage() {
  return (
    <div>
      <Carousel CarouselData={CarouselData} />
    </div>
  );
}

export default TestPage;
