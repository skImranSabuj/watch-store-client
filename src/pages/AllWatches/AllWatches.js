import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
// import usewatchs from '../../../hooks/usewatchs';
import loading from '../../images/Clock.gif';
import Product from '../../componenets/Product/Product';
import useWatches from '../../hooks/useWatches';

const AllWatches = () => {
    // const [watchs, setwatchs] = useState([]);
    const watchs = useWatches();
    console.log(watchs);
    return (
        <div className="container py-5">
            <h2 className="text-center py-2">All of our watch collections!</h2>
            <h4 className="text-center">
                {
                    watchs.length === 0 ? <img src={loading} alt="" className="w-25" /> : ''
                }

            </h4>

            <div className="services-container">
                {

                    watchs.map(watch => <Product key={watch._id}
                        watch={watch}
                    ></Product>)



                }

            </div>


        </div>
    );
};

export default AllWatches;