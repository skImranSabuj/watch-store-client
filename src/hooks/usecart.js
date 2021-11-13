import { useState, useEffect } from 'react';
import { getStoredCart } from '../localStorage/tempDb';

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getStoredCart();
        const keys = Object.keys(savedCart);
        fetch('https://damp-wildwood-05961.herokuapp.com/places/byKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(places => {
                if (places.length) {
                    const storedCart = [];
                    for (const _id in savedCart) {
                        const addedPlaces = places.find(place => place._id === _id);
                        if (addedPlaces) {
                            // set quantity
                            const quantity = savedCart[_id];
                            addedPlaces.quantity = quantity;
                            storedCart.push(addedPlaces);
                        }
                    }
        setCart(savedCart);
                }
            })


    }, []);

    return [cart, setCart];
}

export default useCart;