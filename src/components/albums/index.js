import React, {useState} from 'react';
import TreeMap from 'abstract/ui/treemap';
import {useGetAlbums} from 'context/consumer';
import Album from "./album";


function excludeAlbums(albums){


	const filteredAlbums = [];


	for (let i = 0; i < albums.length; i++){
		const album = albums[i];
		if(album.name != 'Profile pictures' && album.name != 'Cover photos' && album.name != 'Timeline Photos'){
			filteredAlbums.push(album);
		}
	}


	return filteredAlbums;


}
export default function Albums(props){
  const {gap} = props;
	const albums = useGetAlbums(); // access data from top level through context instead of props
	const [activeData, setActiveData] = useState(null);


	if(!albums || albums.length == 0){
		return null;
	}

	function tileClickHandler(data){
		setActiveData(data)
	}

	function imageGetter(data){
		const {photos} = data;
		if(photos && photos.data) {
			return 	photos.data[0].images[0].source;
		}
		return  ''
	}

	const filteredAlbums = excludeAlbums(albums.data);
	const treeData =  {
		name: 'albums',
		children: filteredAlbums
	};

	const sumIterator = (item)=>{
		return 1;
	};

	let ui = null;
	if(activeData){
		ui = (
			<Album data={activeData} onClick={tileClickHandler}/>
		)
	} else {
		ui = <TreeMap gap={gap} data={treeData} onTileClick={tileClickHandler}
						 width={840}
						 imageGetter={imageGetter}
						 sumIterator={sumIterator}
						 showLabel={true}
						 height={400}/>
	}

	return (
	<div className='albums-container'>
		{ui}
	</div>
	)
}