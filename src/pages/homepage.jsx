import React from "react";
import Header from "../sections/header/header.component";
import AnimScroll from "../sections/animator/animator.component";
import Download from "../sections/download/download.component";

const Homepage = () => (
  <div>
    <Header></Header>
    <AnimScroll></AnimScroll>
    <Download></Download>
  </div>
);

export default Homepage;
