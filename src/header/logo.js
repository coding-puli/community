import React from 'react';

export default function Logo(props){
	const {url} = props;

	const containerStyle = {
		position: 'relative',
		top: '24px',
		height: '150px',
		width: '150px'
	};


	const logoStyle = {
		height: '150px',
		width: '150px'
	};

	return (
		<div style={containerStyle}>
			<div className='logo' style={logoStyle}>
				<img src={url}/>
			</div>
		</div>
	)
}

