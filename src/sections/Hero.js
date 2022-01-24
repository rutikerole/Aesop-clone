import React from 'react';
import logo from '../img/logo.png'
import img1 from '../img/img-1.png'
import img11 from '../img/img-1.1.png'

function Hero({ addItem }) {
 
  return (
    <div className='hero'>
        <div className='hero-main'>
          <img className='hero-logo' src={logo} alt='logo' />
          <img className='oil-hero' src={img1} alt='oil' />
          <div className='hero-info'>
              <p><span>Skin </span><span style={{fontSize:'12px', padding:'0 4px'}}>●</span><span> Tone</span></p>
              <h2 style={{fontWeight:500,}}>Parsley Seed Anti-Oxidant Facial Toner</h2>
              <p>An alcohol-free, anti-oxidant rich formulation that soothes and balances the skin while preparing it for hydration.</p>
              
              <hr></hr>

              <h4>suited to</h4>
              <p>Most skin types, including dry and mildly sensitive</p>

              <hr></hr>

              <h4>Skin feel</h4>
              <p>Calm, soft and hydrated with a light finish</p>

              <hr></hr>

              <h4>Key ingredients</h4>
              <p>Parsley Seed, Lavender Stem, Blue Chamomile</p>

              <hr></hr>

              <h4>Sizes</h4>
              <input  type='radio' name='gender'/>100ml <input style={{margin:'1rem',}} type='radio' name='gender'/>200ml

              <button onClick={addItem} >Add to your cart — $295.00</button>

              <div className='discovery-kit'>
                <div>
                   <h4>Discover the kit</h4>
                   <p>Parsley Seed Extended Anti-Oxidant Skin Care Kit</p>
                </div>
                <img className='hero-img11' src={img11} alt='oil' />
              </div>
          </div>
      </div>
    </div>);
}

export default Hero;
