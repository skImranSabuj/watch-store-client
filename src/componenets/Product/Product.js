import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import loading from '../../images/Clock.gif'
import { ButtonGroup, Button } from 'react-bootstrap';
const Product = (props) => {
    const { _id, key, title, img, brand_name, details } = props.watch;
    const photoimg = { loading };
    // img?:;
    return (
        <div>
            <div>
                <div className="cards">
                    <div className="photo">
                        {img ? <img className="card-img-top" src={img} alt="" /> :
                            <img className="card-img-top w-50" src={loading} alt="loading" />
                        }
                    </div>
                    <div className="card-body">

                        <h5 className="card-title">{title.slice(0,20)}</h5>
                        <a href="./home" className="btn btn-outline-dark btn-sm">{brand_name ? brand_name : 'Countey Name'}</a>
                        <p className="card-text">{details ? details.slice(0,30) : 'details'}</p>
                        <ButtonGroup className="me-2 buttons" aria-label="Basic example">
                            <Button variant="secondary"><Link to={`/orders/${_id}`}>

                                Book Now</Link></Button>{' '}
                            <Button variant="secondary"><Link to={`/details/${_id}`}>

                                More Details</Link></Button>

                        </ButtonGroup>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;