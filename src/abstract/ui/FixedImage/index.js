import React, {useRef, useEffect,useState} from 'react';
import {StyleImg} from "./styledElement";

export default function FixedImage(props){
	const {url, onImageLoaded} = props;
	const [width, setWidth] = useState(0);

	function setDimension({target:img}) {
		setWidth(img.offsetWidth);
		onImageLoaded && onImageLoaded()

	}

	const containerStyle = {
		minWidth: width
	};

	return (

	<div className='img-background' style={containerStyle}>
		<StyleImg  onLoad={setDimension} src={url}/>
	</div>
	)
}