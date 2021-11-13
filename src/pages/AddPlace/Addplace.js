import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import useWatches from '../../hooks/useWatches';
import './AddPlace.css';

const AddPlace = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://damp-wildwood-05961.herokuapp.com/places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <h2 className="text-center py-5">Please Add a Place</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="pb-5">
                <input {...register("place_name", { required: true, maxLength: 30 })} placeholder="Place Name" />
                <input {...register("country", { required: true, maxLength: 30 })} placeholder="Countey" />
                <input {...register("about", { required: true, maxLength: 30 })} placeholder="About The Place" />

                <textarea {...register("description")} placeholder="Place Description" />

                <input type="number" {...register("cost")} placeholder="Estimated Cost" />
                <input type="number" {...register("days")} placeholder="how Long (Days)" />
                <input type="number" {...register("rating")} placeholder="Rate the place out of 5" />
                <input type="text" {...register("thumb")} placeholder="Add a image URL" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPlace;