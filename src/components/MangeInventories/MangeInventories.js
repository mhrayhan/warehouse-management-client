import React from 'react';
import useItems from '../../hooks/useItems';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ManageInventory from './ManageInventory';

const MangeInventories = () => {
    const [items, setItems] = useItems();
     const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            const url = `https://young-garden-12148.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining)
            })
        }
    }
    return (
        <div>
            <Header></Header>
            <h2>Manage Inventories</h2>
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