import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useWatches from '../../hooks/useWatches';
import loading from '../../images/Clock.gif'
// import { places } from '../Data';
const DetailService = () => {
    const [place, setPlace] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/watches/${id}`)
            .then(res => res.json())
            .then(data => setPlace(data));
    }, []);
    console.log('from details', place);
    const { _id, color, title, img, brand_name, details, price,guarantee } = place;
    return (
        <div className="container py-5">
            <h2 className="text-center pb-3">Features and More: {title}</h2>
            {/* <img src={loading} alt="" /> */}
            <div className="card mb-3">
                {
                    !title ?
                        <img src={loading} alt="" className="w-25" />
                        :
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">{title}</h2>
                                    <h4>Brand: {brand_name}</h4>
                                    
                                    <p className="card-text"><span  style={{border:`1px solid ${color}`}} className="px-2 rounded-pill">Color: {color}</span> <span className="card-text border rounded-pill px-2">Price: {price}</span> </p>
                                    <p className="card-text">Guarantee: {guarantee} Years</p>
                                    
                                    <p className="card-text py-2">{details}</p>
                                    <button className="btn btn-secondary">Purchase</button>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </div>
    );
};

export default DetailService;