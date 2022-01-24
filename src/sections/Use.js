import React from 'react';
import img2 from '../img/img-2.jpg'

function Use() {
  return (
   <div className='use-section'>
     <img src={img2} alt='drop' />
     <div className='use-info' >
       <h4>How to use</h4>
       <h2 style={{fontWeight:'lighter', color:'gray', lineHeight: '1.6'}}>Morning and evening, splash onto a cotton pad or directly into hands, and pat onto freshly cleansed face and neck.</h2>
              
       <hr style={{backgroundColor:'black', height:'1px', marginTop:'1rem'}}></hr>

       <h4>Dosage</h4>
       <p>Half a teaspoon</p>

       <hr></hr>

       <h4>Texture</h4>
       <p>Aqueous</p>

       <hr></hr>

       <h4>Aroma</h4>
       <p>Herbaceous, floral, fresh</p>

     </div>

   </div>
   );
}

export default Use;
