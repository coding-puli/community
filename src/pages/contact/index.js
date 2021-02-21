import React from 'react';
import {metaData} from './metaData';
import './style.css';

//todo: implement this https://blog.logrocket.com/a-practical-guide-to-integrating-google-maps-in-react/
export default function Contact(props){

	return (
		<div className='contact-page'>
      <div className='find-us'>
        <div className='google-map-link'>
          <a href='https://goo.gl/maps/Fsg8oWPtafGTvZX2A' target='_blank'><i className="fas fa-map-marked-alt"></i></a>
        </div>
        <div>Unit 2, Penmore Business Centre,</div>
        <div>Saxton Close,</div>
        <div>Off Hasland Road,</div>
        <div>Hasland, Chesterfield</div>
        <div>S41 0SJ</div>
      </div>
      <div>
        <div className='contact-us-list'>
          <div className='contact-us'>
            <i className="fas fa-mobile-alt"></i>
            <div>
              <div>01246&nbsp;208052</div>
              <div>07940&nbsp;285534</div>
              <div>07483&nbsp;415432</div>
            </div>
          </div>
          <div className='contact-us'>
            <i className="fas fa-envelope-open-text"></i>
            <div>
              <div>accachesterfield@gmail.com</div>
            </div>
          </div>
        </div>
        <div className='social-media-list'>
          <div className='social-media'><a href='#' ><i className="fab fa-facebook"></i></a></div>
          <div className='social-media'><a href='#' ><i className="fab fa-instagram"></i></a></div>
          <div className='social-media'><a href='#' > <i className="fab fa-whatsapp"></i></a></div>
        </div>
      </div>
		</div>
	);
}