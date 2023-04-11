import React from 'react';
import axios from 'axios';
import './updateItem.css';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../assets/data';

export default function UpdateItem(){
    const {id} = useParams();
    const navigate = useNavigate();

    // const item = data.filter(data =>(  data.id == id));
    // console.log(item[0].title)

    // update item logic
    const [item,setItem] = React.useState({
        itemName : "",
        price: "",
        category :"",
        description : "",
        image : "",
        totalQuantity : ""
    });

    function singleItem(e){
        setItem(prevData =>{
            const {name,value} = e.target;
            return{
                ...prevData,
                [name] : value
            }
        })
    }
    const ItemID = useParams();

    React.useEffect(() =>{
        function fetchData(){
            axios.get('http://localhost:8071/item/get/'+ItemID.id)
            .then((res)=>{
                setItem(res.data);      
            }).catch((err)=>{
                console.log(err);
            });
        }
        fetchData();
    },[]);

    function updateData(e){
        e.preventDefault();
        axios.put("http://localhost:8071/item/update/"+ItemID.id,item)
        .then(()=>{
            alert("Successfully updated!");
            // navigate('/');
        })
        .catch((err)=>{
            alert(err);
        })  
    }
    const handleFileUpload = async(e) =>{
        const file = e.target.files[0];
        const base64 = await convertToBase64(file)
        setItem({...item,image:base64})
    }

    // end

    // const product = data.find((product) => product.id === id);
    // const { title, price, category, desc, image01 } = product;

    
    // const [updated, setUpdate] = React.useState(product)
  
    // console.log(updated.title,updated.category)
    

    // function details_onchange(e){
    //     setUpdate(prevData =>{
    //         const {name,value} = e.target;
    //         return{
    //             ...prevData,
    //             [name] : value
    //         }
    //     })
    // }
    
    // function savedata(e){
    //     e.preventDefault();
    //     const index = data.findIndex((item) => item.id == id);
    //     data[index] = updated
    //     alert("Updated Successfully")
    //     navigate('/dashboard');
    //onSubmit={savedata} 
    // }

    return (
        <div className='update_container'>
            <div className='item_image'>
                <img src={item['image']} alt="product_img" className="update_img" />
            </div>
            <div className='Item_details_form'>
                <form onSubmit={updateData} className='update_data_form'>
                <label htmlFor='itemName'>Item Name</label>
                    <input type = 'text' name='itemName' id='itemName' value={item["itemName"]} onChange ={singleItem}/>

                    <label htmlFor='category'>Item category</label>
                    <input type = 'text' name='category' id='category' value={item["category"]} onChange ={singleItem}/>

                    <label htmlFor='price'>Item price</label>
                    <input type = 'text' name='price' id='price' value={item["price"]} onChange ={singleItem}/>

                    <label htmlFor='price'>Item description</label>
                    <textarea name='description' cols={5} rows = {3} value={item["description"]} onChange ={singleItem}/>

                    <label htmlFor='image'>upload image</label>
                    <input type= 'file' name='image' id='image' accept=".jpeg, .png, .jpg"  onChange ={(e)=> handleFileUpload(e)}/>
                    
                    <button type="button" className ="btn btn-primary" onClick={()=>navigate('/dashboard/itemList')}>Go Back</button>
                    <button type="submit" className ="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    )
    function convertToBase64(file){
        return new Promise((resolve,reject) =>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
        })
    }
}