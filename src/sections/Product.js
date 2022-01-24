import React from 'react';
import ProductData from './ProductData';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

function Product() {
  return (
    <>
    <div className='product-section'>

    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation
      breakpoints={
        {
        640: { slidesPerView: 1,},
        768: { slidesPerView: 2,},
        1200:{ slidesPerView: 3,},
        }}>
     {ProductData.map((obj,id)=>{
          console.log(obj);
          return( 
            <SwiperSlide key={obj.id}>
            <div className='products'>
              <img height='350rem' src={obj.img} alt='img' />
              <p>{obj.info1}</p>
              <p>{obj.info2}</p>
            </div>
            </SwiperSlide>
          )
        })}
    </Swiper>

    </div>
    
    </>
  );
}

export default Product;
