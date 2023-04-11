import React from 'react';
import '../cart.css';

export default function Cart(props){

    console.log(props.items)
    let totalAmount = 0;

    props.items.map((item)=>{
        totalAmount += item.price;
    })

    return(
        <div className='cart_container'>
            {props.items == 0 ? <h3>cart is empty</h3>:<h3>Cart</h3>}
            {
                props.items.map((thing)=>{
                    return <div className='cart_card'>
                        <img src = {thing.image01} className='cart_image'/>
                        <h3>{thing.title}</h3>
                        <h3>${thing.price}</h3>
                    </div>
                })
            }
            <h2>Total Amount : ${totalAmount}</h2>
        </div>
    )
}