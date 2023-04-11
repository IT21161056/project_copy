import React from 'react'
import logo from '../images/logo.png';
import cart from '../images/cart.png';
import { Link } from 'react-router-dom';
import '../header.css';
import cartAnimation from '../animations/cart.json'
import Lottie from "lottie-react";


export default function Header(props){
    
    return(
        <div id='header_container'>
            <div className='header-top-bar'>
                <div className='login-left-float'>
                    <span>
                        <Link to='/signup'>Signup</Link>/
                        <Link to='/login'>Login</Link>
                    </span>
                </div> 
            </div>
            <div className='hr1'></div>
            <div className='header-navbar'>
                <div className='nav-container'>
                    <div className='logo'>
                        <img src={logo}/>
                    </div>
                    <div className='tabs'>
                        <div className='nav-links'>
                            <Link className='links' to='/'>Home</Link>
                            <Link className='links' to='/allgroceries'>All Groceries</Link>
                            <Link className='links' to='/dashboard'>Contact Us</Link>
                            <Link className='links' to='/ourServices'>Our Services</Link>
                        </div>
                        <div className='right-tabs'>
                            <div className='shopping-cart'>
                                <Link to='/cart'>
                                    <div className='cart'>
                                        {/* <img src={cart}/> */}
                                        <Lottie style={{width:"200px"}} animationData={cartAnimation}/>
                                    </div>
                                    <div className='item-count'>{props.itemCount}</div>
                                </Link>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}