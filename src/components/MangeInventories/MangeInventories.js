import React from 'react';
import useItems from '../../hooks/useItems';
import Header from '../Header/Header';
import ManageInventory from './ManageInventory';

const MangeInventories = () => {
    const [items, setItems] = useItems();
    return (
        <div>
            <Header></Header>
            <h2>Manage Inventories</h2>
            <div className='items container'>
                {
                items.map(item => <ManageInventory key={item._id} item={item}></ManageInventory>)
                }
            </div>
        </div>
    );
};

export default MangeInventories;