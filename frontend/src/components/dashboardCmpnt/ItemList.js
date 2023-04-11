import React from 'react';
import './itemList.css';
import axios from 'axios';
import Dashboard_Card from './Dashboard_Card';
import { useNavigate } from 'react-router-dom';
// import loadingAnimation from '../../animations/loading_animation2.json'
// import loadingAnimation2 from '../../animations/loading_animation1.json'
import loadingAnimation3 from '../../animations/loading_animation3.json'
import Lottie from "lottie-react";

export default function ItemList(){
    const [search, setSearch] = React.useState('');
    const navigate = useNavigate();

    const [load, setLoad] = React.useState(true)

    // React.useEffect(() =>{
    //     document.getElementById("myFrame").addEventListener("load", myFunction);

    //     function myFunction() {
    //     document.getElementById("demo").innerHTML = "Iframe is loaded.";
    //     }
    // },[]);

    // console.log(search)
    // all items retriev logic
    const [items, setItems] = React.useState([]);

    React.useEffect(() =>{
        function fetchAllData(){
            axios.get('http://localhost:8071/item/')
            .then((res)=>{
                setItems(res.data)
            }).catch((err)=>{
                console.log(err);
            });
        }
        fetchAllData();
    },[]);

    function deleteItem(id){
        axios.delete('http://localhost:8071/item/delete/'+id)
            .then(()=>{
                 alert("Delete Successfully");
                // setdeletebtn((prev)=>!prev)

                const newItems = items.filter( (el)=> el._id != id);
                setItems(newItems);

                // navigate('/');
            }).catch((err)=>{
                console.log(err);
            });
        //console.log("hello "+id);
    }
    // end
    

    function myFunction() {
        setLoad(false)
        }

        console.log(load)
        return(
            <div className='itemList_container' onLoad={myFunction}>

                <input 
                    type='text' 
                    className='edt_search_item' 
                    placeholder='Enter item name...' 
                    onChange={(e)=>{setSearch(e.target.value)}}
                />
                <button className='additembtn' onClick={()=>navigate('/dashboard/addItem')} name="addTtem">Add Item</button>
           
            <div className='edt_list' id='myFrame' >
                {load&&<div id='loadingAnimation'>
                    <Lottie animationData={loadingAnimation3}/>
                </div>}
                
                {
                    items.filter((thing)=>{
                        return search.toLowerCase() == '' ?thing: thing.itemName.toLowerCase().includes(search);
                    }).map((thing)=>{
                            return   <Dashboard_Card 
                                        key = {thing._id}
                                        data = {thing}
                                        deleteItem = {deleteItem}
                                    />
                    })
                }   
            </div>
                
                    
        </div>
    )
}