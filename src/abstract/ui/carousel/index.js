import React from 'react';
import Slider from "react-slick";
import './style.css'

export default function Carousel(){
	var settings = {
		dots: true
	};
	return (
	<div className='container'>
		<Slider {...settings}>
			<div>
				<img src="static/img/carousel/1.jpg" />
			</div>
			<div>
				<img src="static/img/carousel/2.jpg" />
			</div>
			<div>
				<img src="static/img/carousel/3.jpg" />
			</div>
		</Slider>
	</div>

	);
}