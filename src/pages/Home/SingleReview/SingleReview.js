import React from 'react';
import { Col } from 'react-bootstrap';
import { faStar,faStarOfDavid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userImage from '../../../images/user-icon.jpg'
const star = <FontAwesomeIcon icon={faStar} />
const emptyStar = <FontAwesomeIcon icon={faStarOfDavid} />

const SingleReview = ({review}) => {
    const {name, email,order_id, rate, comment}=review;
    const getRatingType=pos=>{
if(pos<=rate) return star
else return emptyStar
    }
    return (
        <Col md={3} className="p-2 border">
            <div className="img-name">
                <img className="rounded-circle img-fluid" style={{width:'40px'}} src={userImage} alt="" />
                <p><h6>{name.slice(0,18)}</h6>{getRatingType(1)}{getRatingType(2)}{getRatingType(3)}{getRatingType(4)}{getRatingType(5)}({rate})</p>
            </div>
            <blockquote className="text-center pt-3">"{comment.slice(0,35)}"</blockquote>
        </Col>
    );
};

export default SingleReview;