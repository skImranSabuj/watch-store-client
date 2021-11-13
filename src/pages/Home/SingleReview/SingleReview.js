import React from 'react';
import { Col } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const star = <FontAwesomeIcon icon={faStar} />

const SingleReview = ({review}) => {
    const {name, email,order_id, rate}=review;
    return (
        <Col md={4} className="p-5 border">
                                <div className="img-name">
                                    <img className="rounded-circle" src="https://randomuser.me/api/portraits/thumb/women/69.jpg" alt="" />
                                    <p><h5>Alex carry</h5>{star}{star}{star}{star}{star}</p>
                                </div>
                                <blockquote className="text-center pt-3">"Loved Extour.. Amazing site for tour"</blockquote>
                            </Col>
    );
};

export default SingleReview;