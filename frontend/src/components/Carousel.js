import React, { useState, useRef } from 'react';
import './carousel.css';
import carousel_image1 from '../images/carouselimg1.png'
import carousel_image2 from '../images/carouselimg2.png'

export default function Carousel() {

  

  const [st, setSt] = React.useState(false)

  const items = [
    { id: 1, name: carousel_image1 },
    { id: 2, name: carousel_image2 },
    { id: 3, name: carousel_image1 },
    { id: 4, name: carousel_image2 },
  ];

  const [current, setCurrent] = useState(0);

  console.log(items.length)

  const prevSlide = () => {
    setCurrent(current == 0 ? 3 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current == 3 ? 0 : current + 1);
  };

//   setInterval(()=>prevSlide(), 5000)

  function slideImage(){
    
  }

  return (
    <div className="carousel-container">
      {/* <div className="carousel-items" >
        <img className='carousel_image' key={items[current].id} src={items[current].name}/>
      </div>
      <div className="carousel-navigation">
        <button onClick={prevSlide}> {`<`}</button>
        <button onClick={nextSlide}> {`>`}</button>
      </div> */}
      <div className="carousel-items">
        <img className={st==false?'carousel_image':'carousel_image slide'} src={carousel_image1} alt="image 1"/>
        <button  onClick={function (){setSt(prev=> !prev)}}>Slide</button>
      </div>

    </div>
  );
};
