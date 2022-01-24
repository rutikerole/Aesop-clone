import './App.css';
import About from './sections/About';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Product from './sections/Product';
import Use from './sections/Use';
import { useState } from 'react';

function App() {
  
  const [cart, setCart] = useState(1);

  const addItem = ()=>{
    setCart(cart+1)
  }

  
  return (
    <div className="App">

     <div className='heading'> 
       <p className='br-heading'>In line with government guidelines, our stores in Hong Kong will remain open under adjusted opening hours.For assistance, please click here.</p>
       <p className='bl-heading'>Enjoy complimentary carbon neutral shipping on all Hong Kong and Macau orders. +</p>
     </div>

     <Navbar cart={cart}/>
     <Hero addItem={addItem} />
     <Use />
     <Product />
     <About />
 
    </div>
  );
}

export default App;
