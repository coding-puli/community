import React from 'react';
import {ServiceProvider} from 'context/provider';
import Events from 'components/events';

//todo: write queryBuilder query for facebook events
const eventsUrl = `https://graph.facebook.com/me?fields=events{attending_count,place,interested_count,photos,category,cover,start_time,end_time,description,name,picture}&access_token=EAAGLgZB5xocIBAMVZA3W2ZBy6cFop4eZCeZADqDmlYzbiuAuZBDW2nS7kZBTPO5isSeyaZAJeCZAaQVhS4CqZAHuDiHfLs9j19Ekrcu8OIvax77MqExAJDv6UJv2n8sXVcgO9k19ANKz39nkhnW9HKIORAKV6Kht2OF9ZAZAzV3O9818Ivm4DszEFjxlnNB89yofIr0ZD`

export default function Home(props){
	return (
		<div>
			<ServiceProvider url={eventsUrl} method="GET" type="events">
					<Events/>
			</ServiceProvider>

		</div>
	)
}