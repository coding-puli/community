import React from "react";
import {getFormattedDate} from './helper';
import EventDate from './EventDate';

export default function EventImageLayover(props){
	const {url, start} = props;

	const {date, day, month, year} = getFormattedDate(start)

	return (
	<div className='image-container'>
    <EventDate className='event-date'
               date={date}
               day={day}
               month={month}
               year={year}/>
    {/*<div className='image-overlay'></div>*/}
    <img src={url}/>

	</div>
	)
}

