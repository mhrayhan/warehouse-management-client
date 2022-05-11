import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import InventoryItems from './InventoryItems';

const Inventory = () => {
    const [items, setItems] = useItems();

    return (
        <div>
            <h2 className='text-center py-3'>Inventory</h2>
        <div className='items container'>
        {
            items.slice(0, 6).map(item => <InventoryItems key={item._id} item={item}></InventoryItems>)
        }
        </div>
        <Link to={'/manage'} ><button className='manage-btn btn btn-primary mt-3'>Manage Inventory</button></Link>
        </div>
    );
};

export default Inventory;