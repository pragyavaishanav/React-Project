import React from "react";
import Header from "../sections/header/header.component";
import AnimScroll from "../sections/animator/animator.component";
import Hscroller from "../components/hscroller/hscroller.component";

const Homepage = () => (
  <div>
    <Header></Header>
    <AnimScroll></AnimScroll>
    <Hscroller></Hscroller>
  </div>
);

export default Homepage;
