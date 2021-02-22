import React from 'react';
import {ServiceProvider} from 'context/provider';
import Events from 'components/events';

//todo: write queryBuilder query for facebook events
const accessToken = `EAAGLgZB5xocIBABnei8kZAZAJfjgMdvAcEDGXDO3V0J4EE5TNCp0frJw9ST6edzUcfyu0LPScGo57lc6hMoR3SpuPGgB60D1A7K8Vd1HgZAbvN13MME4imRZBB8bVeTCo6WEZBLNUePuIrobi0lbZBvpWlPrI96Ydv1wE5aw8gNIwZDZD`;
const eventsUrl = `https://graph.facebook.com/me?fields=events{attending_count,place,interested_count,photos,category,cover,start_time,end_time,description,name,picture}&access_token=${accessToken}`;

export default function Activity(props){
	return (
	<div className='activity-page'>
		<ServiceProvider url={eventsUrl} method="GET" type="events">
			<Events gap={16}/>
		</ServiceProvider>
	</div>
	)
}