import React, {useState} from "react";
import styled from "styled-components";
import './style.css';

const SliderDiv = styled('div').attrs(() => ({
	className: 'slider'
}))`
  display: flex;
  min-height: 400px;
  align-items: center;
`;
SliderDiv.displayName = 'SliderDiv';

const SliderItemsDiv = styled('div').attrs(() => ({
	className: 'slider-items'
}))`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
SliderItemsDiv.displayName = 'SliderItemsDiv';




function LeftArrow(props){
	const {onClick} = props;
	return (
	<div className='arrow' onClick={onClick}>
		<i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
	</div>
	)
}

function RightArrow(props){
	const {onClick} = props;
	return (
	<div className='arrow' onClick={onClick}>
		<i className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
	</div>
	)
}


export default function Carousel(props){
	const {contents, renderData} = props;

	const [activeIndex, setActiveIndex] = useState(0);

	function goToPrevSlide() {
		let length = contents.length;
		let index = activeIndex;
		index = (index < 1) ? length - 1 : index - 1;
		setActiveIndex(index);
	}

	function goToNextSlide() {
		let length = contents.length;
		let index = activeIndex;
		index = (index === length - 1) ? 0 : index + 1;
		setActiveIndex(index);
	}

	const ui = contents.map((content, index)=>{
		return renderData(content, activeIndex == index);
	});


	return (
	<SliderDiv>
		<SliderItemsDiv>
			<LeftArrow onClick={goToPrevSlide}/>
				{ui}
			<RightArrow onClick={goToNextSlide}/>
		</SliderItemsDiv>
	</SliderDiv>
	);
}