import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

export default function User(){
    return(
        <div className='app' style={{width:"100%"}}>
            <Header/>
            <Outlet/>
        </div>
    )
}