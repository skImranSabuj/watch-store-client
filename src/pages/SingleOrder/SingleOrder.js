import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
const axios = require('axios');

const SingleOrder = ({ order }) => {
    const history = useHistory();
    const [status, setStatus] = useState(order.status);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://young-ocean-72177.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    const refreshPage=()=> {
        window.location.reload(false);
      }
    const handleApprove = (id) => {
        setStatus('Approved')
        fetch(`https://young-ocean-72177.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Approved Successful');
                    // refreshPage();
                }
            });

    }
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
        <tr key={order._id}>
            <td>{order._id}</td>
            <td>{order.name}</td>
            <td>{order.phone}</td>
            <td>{order.email}</td>
            <td>{status}</td>
            <td>
                {
                    status === 'Pending' ? <button onClick={() => handleApprove(order._id)}
                    > Approve</button> : ''
                }
                < button onClick={() => handleCancel(order._id)}>Decline ordering</button>
            </td>
        </tr>
    );
};

export default SingleOrder;