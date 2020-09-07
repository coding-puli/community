import React, {useState} from 'react';
import FixedImageContainer from 'abstract/ui/FixedImage/FixedImageContainer'
import Carousel from 'abstract/ui/carousel';
import CarouselList from 'abstract/ui/CarouselList';
import './style.css';

const carouselData = [
	{
		title: 'About us',
		description: 'About us description About us description About us description',
		image: 'static/img/map.png',
		button: 'Join Us'
	},
	{
		title: 'Projects',
		description: 'Projects description Projects description Projects description',
		image: 'static/img/sitting.png',
		button: 'Add Project'
	},
	{
		title: 'Activity',
		description: 'Activity description Activity description Activity description',
		image: 'static/img/drums1.png',
		button: 'Visit Activity'
	}
];

const partnersData = [
	{
		name: 'Partner 1',
		url: ''
	},
	{
		name: 'Partner 2',
		url: ''
	},
	{
		name: 'Partner 3',
		url: ''
	},
	{
		name: 'Partner 4',
		url: ''
	},
	{
		name: 'Partner 5',
		url: ''
	},
	{
		name: 'Partner 6',
		url: ''
	},
	{
		name: 'Partner 7',
		url: ''
	},
	{
		name: 'Partner 8',
		url: ''
	},
	{
		name: 'Partner 9',
		url: ''
	},
	{
		name: 'Partner 10',
		url: ''
	},
	{
		name: 'Partner 11',
		url: ''
	},
	{
		name: 'Partner 1',
		url: ''
	},
	{
		name: 'Partner 12',
		url: ''
	},
	{
		name: 'Partner 13',
		url: ''
	},
	{
		name: 'Partner 14',
		url: ''
	},
	{
		name: 'Partner 15',
		url: ''
	}

]
export default function Home(props){

	function renderDataIterator(data, isActive){
		const {title, description, image, button} = data;
		if(!isActive){
			return null;
		}
		return (
			<div key={title} className='active-slide'>
				<div className='active-slide-content'>
					<div>{title}</div>
					<div>{description}</div>
					<button> {button}</button>
				</div>
				<img src={image} height="480px"/>

			</div>
		)
	}

	function renderPartnerIterator(data, isActive){
		const {name, url} = data;
		if(!isActive){
			return null;
		}
		return (
			<div key={name} className='partner-show'>
				<div>{name}</div>
			</div>
		)
	}

	return (
		<div className='home'>
			{/*<FixedImageContainer url="static/img/drums2.png">

			</FixedImageContainer>*/}
			<div className='intro'>
				<Carousel contents={carouselData} renderData={renderDataIterator}/>
			</div>
			<div className='partners'>
				<CarouselList contents={partnersData} renderData={renderPartnerIterator} pageSize={4}/>
			</div>

			<div className='footer'>
				<div className='contact'>

				</div>
			</div>
		</div>
	)
}



