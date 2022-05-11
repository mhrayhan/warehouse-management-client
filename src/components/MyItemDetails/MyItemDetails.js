import React from 'react';

const MyItemDetails = ({handleDelete, item}) => {
    const {_id, name, email, price, quantity} = item;


    return (
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td><button onClick={()=>handleDelete(_id)} className='btn btn-danger'>Remove</button></td>
                </tr>
    );
};

export default MyItemDetails;