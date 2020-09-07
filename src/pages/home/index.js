import React, {useState} from 'react';
import FixedImageContainer from 'abstract/ui/FixedImage/FixedImageContainer'
import Carousel from 'abstract/ui/carousel';
import CarouselList from 'abstract/ui/CarouselList';
import './style.css';

/*
*   border: 8px solid white;
    transform: rotate(10deg);
    height: 300px;
 * */

const carouselData = [
	{
		title: 'About us',
		description: 'About us description About us description About us description',
		image: 'static/img/community1.jpg',
		button: 'Join Us'
	},
	{
		title: 'Projects',
		description: 'Projects description Projects description Projects description',
		image: 'static/img/community2.jpg',
		button: 'Add Project'
	},
	{
		title: 'Activity',
		description: 'Activity description Activity description Activity description',
		image: 'static/img/community3.jpg',
		button: 'Visit Activity'
	}
];

const partnersData = [
	{
		name: 'Partner 1',
		url: '',
		image: 'static/img/partners/derby.jpg'
	},
	{
		name: 'Partner 2',
		url: '',
		image: 'static/img/partners/links.gif'
	},
	{
		name: 'Partner 3',
		url: '',
		image: 'static/img/partners/derby.jpg'
	},
	{
		name: 'Partner 4',
		url: '',
		image: 'static/img/partners/derby.jpg'
	},
	{
		name: 'Partner 5',
		url: '',
		image: 'static/img/partners/derby.jpg'
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

		const style = {
			width:"400px"
		};

		return (
			<div key={title} className='active-slide'>
				<div>
					<img src={image} style={style}/>
				</div>
				<div className='active-slide-content'>
					<div>{title}</div>
					<div>{description}</div>
					<button> {button}</button>
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
				<div className='intro-image'>
					<img src='static/img/map.png' height="480px"/>
				</div>
			</div>
			<div className='partners'>
				<CarouselList contents={partnersData} renderData={renderPartnerIterator} pageSize={3}/>
			</div>

			<div className='footer'>
				<div className='find-us'>
					<div>Unit 2, Penmore Business Centre</div>
					<div>Saxton Close, Hasland Road</div>
					<div>Hasland, Chesterfield</div>
					<div>Derbyshire - S41 0SJ</div>
				</div>
			</div>
		</div>
	)
}



