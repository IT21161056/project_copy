import React from 'react';
import '../product.css';
import {Link} from 'react-router-dom'

export default function Product(props){
    const {image01,title,price,id} = props.data;
    //console.log(props);
    
    return(
            <div className="product__card">
                <div className="product__img">
                    <img src={image01} alt="product-img" className="img" />
                </div>
                <div className="product__content">
                    <Link className='product__tilte' to={`/foods/${id}`}>{title}</Link>
                    <div className="product_options">
                        <div className="product__price">${price}.00</div>
                        {/* <button className="addTOCart__btn" onClick={props.counter}>Add to Cart</button> */}
                    <button className="addTOCart__btn" onClick={()=>{props.counter(props.data)}}>Add to Cart</button>
                    </div>
                </div>
            </div>
    )
}