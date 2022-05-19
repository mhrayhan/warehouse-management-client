import React from 'react';
import { useForm } from "react-hook-form";
import Header from '../Header/Header';
import './AddItem.css'
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Footer from '../Footer/Footer';

const AddItem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (!data.name) return toast('Please Fillup Name Field')
    if (!data.description) return toast('Please Fillup Descripiton Field')
    if (!data.price) return toast('Please Fillup Price Field')
    if (!data.quantity) return toast('Please Fillup Quantity Field')
    if (!data.supplier) return toast('Please Fillup Supplier Field')
    if (!data.img) return toast('Please Give Img Url')
    const url = `https://young-garden-12148.herokuapp.com/items`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          toast('New Item Added');
          reset()
        }
      })

  }
  return (
    <div>
      <Header></Header>
      <div className='add-form'>
        <h2 className='text-center addNewItem'>ADD NEW ITEM</h2>
        <form className='d-flex flex-column mt-3' onSubmit={handleSubmit(onSubmit)}>
          <input className='input-field' placeholder='Name' {...register("name")} />
          <textarea className='text-area' placeholder='Description' {...register("description")} />
          <input className='input-field' placeholder='Price' type="number" {...register("price")} />
          <input className='input-field' placeholder='Quantity' type="number" {...register("quantity")} />
          <input className='input-field' placeholder='Supplier' type="text" {...register("supplier")} />
          <input className='input-field' placeholder='Photo URL' type="text" {...register("img")} />
          <input className='input-field' value={user?.email} placeholder='Email' type="text" {...register("email")} />
          <input className='submit-btn' value='Add Item' type="submit" />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddItem;