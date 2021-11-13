import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import useUsers from '../../hooks/useUsers';
import SingleUser from '../SingleUser/SingleUser';
// import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    // const [email, setEmail] = useState('');
    const users = useUsers();

    return (
        <div className="container-md py-2">
            <h2 className="text-center pt-4 pb-2">All The users</h2>
            <div className="table-responsive pb-5">
                <Table striped busered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length && users.map(user => <SingleUser
                                key={user._id}
                                user={user}></SingleUser>)



                        }
                    </tbody>
                </Table>
            </div>

        </div >
    );
};

export default MakeAdmin;