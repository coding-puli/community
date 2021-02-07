import React, {useState} from 'react';
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
		description: 'About us description About us description About us description About us description About us description About us description About us description About us description About us description',
		image: ['/static/img/map.png','static/img/community1.jpg','static/img/community2.jpg','static/img/community3.jpg' ],
		button: 'Join Us'
	},
	{
		title: 'Projects',
		description: 'Projects description Projects description Projects description Projects description Projects description Projects description Projects description Projects description Projects description Projects description Projects description Projects description',
		image: ['/static/img/sitting.png','static/img/community2.jpg','static/img/community3.jpg','static/img/community1.jpg' ],
		button: 'Add Project'
	},
	{
		title: 'Activity',
		description: 'Activity description Activity description Activity description Activity description Activity description Activity description',
		image: ['/static/img/drums1.png','static/img/community3.jpg','static/img/community2.jpg','static/img/community1.jpg' ],
		button: 'Visit Activity'
	}
];

const partnersData = [
	{
		name: 'Partner 1',
		url: '',
		image: '/static/img/partners/derby.jpg'
	},
	{
		name: 'Partner 2',
		url: '',
		image: '/static/img/partners/links.gif'
	},
	{
		name: 'Partner 3',
		url: '',
		image: '/static/img/partners/derby.jpg'
	},
	{
		name: 'Partner 4',
		url: '',
		image: '/static/img/partners/derby.jpg'
	},
	{
		name: 'Partner 5',
		url: '',
		image: '/static/img/partners/derby.jpg'
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

		const mainImageUrl = Array.isArray(image) ? image[0] : image;
		let imagesUI = [];
		for(let i = 1; i< image.length; i++){
			const imageUrl = image[i];
			const imgStyle = {
				width:"360px"
			};
			imagesUI.push((
				<div className={`image-stack-item-${i}`} >
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
					<div>{description}</div>
					<button> {button}</button>
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



