import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useWatches from '../../hooks/useWatches';
import MySingleorder from '../MySingleorder/MySingleorder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const location = useLocation();
    const history = useHistory();


    const { user } = useAuth();
    console.log(user.email)

    useEffect(() => {
        fetch(`https://young-ocean-72177.herokuapp.com/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        }
        )
            .then(res => {
                if (res.status == 200) return res.json()
                else if (res.status == 401) history.push('/login')

            })
            .then(data => setOrders(data));
    }, []);

    // const MyOrders = orders.filter(ordering => ordering.email === user.email);



    const handleCancel = (id) => {
        const confirmDelete = window.confirm('Are you sure?');
        if (confirmDelete) {
            const url = `https://young-ocean-72177.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    alert('Deleted! Please refresh!');
                });
        }
    }

    return (
        <div className="container-md py-2">
            <h2 className="text-center pt-4 pb-2">My orders:</h2>
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
                            // MyOrders.map(order => <tr>
                            orders.map(order => <MySingleorder
                                key={order._id}
                                order={order}
                                handleCancel={handleCancel}
                            >
                                
                            </MySingleorder>)
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default MyOrders;