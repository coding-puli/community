import React from 'react';
import {ServiceProvider} from 'context/provider';
import Albums from 'components/albums';

//todo: write queryBuilder query for facebook events
const albumsUrl = `https://graph.facebook.com/me?fields=albums{name,link,photos{link,images}}&access_token=EAAGLgZB5xocIBAPRlwI56oZAPblUGhSTWhjFhb0WZB3lQ22Wq4iU5iUIBSNtOPpPsSaA5FsX9lYiJ8Ex0x03DRftQ9D7kONO9hVp3tbHj6tebOnM63wjKcEHay3uBwowjJxYOIBrE7AXExZB1qeKtxhf4f80N6wmCHommKZCi4ZAOhZAw3mBZCccf22SzuBbZAxUZD`
export default function Gallery(props){
	return (
		<div>
			<ServiceProvider url={albumsUrl} method="GET" type="albums">
					<Albums/>
			</ServiceProvider>
		</div>
	)
}