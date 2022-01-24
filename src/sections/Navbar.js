import { Search } from '@material-ui/icons';
import React from 'react';
import "../App.css"

function Navbar({ cart }) {
  return (
    <div className='navbar'>
        
      <div className='left-nav'>
        <p>Skin care</p>
        <p>Body & Hand</p>
        <p>Hair</p>
        <p>Fragrance</p>
        <p>Home</p>
        <p>Kits & Travel</p>
        <p>Gifts</p>
        <p>Read</p>
        <p>Store</p>
        <Search style={{marginTop:'1rem',cursor:'pointer'}} />
      </div>

      <div className='right-nav'>
        <p>Login</p>
  
        <p>Cart {cart}</p>
      </div>
        
    </div>
  );
}

export default Navbar;
