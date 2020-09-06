import React from 'react';
import {ServiceProvider} from 'context/provider';
import Events from 'components/events';

//todo: write queryBuilder query for facebook events
const accessToken = `EAAGLgZB5xocIBAL1EBIzKo5y8y8ZBs1IzfKOIEEfQW2TJDJi2hfaaJO86KZAQ57mdefS3n4UsTtvlZBgnIDjUtOqUcB0vDyQvZAL4DBezD9em4b0aSx5w9go8SBPEEG9TinZBsUMxVMnekgKSJEu6tocaT2KjZBlDna4Y4lADWMFxhOxxGbDWr9`;
const eventsUrl = `https://graph.facebook.com/me?fields=events{attending_count,place,interested_count,photos,category,cover,start_time,end_time,description,name,picture}&access_token=${accessToken}`;

export default function Activity(props){
	return (
	<div>
		<ServiceProvider url={eventsUrl} method="GET" type="events">
			<Events/>
		</ServiceProvider>

	</div>
	)
}