import React from 'react';
import {Link} from 'react-router-dom';
import './dashboard_card.css';

export default function Dashboard_Card(props){
    const {_id,itemName,description,category,image,price} = props.data;
    // console.log(props);
    return(
            <div className="product_dsh__card">
                <div className="product_dsh__img">
                    <img src={image} alt="product_dsh_img" className="img" />
                </div>
                <p >{description}</p>
                <div className="product_dsh__content">
                    <Link className='product_dsh__tilte' to={`/foods/${_id}`}>{itemName}</Link>
                    {/*id eka ganna page ekedi useParams dala import { useParams } from "react-router-dom";const { id } = useParams(); */}
                    <div className="product_dsh_options">
                        <div className="product_dsh__price">${price}</div>
                        {/* <button className="addTOCart__btn" onClick={props.counter}>Add to Cart</button> */}
                        <Link className='inventoryListcardbtn edit' to={`/dashboard/updateItem/${_id}`}>Edit</Link>
                        <button className='inventoryListcardbtn remove' onClick={()=>props.deleteItem(_id)}>Remove</button>
                    </div>
                </div>
            </div>
    )
}