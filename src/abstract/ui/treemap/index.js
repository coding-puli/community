import React, {useState, useEffect, useRef} from 'react';
import {computeTreeAttributesAndGetRoot, computeLayoutValues,
	getLinearScaleGetter, getOrdinalScaleGetter} from 'abstract/d3Helper';

import Tile from './Tile';

import './style.css';


export default function TreeMap(props){
	const {data, width = 500, height = 500,sumIterator, onTileClick, imageGetter, activeId} = props;

	/* Hooks */
	const [rootNode, setRootNode] = useState(null);
	const xScaleRef = useRef(null);
	const yScaleRef = useRef(null);
	const colorScaleRef = useRef(null);

	useEffect(()=>{
		// 1. Set Scaling
		xScaleRef.current = getLinearScaleGetter(width);
		yScaleRef.current = getLinearScaleGetter(height);
		colorScaleRef.current = getOrdinalScaleGetter();

		// 2. Compute Tree Attributes ( value, height, depth)
		const computedRootNode = computeTreeAttributesAndGetRoot(data, sumIterator);

		// 3. Compute Layout Values (x0, x1, y0, y1) for rendering
		computeLayoutValues(width, height, computedRootNode);

		setRootNode(computedRootNode);

	},[width, height]);


	if(!rootNode || !data.children){
		return null;
	}
	/* UI rendering */
	let nodesUI;
	const nodes = rootNode.children;
	if (nodes && nodes.length > 0) {
		nodesUI = nodes.map((childNode , index)=>{
			return <Tile key={index} node={childNode}
									 isActive={activeId == childNode.data.id}
									 imageGetter={imageGetter}
									 onClick={()=>onTileClick(childNode.data)}
									 xScale={xScaleRef.current}
									 yScale={yScaleRef.current}
									 colorScale={colorScaleRef.current}/>
		});
	}

	const relativeContainerStyle = {
		position: 'relative',
		width: width,
		height: height
	};

	const absoluteContainerStyle = {
		position: 'absolute',
		top: 0,
		left: 0,
		width: width,
		height: height
	};

	return (
	<div className='tree-map'>
		<div style={relativeContainerStyle}>
			<div style={absoluteContainerStyle}>
				{nodesUI}
			</div>
		</div>
	</div>
	)
}
















