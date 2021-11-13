import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Product from '../../../componenets/Product/Product';
import useWatches from '../../../hooks/useWatches';
import loading from '../../../images/Clock.gif';
import './Products.css'

const Products = () => {
    // const [places, setPlaces] = useState([]);
    const watches = useWatches();
    return (
        <div className="container">
            <h2 className="text-center py-2">Explore Places with Extour!</h2>
            <h4 className="text-center">
                {
                    watches.length === 0 ? <img src={loading} alt="" className="w-25" /> : ''
                }

            </h4>

            <div className="services-container">
                {

                    watches.slice(0, 6).map(watch => <Product key={watch._id}
                        watch={watch}
                    ></Product>)



                }

            </div>


        </div>
    );
};

export default Products;