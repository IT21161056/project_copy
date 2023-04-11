import React from 'react';
import './dashBoardStyles.css';
import { Link, Outlet } from 'react-router-dom';
import cartAnimation from '../../animations/administration.json'
import Lottie from "lottie-react";

export default function DashBoard(){

    const [addItem, setSetAdditem] = React.useState(false);
    console.log(addItem)

    return(
        <div className='dashboard_body' >
            <div className='dashboard_header'>
            </div>
            <div className='dashBoard_container'>
                <div className='dashboard_sidebar' >
                    <h3>DashBoard</h3>
                    <Link to='ItemList'>Manage Inventory</Link>
                    <Link to='SalesList'>Manage Sales</Link>
                    <Link to='ItemList'>Manage Orders</Link>
                    <Link to='ItemList'>Manage Stores</Link>
                    <Link to='ItemList'>Manage Inventory</Link>
                    <Link to='ItemList'>Manage Inventory</Link>
                    <Link to='ItemList'>Manage Inventory</Link>
                    <Link to='ItemList'>Manage Customers</Link>
                    <Link to='ItemList'>Manage Orders</Link>
                    <Link to='ItemList'>Manage Stores</Link>
                    <Link to='ItemList'>Manage Inventory</Link>
                    <Link to='ItemList'>Manage Inventory</Link>
                    <div className=''>
                        <Lottie animationData={cartAnimation}/>
                    </div>
                </div>
                <div className='dashboard_content'>
                    {/* {addItem&&<AddItem/>}
                    {!addItem&&<ItemList/>} */}
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}