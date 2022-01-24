import React from 'react';

function About() {
  return (
    <div className='about-section'>
      <div className='about-up'>

        <div className='email-sec'>
          <input className='email-in' placeholder='Email address' />
          <br></br>
          <input type='checkbox' />Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy
        </div>

        <div className='order-sec'>
          <h3>Orders and support</h3>
          <hr style={{backgroundColor:'white', height:'1px', margin:'1rem 0'}}></hr>
          <p>Contact us</p>
          <p>FAQs</p> 
          <p>Shipping</p> 
          <p>Returns </p> 
          <p>Order history</p>
          <p>Terms and conditions</p>
        </div>

        <div className='service-sec'>
          <h3>Services</h3>
          <hr style={{backgroundColor:'white', height:'1px', margin:'1rem 0'}}></hr>
          <p>Live assistance</p>
          <p>Corporate gifts</p> 
          <p>Facial appointments</p>
        </div>

        <div className='location-sec'>
          <h3>Location preferences</h3>
          <hr style={{backgroundColor:'white', height:'1px', margin:'1rem 0'}}></hr>
          <p>Shipping:Hong Kong (S.A.R)</p> 
          <p>Language:English</p>
        </div>
      </div>



      <div className='about-down'>
        <div className='sustainibility-sec'>
          <h3>Sustainability</h3>
          <hr style={{backgroundColor:'white', height:'1px', margin:'1rem 0'}}></hr>
          <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
        </div>

        <div className='ab-sec'>
          <h3>About</h3>
          <hr style={{backgroundColor:'white', height:'1px', margin:'1rem 0'}}></hr>
          <p>Our story</p>
          <p>Foundation </p> 
          <p>Careers</p>
          <p>Privacy policy</p>
          <p>Accessibility</p>
        </div>

        <div className='social-sec'>
          <h3>Social media</h3>
          <hr style={{backgroundColor:'white', height:'1px', margin:'1rem 0'}}></hr>
          <p>Instagram </p>
          <p>Twitter </p> 
          <p>LinkedIn </p>
          <p>WeChat</p>
          <p>Weibo </p>
        </div>
        
      </div>

      <hr style={{backgroundColor:'white', height:'1px', margin:'1rem 0'}}></hr>

      <p style={{fontSize:'1.2rem', padding:'1.5rem'}}>© Aesop</p>

    </div>
  );
}

export default About;
