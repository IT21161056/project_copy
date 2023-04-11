import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../CSS/salesList.css';

export default function SalesList(){
    const navigate = useNavigate();
    const [sort, setSort] = React.useState('');

    const [search,setSearch] = React.useState('');

    
    //    sales list logic
    const [sales, setSales] = React.useState([]);
    
    React.useEffect(() =>{
        function fetchAllData(){
            axios.get('http://localhost:8071/sale/')
            .then((res)=>{
                setSales(res.data)
            }).catch((err)=>{
                console.log(err);
            });
        }
        fetchAllData();
    },[]);

    function deleteItem(id){
        axios.delete('http://localhost:8071/sale/delete/'+id)
            .then(()=>{
                 alert("Delete Successfully");
                // setdeletebtn((prev)=>!prev)

                const newSales = sales.filter( (el)=> el._id != id);
                setSales(newSales);

                // navigate('/');
            }).catch((err)=>{
                console.log(err);
            });
        //console.log("hello "+id);
    }

// end
    return(
        <div className='sales_list_container'>
            <div className='sales_options'>
                <input type='text' className='sale_list_inputs' placeholder='Search Sales by item name' onChange={(e)=>{setSearch(e.target.value)}} />
                <input type='date' className='sale_list_inputs' onChange={(e)=>{setSort(e.target.value)}} />
                <button className='add_sale_btn' onClick={()=>navigate('/dashboard/addSale')}>Add Sales</button>
            </div>
            <div className='sales_list'>
                <table id='sales_table'>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Supplier ID</th>
                            <th>Sale Date</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.filter((sale)=>{
                                return search.toLowerCase() == '' ?sale: sale.itemname.toLowerCase().includes(search);
                            }).filter((sale)=>{
                                return sort == '' ?sale: sale.saleDate.includes(sort);
                            }).map((sale)=>
                            <tr key = {sale._id}>
                                <td className='table_data'>{sale.itemname}</td>
                                <td className='table_data'>{sale.supplierId}</td>
                                <td className='table_data'>{sale.saleDate}</td>
                                <td className='table_data'>{sale.description}</td>
                                <td className='table_data'>{sale.quantity}</td>
                                <td className='table_data'>{sale.amount}</td>
                                <td className='table_data btns'>
                                    <button className='btn-danger' onClick={()=>{deleteItem(sale._id)}}>Delete</button>
                                </td>
                            </tr> )}
                    </tbody>       
                </table>
            </div>
        </div>
    )
}