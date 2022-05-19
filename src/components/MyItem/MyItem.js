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

  useEffect(() => {
    const getItem = async () => {
      const email = user.email;
      const url = `https://young-garden-12148.herokuapp.com/items`;
      const { data } = await axios.get(url)
      const matched = data.filter(item => item.email === email)
      setUserItem(matched)
    }
    getItem();
  }, [user])

  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure?')
    if (proceed) {
      const url = `https://young-garden-12148.herokuapp.com/items/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          const remaining = userItem.filter(item => item._id !== id);
          setUserItem(remaining)
        })
    }
  }

  return (
    <div>
      <Header></Header>
      <h3 className='text-center my-3'>My Item</h3>
      <p className='text-end text-primary me-3'><b>{userItem.length}</b> <i>Items Added By {user.email}</i></p>
      <Table striped bordered hover responsive="sm">
        <thead className='text-center'>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Supplier</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {
            userItem.map((item, index) => <MyItemDetails key={item._id}
              item={item}
              handleDelete={handleDelete}
              index={index}
            ></MyItemDetails>)
          }
        </tbody>
      </Table>

      <Footer></Footer>
    </div>
  );
};

export default MyItem;