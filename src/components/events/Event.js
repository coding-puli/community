import React from 'react';
import './style.css';
import EventImageLayover from './ImageLayover';
import EventDescription from './EventDescription';

export default function Event(props) {

	const {data} = props;
	const { cover, start_time} = data;

	let imageUI = null;
	if (cover) {
		imageUI = (<EventImageLayover url={cover.source} start={start_time}/>)
	}
	return (
	<div className='event-container'>
		<div className='event'>
			{imageUI}
			<EventDescription event={data}/>

		</div>
	</div>)
}


