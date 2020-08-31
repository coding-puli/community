import React from "react";
import './style.css';

export default function EventDate(props){
	const {date, day, month, year, className} = props;

	return (
	<div className={className}>
		<div className='event-date-date'>{date}</div>
		<div className='event-month'>{month}</div>
	</div>
	)
}