import React, {useState} from 'react';
import List from 'abstract/ui/List';
import {useGetEvents, useGetNearestEvent} from 'context/consumer';
import EventDescription from "components/events/EventDescription";
import Event from "./Event";

export default function Events(props){
  const {gap} = props;
	const events = useGetEvents(); // access data from top level through context instead of props
	const nearestEvent = useGetNearestEvent();

	if(!events || events.length == 0){
		return null;
	}


	return (
		<div className='events-container'>
			<List data={events} ComponentType={Event}/>
		</div>
	)
}