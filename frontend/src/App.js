import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AllGroceries from './components/AllGroceries';
import DashBoard from './components/dashboardCmpnt/DashBoard';
import './styles.css';
import Cart from './components/Cart';
// import AddItem from './components/dashboardCmpnt/AddItem';
import UpdateItem from './components/dashboardCmpnt/UpdateItem';
import OurServices from './components/OurServices';
import StoreRegistration from './components/StoreRegistration';
import Footer from './components/Footer';
import EmployeeRegistration from './components/EmployeeRegistration'
import AddItem from './components/dashboardCmpnt/AddItem';
import ItemList from './components/dashboardCmpnt/ItemList';
import EmployeeLogin from './components/EmployeeLogin';
import User from './User';
import SalesList from './components/dashboardCmpnt/SalesList';
import AddSales from './components/dashboardCmpnt/AddSales';
import StoreLogin from './components/StoreLogin';
import StoreProfile from './components/StoreProfile';
import DriverProfile from './components/DriverProfile';
import UpdateDriverProfile from './components/UpdateDriverProfile';

function App() {
  //const [counter,setCounter] = React.useState(0);
  const [cartItems,setCartItems] = React.useState([]);

  

  console.log(cartItems)

  function countCart(x){
    setCartItems((prevThings)=>{
      return [...prevThings,x]
    })
  }
  return (
    <BrowserRouter>
    
     <div className="app">
      {/* <Header itemCount ={cartItems.length}/> */}
      <Routes>
        <Route path='/' exact element={<User/>}>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/allgroceries' exact element={<AllGroceries counter = {countCart}/>}></Route>
          <Route path='/ourServices' exact element={<OurServices/>}></Route>
          <Route path='/registerStore' exact element={<StoreRegistration/>}></Route>
          <Route path='/registerStore/storeLogin' exact element={<StoreLogin/>}></Route>
          <Route path='/deliveryregistraion/employeeLogin' exact element={<EmployeeLogin/>}></Route>
          <Route path='/deliveryregistraion' exact element={<EmployeeRegistration/>}></Route>
          <Route path='/storeProfile/:id' exact element = {<StoreProfile/>}></Route>  
          <Route path='/driverProfile' exact element = {<DriverProfile/>}></Route>
          <Route path='/updateDriverProfile/:id' exact element = {<UpdateDriverProfile/>}></Route>   
          <Route path='/cart' exact element={<Cart items = {cartItems}/>}></Route> 
        </Route>
        
        <Route path='/dashboard'  element={<DashBoard/>}>
          <Route path='/dashboard/ItemList' exact element={<ItemList/>}/>
          <Route path='/dashboard/addItem' exact element={<AddItem/>}/>
          <Route path='/dashboard/updateItem/:id' exact element={<UpdateItem/>}></Route>
          <Route path='/dashboard/salesList/' exact element={<SalesList/>}></Route>
          <Route path='/dashboard/addSale/' exact element={<AddSales/>}></Route>
        </Route>
          <Route path='/cart' exact element={<Cart items = {cartItems}/>}></Route>  
      </Routes>
       <Footer/>
     </div>
     </BrowserRouter>
  );
}

export default App;
