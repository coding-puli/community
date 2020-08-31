import React from "react";

export default function TreeNode(props){
	const { node, xScale, yScale, colorScale, onClick, imageGetter, isActive} = props;

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
		height: nodeHeight
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
				objectFit: 'cover',
				zIndex: 1
			};

			const overlayStyle =  {
				position: 'absolute',
				left: xPos,
				top: yPos,
				width: nodeWidth,
				height: nodeHeight,
				zIndex: 2,
				background: '#602a24',
				opacity: isActive ? '35%' : '80%',
				cursor: 'pointer'
			};

			imageUI = [
				<div key='tile-overlay' onClick={onClick} style={overlayStyle}></div>,
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
		{imageUI}
		<div key='tile' style={nodeStyle} onClick={!imageUI ? onClick : null}>
			<div style={nodeContentStyle} >
				<label style={labelStyle}>{name}</label>
			</div>
		</div>
	</>;
}