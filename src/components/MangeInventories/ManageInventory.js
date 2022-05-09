import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/Header';

const ManageInventory = ({item}) => {
        const { _id,supplier ,name, img, price, quantity, description} = item;
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
                {/* <Link to={`/update/${id}`}><button className='btn btn-primary'>Update</button></Link> */}
                <button onClick={()=>handelNaviget(_id)} className='btn btn-primary'>Update</button>
            </div>
        </div>
        </div>
    );
};

export default ManageInventory;