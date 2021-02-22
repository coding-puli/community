import React, {useState} from 'react';
import TreeMap from 'abstract/ui/treemap';
import {useGetEvents, useGetNearestEvent} from 'context/consumer';
import EventDescription from "components/events/EventDescription";

export default function Events(props){
  const {gap} = props;
	const events = useGetEvents(); // access data from top level through context instead of props
	const nearestEvent = useGetNearestEvent();
	const [activeData, setActiveData] = useState(nearestEvent);

	if(!events || events.length == 0){
		return null;
	}

	function tileClickHandler(data){
		setActiveData(data)
	}

	function imageGetter(data){
		const {cover} = data;
		if(cover) {
			return cover.source;
		}
		return  ''
	}



	const treeData =  {
		name: 'events',
		children: events
	};
	const sumIterator = (item)=>{
		const in_count = item['interested_count'] === undefined ? 0 : item['interested_count'];
		const at_count = item['attending_count'] === undefined ? 0 : item['attending_count'];
		return in_count + at_count + 1;
	};

	const eventToRender = activeData ? activeData : nearestEvent;



	const relativeStyle = {
		position: 'relative',
	}
	return (
		<div className='events-container'>
			<div style={relativeStyle}>
				<TreeMap data={treeData} onTileClick={tileClickHandler}
								 activeId={eventToRender.id}
                 showLabel={true}
								 width={640}
                 gap={gap}
								 imageGetter={imageGetter}
								 sumIterator={sumIterator}
								 height={400}/>
			</div>
			<EventDescription event={eventToRender}/>
		</div>
	)
}