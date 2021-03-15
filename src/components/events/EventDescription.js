import React from "react";
import {getFormattedDate} from "components/events/helper";

export default function EventDescription(props){
	const {event} = props;
	const {id:eventId, name, description, category, place, start_time} = event;
	const {date, day, month, year} = getFormattedDate(start_time)

	let placeUI = null;
	if(place && place.location){
		placeUI = <EventPlace {...place}/>
	}


	const eventUri = `https://www.facebook.com/events/${eventId}/`
	return (
		<div className='event-description'>
			<h4 className='event-name'>{name}</h4>
			<p className='event-summary'>{description}</p>
			<div className='empty-div'></div>
			<div className='event-redirect'>
				{placeUI}
        <div className='empty-div'></div>
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
		<a href={googleMapUri} target='_blank'><span className='event-location-name'>{name}</span></a>
		<div className='event-place'>
			<span className='event-city'>{city},</span>
			<span className='event-country'>{country}</span>
			{/*<div className='event-zip'>{zip}</div>*/}
		</div>
	</div>

	)
}
