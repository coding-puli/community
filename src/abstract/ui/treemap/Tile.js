import React from "react";

export default function TreeNode(props){
	const { node, xScale, yScale, colorScale, onClick, imageGetter, isActive , showLabel} = props;

	const { x0, y0, x1, y1, data} = node;
	const {name} = data;

	// 1. Dimensions
	const xPos = xScale(x0);
	const yPos = yScale(y0);
	const nodeWidth = (xScale(x1) - xPos);
	const nodeHeight = (yScale(y1) - yPos);

	// 2. Background color values
	const colorValue = colorScale(name);

	const nodeStyle = {
		position: 'absolute',
		display: 'flex',
		left: xPos,
		top: yPos,
		backgroundColor: !imageGetter ? colorValue : 'none',
		width: nodeWidth,
		height: nodeHeight,
		zIndex: !imageGetter ? 1 : 2,
		cursor: 'pointer',

	};
	let imageUI = null;
	if(imageGetter){
		const imageURL = imageGetter(data);
		if(imageURL){
			const imgStyle =  {
				position: 'absolute',
				display: 'flex',
				left: xPos,
				top: yPos,
				width: nodeWidth,
				height: nodeHeight,
				objectFit: 'cover'
			};

			const overlayStyle =  {
				position: 'absolute',
				left: xPos,
				top: yPos,
				width: nodeWidth,
				height: nodeHeight,
				background: '#602a24',
				opacity: isActive ? '35%' : '80%',
				cursor: 'pointer',
				zIndex: 1
			};

			imageUI = [
				<div key='tile-overlay' style={overlayStyle}></div>,
				<img key='tile-image' style={imgStyle} src={imageURL} />
			]
		}
	}

	const nodeContentStyle = {
		padding: '8px',
		display: 'flex',
		flex: '1'
	};

	const labelStyle = {
		color: 'white',
		alignSelf: 'flex-end'
	};

	return <>
		<div key='tile' style={nodeStyle} onClick={onClick}>
			<div style={nodeContentStyle} >
				{ showLabel ? <label style={labelStyle}>{name}</label> : null}
			</div>
		</div>
		{imageUI}
	</>;
}