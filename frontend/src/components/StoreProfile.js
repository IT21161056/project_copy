import React, { useState } from 'react'
import '../CSS/store_profile.css';
import indianfarmer from '../images/indianfarmer.jpg'
import axios from 'axios';
import { Link ,useNavigate, useParams } from 'react-router-dom';

export default function StoreProfile(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [storeDetails, setStoreDetails] = React.useState({});

    React.useEffect(()=>{
        function fetchAllData(){
            axios.get('http://localhost:8071/store/get/'+id)
            .then((res)=>{
                // (res.data)
                setStoreDetails(res.data.store)
            }).catch((err)=>{
                console.log(err);
            });
        }
        fetchAllData();
    },[])

    const [sort, setSort] = useState('')
    const [items, setitems] = useState([])

    
    const [addReq, setAddReq] = React.useState(false);

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();


    let currentDate = new Date().toJSON().slice(0, 10);
    //let currentDate = `${day}-${month}-${year}`
   
    // logic
    const [request,setRequest] = React.useState({
        itemName : "", 
        quantity : "",
        requestDate:currentDate,
        ownerID:id
    });

    function onchange(e){
        setRequest(prevData =>{
            const {name,value} = e.target;
            return{
                ...prevData,
                [name] : value
            }
        })
    }

    
    function addRequest(e){
        e.preventDefault();
        axios.post("http://localhost:8071/storerequest/add",request)
        .then(()=>{
            setAddReq(false)
            //  alert("request Added!");  
            // navigate('/storeProfile')
            setRequest({
                itemName : "", 
                quantity : "",
                requestDate:currentDate,
                ownerID:id        
            })
            setAddReq(false)
        })
        .catch((err)=>{
            alert(err);
        })   
    }

    const [requests, setRequests] = React.useState([]);
    

    React.useEffect(() =>{
        function fetchAllData(){
            axios.get('http://localhost:8071/storerequest/get/'+id)
            .then((res)=>{
                
                setRequests(res.data.storerequest)
            }).catch((err)=>{
                console.log(err);
            });

            axios.get('http://localhost:8071/item/')
            .then((res)=>{
                setitems(res.data)
            }).catch((err)=>{
                console.log(err);
            });
        }
        fetchAllData();

        //get sote data from local storage
        // const store = JSON.parse(localStorage.getItem('store'));
        //     if (items) {
        //         setStoreDetails(store.data);
        //     }
         },[addReq]);
   
    
   

    function deleteReq(id){
        axios.delete('http://localhost:8071/storerequest/delete/'+id)
            .then(()=>{
                 alert("Delete Successfully");
                // setdeletebtn((prev)=>!prev)

                const newRequests = requests.filter( (el)=> el._id != id);
                setRequests(newRequests);

                // navigate('/');
            }).catch((err)=>{
                console.log(err);
            });
        
    }
    // end
  
    return(
        <div className='Store_profile_container'>
            <div className='profile_container'>
                <img className='store_profile_pic' src={indianfarmer}/>
                <div className='profile_details'>
                    <table id='profile_form'>
                        <tbody>

                            <tr>
                                <td>Owner Full Name:</td>
                                <td>{storeDetails.name}</td>
                            </tr>
                            <tr>
                                <td>NIC No:</td>
                                <td>{storeDetails.nic}</td>
                            </tr>
                            <tr>
                                <td>Contact No:</td>
                                <td>{storeDetails.phoneNo}</td>
                            </tr>
                            <tr>
                                <td>No:</td>
                                <td>{storeDetails.addressNo}</td>
                            </tr>
                            <tr>
                                <td>Street Address:</td>
                                <td>{storeDetails.street}</td>
                            </tr>
                            <tr>
                                <td>City:</td>
                                <td>{storeDetails.city}</td>
                            </tr>
                            <tr>
                                <td>Postal Code:</td>
                                <td>{storeDetails.postalCode}</td>
                            </tr>
                            <tr>
                                <td>E-mail Address:</td>
                                <td>{storeDetails.email}</td>
                            </tr>
                            <tr>
                                <td>User name:</td>
                                <td>{storeDetails.userName}</td>
                            </tr>
                            <tr>
                                <td>Password:</td>
                                <td>{storeDetails.password}</td>
                            </tr>
                        </tbody>
                    </table>                        
                </div>
            </div>
            <div className='req_list'>
                <div className='store_req_options'>
                    <label>Sort by date: </label>
                    <input type='date' className='store_request_search' onChange={(e)=>{setSort(e.target.value)}}/>
                    <button className='add_req_btn' onClick={()=>setAddReq(true)}>Add request</button>
                </div>

                {/* <div className=''>
                    hello
                </div> */}
                <div className='req_table_container'>
                    
                    {addReq== false?
                    <table id='req_table'>
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Date</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.filter((req)=>{
                                return sort == '' ?req: req.requestDate.includes(sort);
                            }).map((request)=>
                                <tr key = {request._id}>
                                    <td className='table_data'>{request.itemName}</td>
                                    <td className='table_data'>{request.quantity}</td>
                                    <td className='table_data'>{request.requestDate}</td>
                                    <td className='table_data btns'>    
                                        <button className='btn-danger' onClick={()=>{deleteReq(request._id)}}>Delete</button>
                                    </td>
                                </tr> )}
                        </tbody>

                    </table>:
                    <div className='add_req_form'>
                        <form onSubmit={addRequest}>
                            <label>Item Name</label>
                            {/* <input type='text' name='itemName' onChange={onchange} value={request.itemName} required/> */}
                            <select name='itemName' onChange={onchange} value={request.itemName} required>
                                <option value='' defaultValue disabled hidden >- - - Select item - - -</option>
                                {items.map((item)=>
                                    <option key={item._id} value={item.itemName}>{item.itemName}</option>
                                )}
                            </select>
                            <label>Quantity</label>
                            <input type='number'name='quantity' placeholder='kg/pkt' value={request.quantity} onChange={onchange} required/>
                            
                            {/* <input type='date' name='requestDate' value={request.requestDate} onChange={onchange}/> */}
                            <div>
                                <input type='button' className='add_req_btn back' id ='add_req_btn' onClick={()=>setAddReq(false)} value = 'Go Back'/>
                                <input type='submit' className='add_req_btn' id ='add_req_btn' value = 'Request'/>
                            </div>
                        </form>
                    </div>}
                </div>
            </div>
        </div>
    )
}