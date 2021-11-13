import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
const axios = require('axios');

const SingleUser = ({ user }) => {
    const history = useHistory();
    const { refreshPage } = useAuth();
    const [status, setStatus] = useState(user.status);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://young-ocean-72177.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const handleApprove = (id) => {
        setStatus('Approved')
        fetch(`https://young-ocean-72177.herokuapp.com/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
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
            const url = `https://young-ocean-72177.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    refreshPage();
                    alert('Deleted! Please refresh!');

                });
        }
    }
    return (
        <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.displayName}</td>
            <td>{user.email}</td>
            <td>{user.role&&'Not Admin'}</td>
            <td>
                {/* {
                    status === 'Pending' ? <button onClick={() => handleApprove(user._id)}
                    > Approve</button> : ''
                } */}
                < button onClick={() => handleCancel(user._id)}>Decline usering</button>
            </td>
        </tr>
    );
};

export default SingleUser;