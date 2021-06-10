
import React from 'react';
import Header from '../sections/header/header.component';
import AnimScroll from '../sections/animator/animator.component';
import Footer from '../sections/footer/footer.component';
import Card from '../sections/card/card.component';
import Card2 from '../sections/card2/card2.component';

const Homepage = () => (
    <div>
        <Header></Header>
        <AnimScroll></AnimScroll>
        <Card></Card>
        <Card2></Card2>
        <Footer></Footer>
    </div>

);

export default Homepage;
