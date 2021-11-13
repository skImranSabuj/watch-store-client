import React, { useEffect, useState } from 'react';
const axios = require('axios');

const useWatches = () => {
    const [watches, setwatches] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/watches')
            .then(res => res.json())
            .then(data => setwatches(data));
    }, []);
    return watches;
};

export default useWatches;