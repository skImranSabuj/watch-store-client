import React from 'react';
import Footer from '../../../componenets/Footer/Footer';
import Banner from '../Banner/Banner';
import Ratings from '../Ratings/Ratings';
import Services from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Ratings></Ratings>
            
        </div>
    );
};

export default Home;