import React from 'react';
import '../CSS/driverProfile.css';
import indianfarmer from '../images/indianfarmer.jpg'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


export default function DriverProfile(){
    const navigate = useNavigate();

    const id = '642d6c69a2aa7beba8eb7aab'
    return(
        <div className='Employee_Profile_container'>
            <div className='emp_prof_main_container_1'>
                <img className='emp_profilePic' src={indianfarmer}/>    
                <table className='table epm_prof_sub_container_1'>
                    <tr>
                        <td>Full Name (Name with initials):</td>
                        <td>{`Thyagi Jayathunge`}</td>
                    </tr>
                    
                    <tr>
                        <td>NIC No:</td>
                        <td>{`20001345687`}</td>
                    </tr>
                    
                    <tr>
                        <td>Contact No:</td>
                        <td>{`0714589632`}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{`thyagi@gmail.com`}</td>
                    </tr>
                    {/* </table>
                    <table className='emp_prof_main_container_2'>   */}
                    <tr>
                        <td>Address</td>
                        <td>
                            <tr>
                                <td>No:</td>
                                <td>{'10'}</td>
                            </tr>
                            <tr>
                                <td>Street Address:</td>
                                <td>{''}</td><br/>
                            </tr>
                            <tr>
                                <td>City:</td>
                                <td>{'Homagama'}</td>
                            </tr>
                            <tr>
                                <td>Postal Code:</td>
                                <td>{'10118'}</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>Delivery Type:</td>
                        <td>{"Stock delivery"}</td>
                    </tr>
                    <tr>
                        <td>Vehicle Type:</td>
                        <td>{"Lorry"}</td>
                    </tr>
                    <tr>
                        <td>Vehicle Reg No:</td>
                        <td>{'BCL-2565'}</td>
                    </tr>
                    <tr>
                        <td>Delivery Area:</td>
                        <td>Homagama</td>
                    </tr>
                    <button className='driver_option_btn d_edit' onClick={()=>navigate(`/updateDriverProfile/${id}`)}>Edit Details</button>
                    <button className='driver_option_btn d_remove'>Remove Account</button>
                </table>               
            </div>                      
        </div>
    )  
}