import React from 'react';
import Header from '../sections/header/header.component';
import AnimScroll from '../sections/animator/animator.component';
import Footer from '../sections/footer/footer.component';
import Card from '../sections/card/card.component';

const Homepage = () => (
    <div>
        <Header></Header>
        <AnimScroll></AnimScroll>
        <Card></Card>
        <Footer></Footer>
    </div>

);

export default Homepage;