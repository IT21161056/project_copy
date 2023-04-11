import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import '../components/home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import carousel_image1 from '../images/home_img_1.png'
import carousel_image2 from '../images/home_img_2.png'
import Carousel from './Carousel';
import Notices from './Notices';
import loadingAnimation1 from '../animations/loading_animation1.json'
import Lottie from "lottie-react";

export default function Home(){

    const [styleToBox, setStyleToBox] = React.useState(false);
    const [load, setLoad] = React.useState(true)
    console.log(styleToBox)
    // const ref = useRef(null);

    // React.useEffect(() => {
    //   var element = document.getElementById('box')
    //   console.log(element);
    //   console.log(element.id);

    //   element.addEventListener('click',()=>{
    //     console.log("hello")
    //   })
    // }, []);

    function myFunction() {
        setLoad(false)
        }

    return(
        <div className='home_container' onLoad={myFunction}>
           {load&&<div id='loadingAnimation_home'>
                    <Lottie animationData={loadingAnimation1}/>
                </div>}
            {/* <div className = 'carousel_component'> */}
                <Carousel/>
            {/* <Carousel>
                <div>
                    <img src={home_img_1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src= {home_img_2} />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel> */}
            {/* </div> */}
            
            <hr></hr>

            {/* <div ref={ref} id="box" style={{height:"100px", width:"100px", background:"black"}}>

            </div> */}

            <Notices/>
            <div className={styleToBox&&'boxred'}>

            </div>

            <button onClick={function (){setStyleToBox(prev=> !prev)}}>styles</button>
            
        </div>
        
       
    )

    
}