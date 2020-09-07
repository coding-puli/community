import React, {useState} from "react";
import styled from "styled-components";
import './style.css';

const SliderDiv = styled('div').attrs(() => ({
	className: 'list-slider'
}))`
  display: flex;
  justify-content: center;
  flex: 1;
`;
SliderDiv.displayName = 'SliderDiv';

const SliderItemsDiv = styled('div').attrs(() => ({
	className: 'slider-list-items'
}))`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
SliderItemsDiv.displayName = 'SliderItemsDiv';

const SliderContainerDiv = styled('section').attrs(() => ({
	className: 'slide-list-container'
}))`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 32px;
`;
SliderContainerDiv.displayName = 'SliderContainerDiv';



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

function Slide(props){
	const {contents, startIndex, renderData, pageSize} = props;

	const ui = contents.map((content, index)=>{
		const shouldShow = (index >  startIndex - 1) &&  (index < (startIndex + pageSize))
		return renderData(content, shouldShow);
	});

	return(
	{ui}
	)
}

export default function CarouselList(props){
	const {contents, renderData, pageSize} = props;

	const [startIndex, setStartIndex] = useState(0);

	function goToPrevPage() {
		let index = startIndex;
		index = (startIndex < pageSize) ? startIndex : startIndex - pageSize;
		setStartIndex(index);
	}

	function goToNextPage() {
		let total = contents.length;
		let index = startIndex;
		index = (startIndex >= total - pageSize) ? startIndex : startIndex + pageSize;
		setStartIndex(index);
	}

	const ui = contents.map((content, index)=>{
		const shouldShow = (index >  startIndex - 1) &&  (index < (startIndex + pageSize))
		return renderData(content, shouldShow);
	});

	return (
	<SliderDiv>
		<SliderItemsDiv>
			<LeftArrow onClick={goToPrevPage}/>
			<SliderContainerDiv>
				{ui}
			</SliderContainerDiv>
			<RightArrow onClick={goToNextPage}/>
		</SliderItemsDiv>
	</SliderDiv>
	);
}