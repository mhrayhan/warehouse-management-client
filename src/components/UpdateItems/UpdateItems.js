import React  from 'react';
import { useParams } from 'react-router-dom';
import useUpdateItems from '../../hooks/useUpdateItems';
import Header from '../Header/Header';
import './UpdateItems.css'

const UpdateItems = () => {
    const {id} = useParams();
    const [user, setUser] = useUpdateItems(id);
    const {quantity} = user;


    
    let existQuantity = parseInt(quantity);
    // Increase Quantity
    const increaseQuantity = (e) => {
        e.preventDefault();
        const newStock = parseInt(e.target.newStockValue.value);
        console.log(newStock);
        const Quantity = newStock + existQuantity;
        const newQuantity = {...user , quantity: Quantity}
        setUser(newQuantity);
            const url = `https://young-garden-12148.herokuapp.com/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }
    // Decrease Quantity 1
    const decreaseQuantity = () => {
        const quantity = existQuantity - 1;
        const newQuantity = {...user , quantity: quantity}
        setUser(newQuantity);

        const url = `https://young-garden-12148.herokuapp.com/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }


    return (
        <div>
                <Header></Header>
        <div className='updateitem singleItem'>
            <img className='w-100 image' src={user.img} alt="" />
   `        <div className='p-2 pb-3 text-left'>
                <h5>Name: {user.name}</h5>
                <p>{user.description}</p>
                <h6>Price: {user.price}</h6>
                <h6>Quantity: {user.quantity}</h6>
                <button onClick={decreaseQuantity} className='btn btn-danger my-3'>Delivered</button>
                <form onSubmit={increaseQuantity}>
                    <div className='input-group'>
                        <input className='form-control' name='newStockValue' type="number" />
                        <input className='btn btn-info text-white'  type="submit" value="Restock" />
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default UpdateItems;