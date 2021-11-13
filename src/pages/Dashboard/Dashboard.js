import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AllOrders from '../AllOrders/AllOrders';
import MyOrders from '../MyOrders/MyOrders';
import { useState, useEffect } from 'react';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
const Dashboard = () => {
    const {logOut,user} = useAuth();
    let isAdmin=false;
    if(user.email==='admin@admin.com' || user.role){
        isAdmin=true;
    }
    return (
        <div>
           <Row>
                <Col xs={12} md={12} className="text-center py-3 d-flex justify-content-center">
                    <div className="mx-5">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/payment">Payment</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard" title="You can review, once order approved">Review</Nav.Link>
                            {true&&<div>
                                <Nav.Link as={Link} to="/allWatches">All Watches</Nav.Link>
                            </div>}
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
                <Col xs={12} md={12} className="text-center py-3">
                  <MakeAdmin></MakeAdmin>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} className="">
                    {!isAdmin?<MyOrders/>:<AllOrders/>}
                </Col>
            </Row> 
        </div>
    );
};

export default Dashboard;