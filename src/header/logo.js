import React from 'react';

export default function Logo(props){
	const {url} = props;

	const containerStyle = {
		position: 'relative'
	};

	return (
		<div style={containerStyle}>
			<div className='logo'>
				<img src={url}/>
			</div>
		</div>
	)
}

