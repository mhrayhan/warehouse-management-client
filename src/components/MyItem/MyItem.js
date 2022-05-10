import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Header from '../Header/Header';
import axios from 'axios';
import Footer from '../Footer/Footer';


const MyItem = () => {
    const [user] = useAuthState(auth);
    // const [items] = useItems();
    const [userItem, setUserItem] = useState([]);




    useEffect(()=> {
        const getItem = async() => {
            const email =  user.email;
            const url = `https://young-garden-12148.herokuapp.com/items?email=${email}`;
            console.log(email)
            const {data} = await axios.get(url)
            console.log(data);
            setUserItem(data)
        }
        getItem();

    },[user])
    return (
        <div>
            <Header></Header>
            <h2>My Item: {userItem.length}</h2>
            {
                userItem.map(item => <div key={item._id}><p>{item.email}</p></div>)
            }
            <Footer></Footer>
        </div>
    );
};

export default MyItem;