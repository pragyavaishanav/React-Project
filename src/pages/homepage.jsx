import React from "react";
import Header from "../sections/header/header.component";
import AnimScroll from "../sections/animator/animator.component";
import Card from "../sections/card/card.component";
import Card2 from "../sections/card2/card2.component";
// import Card3 from "../sections/card3/card3.component";
import Card4 from "../sections/card4/card4.component";
import Card5 from "../sections/card5/card5.component";
// import Card6 from "../sections/card6/card6.component";
// import Card7 from "../sections/card7/card7.component";
import Card11 from "../sections/card11/card11.component";
import Footer from "../sections/footer/footer.component";

const Homepage = () => (
  <div>
    <Header />
    <AnimScroll />
    <Card></Card>
    <Card2></Card2>
    <Card4></Card4>
    <Card5></Card5>
    <Card11></Card11>
    <Footer></Footer>
  </div>
);

export default Homepage;
