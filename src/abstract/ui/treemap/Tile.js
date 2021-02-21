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

	const tileStyle = {
    position: 'absolute',
    left: xPos,
    top: yPos,
    width: nodeWidth,
    height: nodeHeight,
    padding:'16px'
  };

	const tileRelativeContainerStyle = {
    position: 'relative',
  };

	const nodeStyle = {
		position: 'absolute',
		display: 'flex',
		left: '8px',
		top: '8px',
		backgroundColor: !imageGetter ? colorValue : 'none',
		width: nodeWidth-16,
		height: nodeHeight-16,
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
        left: '8px',
        top: '8px',
				width: nodeWidth-16,
				height: nodeHeight-16,
				objectFit: 'cover'
			};

			const overlayStyle =  {
				position: 'absolute',
        left: '8px',
        top: '8px',
				width: nodeWidth-16,
				height: nodeHeight-16,
				background: '#627d75',
				opacity: isActive ? '35%' : '80%',
				cursor: 'pointer',
				zIndex: 1,
        border: '1px solid white'
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

	return (
    <div style={tileStyle}>
      <div style={tileRelativeContainerStyle}>
        <div key='tile'  style={nodeStyle} onClick={onClick}>
          <div style={nodeContentStyle} >
            { showLabel ? <label style={labelStyle}>{name}</label> : null}
          </div>
        </div>
        {imageUI}
      </div>
    </div>
  );
}