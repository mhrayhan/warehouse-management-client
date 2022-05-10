import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import MangeInventories from './components/MangeInventories/MangeInventories';
import UpdateItems from './components/UpdateItems/UpdateItems';
import AddItem from './components/AddItem/AddItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/Blogs/Blogs';
import MyItem from './components/MyItem/MyItem';
import Footer from './components/Footer/Footer';
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={<MangeInventories></MangeInventories>}></Route>
        <Route path='/update/:id' element={
          <RequireAuth>
            <UpdateItems></UpdateItems>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
