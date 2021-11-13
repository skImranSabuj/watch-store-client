import React, { useEffect, useState } from 'react';
const axios = require('axios');

const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://young-ocean-72177.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [reviews]);
    return  reviews;
};

export default useReviews;