import React from 'react';
import Footer from '../../../componenets/Footer/Footer';
import Banner from '../Banner/Banner';
import Ratings from '../Ratings/Ratings';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Ratings></Ratings>
            
        </div>
    );
};

export default Home;