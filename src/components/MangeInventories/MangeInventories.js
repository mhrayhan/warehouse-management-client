import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ManageInventory from './ManageInventory';
import './ManageInventories.css'

const MangeInventories = () => {
  const [items, setItems] = useItems();
  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure?')
    if (proceed) {
      const url = `https://young-garden-12148.herokuapp.com/items/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          const remaining = items.filter(item => item._id !== id);
          setItems(remaining)
        })
    }
  }
  return (
    <div>
      <Header></Header>
      <h2 className='text-center my-4'>Manage Inventories</h2>
      <Link to='/additem'><button className='add-new-btn btn btn-info mb-3 text-white '>Add New Item</button></Link>
      <div className='items container'>
        {
          items.map(item => <ManageInventory
            key={item._id}
            item={item}
            handleDelete={handleDelete}
          ></ManageInventory>)
        }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MangeInventories;