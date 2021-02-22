import React from 'react';
import {ServiceProvider} from 'context/provider';
import Albums from 'components/albums';

//todo: write queryBuilder query for facebook events
const token = `EAAGLgZB5xocIBABnei8kZAZAJfjgMdvAcEDGXDO3V0J4EE5TNCp0frJw9ST6edzUcfyu0LPScGo57lc6hMoR3SpuPGgB60D1A7K8Vd1HgZAbvN13MME4imRZBB8bVeTCo6WEZBLNUePuIrobi0lbZBvpWlPrI96Ydv1wE5aw8gNIwZDZD`
const albumsUrl = `https://graph.facebook.com/me?fields=albums{name,link,photos{link,images}}&access_token=${token}`;
export default function Gallery(props){
	return (
		<div className='gallery-page'>
			<ServiceProvider url={albumsUrl} method="GET" type="albums">
					<Albums gap={32}/>
			</ServiceProvider>
		</div>
	)
}