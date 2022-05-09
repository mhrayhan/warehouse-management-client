import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css'

const InventoryItems = ({item}) => {
    console.log(item);
    const { _id, name, img, price, quantity, description} = item;
    const navigate = useNavigate();
    const handleNaviget = id => {
        navigate(`/update/${id}`)
    }
    return (
        <div className='singleItem'>
            <img className='w-100 image' src={img} alt="" />
            <div className='p-2 pb-3 text-left'>
                <h5>Name: {name}</h5>
                <p>{description}</p>
                <h6>Price: {price}</h6>
                <h6>Quantity: {quantity}</h6>
                <button onClick={()=> handleNaviget(_id)} className='btn btn-primary'>Update</button>
            </div>
        </div>
    );
};

export default InventoryItems;