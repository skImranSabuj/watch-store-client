import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';
const axios = require('axios');

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const history = useHistory();
    useEffect(() => {
        // fetch('https://damp-wildwood-05961.herokuapp.com/orderings')
        fetch(`https://young-ocean-72177.herokuapp.com/orders?type=all`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    console.log(orders);

    return (
        <div className="container-md py-2">
            <h2 className="text-center pt-4 pb-2">All The Orders</h2>
            <div className="table-responsive pb-5">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length && orders.map(order => <SingleOrder
                                key={order._id}
                                order={order}></SingleOrder>)



                        }
                    </tbody>
                </Table>
            </div>

        </div >
    );
};

export default AllOrders;