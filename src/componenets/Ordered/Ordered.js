import React from 'react';
import { useParams } from 'react-router';

const Ordered = ({ key, order }) => {
    const { _id } = useParams();
    return (
        <div className="container py-5">
            <p className="text-center pb-3">User: {order.name}</p>
        </div>
    );
};

export default Ordered;