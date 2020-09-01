import React from 'react';
import './style.css';
import EventImageLayover from './ImageLayover';
import EventDescription from './EventDescription';

export default function Event(props) {

	const {data, onClick} = props;
	const {name, cover, start_time, place} = data;

	let imageUI = null;
	if (cover) {
		imageUI = (<EventImageLayover url={cover.source} start={start_time}/>)
	}
	return (
	<div className='event-container'>
		<div className='event-path'>
			<a className='events-link' onClick={() => onClick()}>Events</a>
			<span className='event-path-separator'>&gt;</span>
			{name}
		</div>
		<div className='event'>
			{imageUI}
			<EventDescription event={data}/>
		</div>
	</div>)
}


