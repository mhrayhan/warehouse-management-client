import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import MangeInventories from './components/MangeInventories/MangeInventories';
import UpdateItems from './components/UpdateItems/UpdateItems';
import AddItem from './components/AddItem/AddItem';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/manage' element={<MangeInventories></MangeInventories>}></Route>
        <Route path='/update/:id' element={<UpdateItems></UpdateItems>}></Route>
      </Routes>
    </div>
  );
}

export default App;
