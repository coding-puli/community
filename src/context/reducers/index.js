// actions
const EVENTS = "events";
const ALBUMS = "albums";

// action creators // these are dispatched by sending the return type of action creators
function setEvents(events){
	return {
		type: EVENTS,
		data: events.data
	}
}

function setAlbums(albums){
	return {
		type: ALBUMS,
		data: albums
	}
}


function updateEvents(currentState, newValue = []){
	return Object.assign({}, currentState,{
		events: newValue
	});
}

function updateAlbums(currentState, newValue = []){
	return Object.assign({}, currentState,{
		albums: newValue
	});
}

// reducer
export default function reducer(state, action){
	const {type, data} = action;
	switch (type) {
		case EVENTS:
			return updateEvents(state, data)
		case ALBUMS:
			return updateAlbums(state, data)
	}
}


export const actionCreators = {
	setEvents,
	setAlbums,
	EVENTS,
	ALBUMS
};
