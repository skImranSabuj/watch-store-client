import React, { useEffect, useState } from 'react';
const axios = require('axios');

const useWatches = () => {
    const [watches, setwatches] = useState([]);
    useEffect(() => {
        fetch('https://young-ocean-72177.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setwatches(data));
    }, []);
    return watches;
};

export default useWatches;