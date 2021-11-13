import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';

const Dashboard = () => {
    const {logOut} = useAuth();
    return (
        <div>
           <Row>
                <Col xs={12} md={12} className="text-center py-3 d-flex justify-content-center">
                    <div className="mx-5">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="#pay">Payment</Nav.Link>
                            <Nav.Link as={Link} to="/contact" title="You can review, once order approved">Review</Nav.Link>
                            <Nav.Link as={Link} to="/allWatches">Explore</Nav.Link>
                            <Nav.Link as={Link} to="/allorders">
                                <button onClick={logOut} className="btn btn-outline-secondary">Logout</button>
                            </Nav.Link>

                        </Nav>
                    </div>
                </Col>
                <Col xs={12} md={12} className="text-center py-3">
                  
                        <h3>Payment Methods</h3>
                       <img id="pay" name="pay" src="https://carusjewellery.com/wp-content/uploads/2019/12/Payment-options-from-Carus-Jewellery-.png" alt="" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} className="">
                    <MyOrders></MyOrders>
                </Col>
            </Row> 
        </div>
    );
};

export default Dashboard;