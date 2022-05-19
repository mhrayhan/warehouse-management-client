import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/Header';

const ManageInventory = ({ handleDelete, item }) => {
  const { _id, supplier, name, img, price, quantity, description } = item;
  // const {id} = useParams();
  const navigate = useNavigate();
  const handelNaviget = id => {
    navigate(`/update/${id}`)
  }

  return (
    <div>
      <div className='singleItem'>
        <img className='w-100 image' src={img} alt="" />
        <div className='p-2 pb-3 text-left'>
          <h5>Name: {name}</h5>
          <p>{description}</p>
          <h6>Price: {price}</h6>
          <h6>Quantity: {quantity}</h6>
          <h6>Supplier: {supplier}</h6>
          <div className='mt-4'>
            <button onClick={() => handelNaviget(_id)} className='btn btn-primary me-4'>Update</button>
            <button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;