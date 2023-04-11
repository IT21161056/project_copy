import React from 'react';
import notice_1 from '../images/notice_1.png'
import notice_2 from '../images/notice_2.png'
import notice_3 from '../images/notice_3.png'
import '../CSS/notices.css';

export default function Notices(){
    return(
        <div className='notices_container'>
            <div className='notice_1 notice'>
                <img className='notice_img' src={notice_1}/>
            </div>
            <div className='notice_2 notice'>
                <img className='notice_img' src={notice_3}/>
            </div>
            <div className='notice_3 notice'>
                {/* <img className='notice_img' src={notice_2}/> */}
            </div>
            <div className='notice_4 notice'>
                
            </div>
        </div>
    )
}