import React, {useState} from 'react';
import Carousel from 'abstract/ui/carousel';
import CarouselList from 'abstract/ui/CarouselList';
import {partnersData, carouselData} from "./content";
import './style.css';

/*
*   border: 8px solid white;
    transform: rotate(10deg);
    height: 300px;
 * */
export default function Home(props){

	function renderDataIterator(data, isActive){
		if(!isActive){
			return null;
		}

    const {title, description, image, button} = data;

		const mainImageUrl = Array.isArray(image) ? image[0] : image;
		let imagesUI = [];
		for(let i = 1; i< image.length; i++){
			const imageUrl = image[i];
			const imgStyle = {
				width:"320px"
			};
			imagesUI.push((
				<div key={i} className={`image-stack-item-${i}`} >
					<img src={imageUrl} style={imgStyle}/>
				</div>
			))
		}

		return (
			<div key={title} className='active-slide'>
				<div className='active-slide-content'>
					<div className='active-slide-images-stack'>
						{imagesUI}
					</div>
					{/*<div>{title}</div>*/}
					{/*<div>{description}</div>*/}
				</div>
				<div>
					<img className='active-slide-main-image' src={mainImageUrl}/>
				</div>
			</div>
		)
	}

	function renderPartnerIterator(data, isActive){
		const {name, url, image} = data;

		if(!isActive){
			return null;
		};

		const style = {
			width: '250px'
		}
		return (
			<div key={name} className='partner-show'>
				<img src={image} style={style}></img>
			</div>
		)
	}

	return (
		<div className='home'>
			<div className='intro'>
				<Carousel contents={carouselData} renderData={renderDataIterator}/>
			</div>
			<div className='partners'>
				<CarouselList contents={partnersData} renderData={renderPartnerIterator} pageSize={3}/>
			</div>

			<div className='footer'>
        <div className='social-media-list'>
            <div className='social-media'><a href='#' ><i className="fab fa-facebook"></i></a></div>
            <div className='social-media'><a href='#' ><i className="fab fa-instagram"></i></a></div>
            <div className='social-media'><a href='#' > <i className="fab fa-whatsapp"></i></a></div>
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
		</div>
	)
}



