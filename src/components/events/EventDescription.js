import React from "react";
import EventDate from "components/events/EventDate";
import {getFormattedDate} from "components/events/helper";

export default function EventDescription(props){
	const {event} = props;
	const {eventId, name, description, category, place, start_time} = event;
	const {date, day, month, year} = getFormattedDate(start_time)

	let placeUI = null;
	if(place && place.location){
		placeUI = <EventPlace {...place}/>
	}


	const eventUri = `https://www.facebook.com/events/${eventId}/`
	return (
		<div className='event-description'>
			<div className='event-date-container'>
				<EventDate className='event-date'
									 date={date} day={day}
									 month={month} year={year}/>
			</div>
			<h2 className='event-name'>{name}</h2>
			<p className='event-summary'>{description}</p>
			<div className='empty-div'></div>
			<div className='event-redirect'>
				{placeUI}
				<div className='event-url'>
					<a  className='event-read-more' target="_blank" href={eventUri}>Read More</a>
				</div>
			</div>
		</div>
	)
}

function EventPlace(props){
	const {name, location} = props;
	const {city, country, zip, latitude, longitude} = location;
	const googleMapUri = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
	return (
	<div className='event-location'>
		<a className='location-icon' href={googleMapUri} target='_blank'></a>
		<div className='event-place'>
			<div className='event-location-name'>{name}</div>
			<div className='event-city'>{city}</div>
			<div className='event-country'>{country}</div>
			<div className='event-zip'>{zip}</div>
		</div>
	</div>

	)
}
