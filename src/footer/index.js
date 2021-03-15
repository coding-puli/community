import React from 'react';


export default function Footer(props){
  return (
  <div className='footer'>
    <div className='social-media-list'>
      <h2>FOLLOW US</h2>
      <div className='social-media'>
        <div className='social-media-icon'>
          <a href='#' ><i className="fab fa-facebook"></i></a>
        </div>
        <div className='social-media-icon'>
          <a href='#' ><i className="fab fa-instagram"></i></a>
        </div>
        <div className='social-media-icon'>
          <a href='#' > <i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
    <div className='find-us'>
      <h2>CONTACT US</h2>
      <div>Unit 2, Penmore Business Centre,</div>
      <div>Saxton Close,</div>
      <div>Off Hasland Road,</div>
      <div>Hasland, Chesterfield</div>
      <div>S41 0SJ</div>
    </div>
    <div className='contact-us-list'>
      <div className='contact-us'>
        <i className="fas fa-mobile-alt"></i>
        <div>01246&nbsp;208052</div>
        <div>07940&nbsp;285534</div>
        <div>07483&nbsp;415432</div>
      </div>
      <div className='contact-us'>
        <i className="fas fa-envelope-open-text"></i>
        <div>accachesterfield@gmail.com</div>
      </div>
    </div>
  </div>
  )
}



