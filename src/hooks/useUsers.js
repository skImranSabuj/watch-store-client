import React, { useEffect, useState } from 'react';
const axios = require('axios');

const useUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://young-ocean-72177.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [users]);
    return users;
};

export default useUsers;