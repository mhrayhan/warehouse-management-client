import React from 'react';

const MyItemDetails = ({ handleDelete, item, index }) => {
  const { _id, img, name, supplier, price, quantity } = item;


  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td><img src={img} width={40} alt="" /></td>
      <td>{supplier}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td><button onClick={() => handleDelete(_id)} className='btn btn-danger'>Remove</button></td>
    </tr>
  );
};

export default MyItemDetails;