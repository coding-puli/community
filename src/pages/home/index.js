import React, {useState} from 'react';
import Carousel from 'abstract/ui/carousel';
import CarouselList from 'abstract/ui/CarouselList';
import {partnersData, carouselData} from "./content";
import Footer from "../../footer";
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

			imagesUI.push((
				<div key={i} className={`image-stack-item image-stack-item-${i}`} >
					<img src={imageUrl}/>
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
      <Footer/>

		</div>
	)
}



