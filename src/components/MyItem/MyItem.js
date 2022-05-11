import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Header from '../Header/Header';
import axios from 'axios';
import Footer from '../Footer/Footer';
import MyItemDetails from '../MyItemDetails/MyItemDetails';
import { Table } from 'react-bootstrap';


const MyItem = () => {
    const [user] = useAuthState(auth);
    
    const [userItem, setUserItem] = useState([]);

    useEffect(()=> {
        const getItem = async() => {
            const email =  user.email;
            const url = `https://young-garden-12148.herokuapp.com/items`;
            console.log(email)
            const {data} = await axios.get(url)
            const remaining = data.filter(item => item.email === email)
            console.log(remaining);
            setUserItem(remaining)
        }
        getItem();
    },[user])

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
                const match = userItem.filter(item => item._id !== id);
                setUserItem(match)
            })
        }
    }

    return (
        <div>
            <Header></Header>
            <h3 className='text-center my-3'>My Item: {userItem.length}</h3>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
            {
                userItem.map(item => <MyItemDetails key={item._id} 
                item={item}
                handleDelete={handleDelete}

                ></MyItemDetails>)
            }
            </tbody>
            </Table>
            
            <Footer></Footer>
        </div>
    );
};

export default MyItem;