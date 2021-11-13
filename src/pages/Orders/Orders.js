import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/usecart';
import { addToDb, getStoredCart } from '../../localStorage/tempDb';
import DetailService from '../DetailService/DetailService';
import loading from '../../images/Clock.gif'

const Orders = () => {
    const history = useHistory();
    const redirect_uri = '/myOrders';
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [cart, setCart] = useCart();
    const [watch, setWatch] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/watches/${id}`)
            .then(res => res.json())
            .then(data => setWatch(data));
    }, []);

    const { _id, color, title, img, brand_name, details, price,guarantee } = watch;

    const onSubmit = data => {
        // save to local storage (for now)
        addToDb(_id);

        console.log(data, watch);
        const exists = cart.find(pd => pd._id === watch._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== watch._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, watch];
            alert('Added to cart, had before');
        }
        else {
            watch.quantity = 1;
            newCart = [...cart, watch];
            alert('Added to cart, new watch');
        }
        setCart(newCart);
        console.log('Cart: ', cart);
        const savedCart = getStoredCart();
        data.Orders = savedCart;
        data.status='Pending';
        console.log('Updated data: ', data)
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            });
        history.push(redirect_uri);
    }
    return (
        <div className="add-service py-3">
            < h2 className="text-center"> Place Order</h2 >
            
            <div className="card mb-3   w-75 mx-auto">
                {
                    !title ?
                        <img src={loading} alt="" className="w-25" />
                        :
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{title}</h4>
                                    <h5>Brand: {brand_name}</h5>
                                    
                                    <p className="card-text"><span  style={{border:`1px solid ${color}`}} className="px-2 rounded-pill">Color: {color}</span> <span className="card-text border rounded-pill px-2">Price: {price}</span> </p>
                                    <p className="card-text">Guarantee: {guarantee} Years</p>
                                    
                                    <p className="card-text py-2">{details}</p>
                                </div>
                            </div>
                        </div>
                }

            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} defaultValue={user.email ? user.displayName : 'Your Name'} />
                <input type="number" {...register("phone")} defaultValue={880} />
                <label>Address:</label>
                <input type="text" {...register("address")} placeholder="City, Ward, Road no. House no. Aparatment no."/>
                <input {...register("email", { required: true })} defaultValue={user.email ? user.email : 'Your Email'} />

                <input type="submit" />
            </form>
        </div >
    );
};

export default Orders;