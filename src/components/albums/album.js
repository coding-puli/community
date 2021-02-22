import React from "react";
import './style.css'

export default function Album(props) {

	const {data, onClick} = props;
	const {name, link:albumLink, photos} = data;

	 let imagesUI = photos.data.map((imageObj, index)=>{
	 	const {id, images:sizedImages, link} = imageObj;
		 return (
		 		<div className='album-image'>
					<div className='album-image-link'><a href={link} target='_blank'>Link</a></div>
					<div className='album-image-overlay'/>
					<img src={sizedImages[1].source}/>
				</div>
		 )
	 });

	return (
	<div className='album-container'>
		<div className='album-path'>
			<a className='album-link' onClick={() => onClick()}>Albums</a>
			<span className='album-path-separator'>&#47;</span>
			{name}
		</div>
		<div className='album'>
			{ imagesUI}
		</div>
	</div>)
}