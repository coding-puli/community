import React, {useContext, useEffect,useState} from 'react';
import {DataContext} from './provider';

function nearestEvent(events) {
	if(!events || events.length == 0){
		return null;
	};

	const currentTime = Date.now();

	let nearest = Infinity;
	let nearestDateIndex = -1;

	events.forEach(function (event, index) {
		const dateAsStr = event['start_time'];
		const date = new Date(dateAsStr);
		const time = date.getTime();
		const distance = Math.abs(time - currentTime);
		if (distance < nearest) {
			nearest = distance;
			nearestDateIndex = index
		}
	});
	return events[nearestDateIndex];
}


function useGetEvents(){
	const {events} = useContext(DataContext);
	return events;
}

function useGetNearestEvent(){
	const events = useGetEvents();
	return nearestEvent(events);
}

function useGetEventFromStore(eventId){
	const {events} = useContext(DataContext);
	const totalEvents =  events.length;

	let event;

	for (let i=0; i < totalEvents; i++){
		event = events[i];
		if(event.id === eventId){
			return event;
		}
	}
}

function useGetAlbums(){
	const {albums} = useContext(DataContext);
	return albums;
}

// todo: support lazy fetching
// first time fetch from server and store in local store
// second time fetch from store
function useGetAlbumFromStore(albumId){
	const {albums} = useContext(DataContext);
	const totalAlbums =  albums.length;

	let album;

	for (let i=0; i < totalAlbums; i++){
		album = albums[i];
		if(album.id === albumId){
			return album;
		}
	}
}

export {
	useGetEvents,
	useGetNearestEvent,
	useGetEventFromStore,
	useGetAlbums,
	useGetAlbumFromStore
}