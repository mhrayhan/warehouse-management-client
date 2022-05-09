import React from 'react';
import { useForm } from "react-hook-form";
import Header from '../Header/Header';
import './AddItem.css'

const AddItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        
    }
    return (
<div>
<Header></Header>
    <div className='add-form'>
         <h2 className='text-center addNewItem'>ADD NEW ITEM</h2>
    <form className='d-flex flex-column mt-3' onSubmit={handleSubmit(onSubmit)}>
        <input className='input-field'  placeholder='Name' {...register("name")} />
        <textarea className='text-area'  placeholder='Description' {...register("description")} />
        <input className='input-field'  placeholder='Price' type="number" {...register("price")} />
        <input className='input-field'  placeholder='Quantity' type="number" {...register("quantity")} />
        <input className='input-field'  placeholder='Supplier' type="text" {...register("supplier")} />
        <input className='input-field'  placeholder='Photo URL' type="text" {...register("img")} />
        <input className='input-field'  placeholder='Email' type="text" {...register("email")} />
        <input className='submit-btn' value='Add Item'  type="submit" />
    </form>
    </div>
</div>
    );
};

export default AddItem;