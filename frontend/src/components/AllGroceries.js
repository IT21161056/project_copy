import React from 'react';
import Product from './Product'
import data from './assets/data';
import '../allGroceries.css';

export default function AllGroceries(props){
    const [search,setSearch] = React.useState('');
    
    return (
        <div className='allgroceries_Container'>
            <input 
                type='text' 
                className='allProductSearch' 
                placeholder='What are you looking for ?' 
                onChange={(e)=>{setSearch(e.target.value)}}
            />
            <div className='allgroceries'>
                {data.filter((thing)=>{
                    return search.toLowerCase ===''? thing: thing.title.toLowerCase().includes(search)
                }).map((thing)=>{
                    return  <Product 
                                key={thing.id}
                                data = {thing}
                                counter = {props.counter}
                            />
                })}
                
            </div>
        </div>
          
    )
}


