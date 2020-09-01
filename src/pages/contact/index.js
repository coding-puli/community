import React from 'react';
import {metaData} from './metaData';
import './style.css';

export default function Contact(props){
	const ui = metaData.map((meta , index)=>{
		const {title, description, contact} = meta;
		const {email, phone} = contact;
		 return (
		 		<div key={index} className='contact-item'>
					<h4 className='contact-item-tile'>{title}</h4>
					<p className='contact-item-description'>{description}</p>
					<div className='contact-item-phone-email'>
						<div className='contact-item-phone'>
							<i className="fas fa-mobile-alt"></i> &nbsp; {phone}</div>
						<div className='contact-item-email'>
							<i className="fas fa-envelope"></i>&nbsp; {email}</div>
					</div>
				</div>
		 )
	})
	return (
		<div className='contact-page'>
			{ui}
		</div>
	);
}