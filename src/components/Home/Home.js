import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Inventory from '../Inventory/Inventory';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Slider></Slider>
            <Inventory></Inventory>
            <Footer></Footer>
        </>
    );
};

export default Home;