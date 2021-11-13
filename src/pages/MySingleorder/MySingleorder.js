import { OAuthProvider } from '@firebase/auth';
import React from 'react';
import { useForm } from "react-hook-form";
import StarRating from 'react-bootstrap-star-rating';
import { Button } from 'react-bootstrap';
import axios from 'axios';



const MySingleorder = ({ order,handleCancel }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://young-ocean-72177.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review Successfull');
                    reset();
                }
            });

    };
    return (
        <tr>
                                <td>{order._id}</td>
                                <td>{order.name}</td>
                                <td>{order.phone}</td>
                                <td>{order.email}</td>
                                <td>{order.status}</td>
                                {/* <td>{order.status ? 'Approved' : 'Pending'}</td> */}
                                <td>
                                    {
                                    order.status!=='Approved'?
                                    <button onClick={() => handleCancel(order._id)}>Cencel order</button>:
                                    <div> 
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Review Order
                                        </button>
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Order Number: {order._id}</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form onSubmit={handleSubmit(onSubmit)}>

                                                            <input {...register("name")} defaultValue={order.name} className="p-2 w-100 my-2"/> <br />
                                                            <input {...register("email")} defaultValue={order.email} className="p-2 w-100 my-2"/> <br />
                                                            <input {...register("order_id")} defaultValue={order._id} className="p-2 w-100 my-2"/> <br />
                                                        <div className="py-4 d-flex justify-content-center align-items-center">
                                                        <label>Rate out of five: </label>
                                                            <select {...register("rate")} className="p-2 px-3 ms-2 my-2">
                                                                <option value={1}>1 Star</option>
                                                                <option value={2}>2 Star</option>
                                                                <option value={3}>3 Star</option>
                                                                <option value={4}>4 Star</option>
                                                                <option value={5}>5 Star</option>
                                                            </select> 
                                                        </div>
                                                        <input {...register("comment")} defaultValue="Write your review" className="p-2 w-100 my-2"/> <br />
                                                        <br />
                                                            <input type="submit" className="w-100 p-2"/>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    }

                                </td>
                            </tr>
    );
};

export default MySingleorder;