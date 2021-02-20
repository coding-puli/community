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
		description: 'The African & Caribbean Community Association (A.C.C.A) is established to promote the welfare of the African and Caribbean Community in Chesterfield and surrounding areas, in particular by providing: Opportunities for African and Caribbean people to meet socially for mutual support to perform in artistic and cultural activities.',
		image: ['./static/img/map.png','./static/img/community1.jpg','./static/img/community2.jpg','./static/img/community3.jpg' ],
	},
	{
		title: 'Projects',
		description: 'An organisation to educate the community about the culture and history of the African and Caribbean people.',
		image: ['./static/img/sitting.png','./static/img/community2.jpg','./static/img/community3.jpg','./static/img/community1.jpg' ],
	},
	{
		title: 'Activity',
		description: 'To press for the removal of barriers which deny members of the African and Caribbean community an equal opportunity to participate in society.',
		image: ['./static/img/drums1.png','./static/img/community3.jpg','./static/img/community2.jpg','./static/img/community1.jpg' ],
	}
];

const partnersData = [
	{
		name: 'Partner 1',
		url: '',
		image: './static/img/partners/derby.jpg'
	},
	{
		name: 'Partner 2',
		url: '',
		image: './static/img/partners/links.gif'
	},
	{
		name: 'Partner 3',
		url: '',
		image: './static/img/partners/derby.jpg'
	},
	{
		name: 'Partner 4',
		url: '',
		image: './static/img/partners/derby.jpg'
	},
	{
		name: 'Partner 5',
		url: '',
		image: './static/img/partners/derby.jpg'
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
					<div>{description}</div>
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



