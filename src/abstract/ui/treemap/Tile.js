import React from "react";

export default function TreeNode(props){
	const { node, xScale, yScale, colorScale, onClick, imageGetter, isActive , showLabel, gap} = props;

	const { x0, y0, x1, y1, data} = node;
	const {name} = data;

	// 1. Dimensions
	const xPos = xScale(x0);
	const yPos = yScale(y0);
	const nodeWidth = (xScale(x1) - xPos);
	const nodeHeight = (yScale(y1) - yPos);

	// 2. Background color values
	const colorValue = colorScale(name);

	const padding = gap !== undefined ?`${gap}px` : gap;
	const tileStyle = {
    position: 'absolute',
    left: xPos,
    top: yPos,
    width: nodeWidth,
    height: nodeHeight,
    padding: padding
  };



	const tileRelativeContainerStyle = {
    position: 'relative',
  };

	const delta = padding ? `${gap/2}px` : undefined;
	const width = padding ? nodeWidth-gap : nodeWidth;
	const height = padding ? nodeHeight-gap : nodeHeight;

	const nodeStyle = {
		position: 'absolute',
		display: 'flex',
		left: delta,
		top: delta,
		backgroundColor: !imageGetter ? colorValue : 'none',
		width: width,
		height: height,
		zIndex: !imageGetter ? 1 : 2,
		cursor: 'pointer',
	};

	let imageUI = null;
	if(imageGetter){
		const imageURL = imageGetter(data);
		if(imageURL){
      imageUI = [];
			const imgStyle =  {
				position: 'absolute',
				display: 'flex',
        left: delta,
        top: delta,
				width: width,
				height: height,
				objectFit: 'cover'
			};
      imageUI.push(<img key='tile-image' className='tile-image' style={imgStyle} src={imageURL} />);


      if(isActive !== undefined){
        const overlayStyle =  {
          position: 'absolute',
          left: delta,
          top: delta,
          width: width,
          height: height,
          opacity: (isActive)? '0' : '80%',
          zIndex: 1,
        };

        imageUI.push(
          <div key='tile-overlay'  className='tile-overlay' style={overlayStyle}></div>
        );
      }

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