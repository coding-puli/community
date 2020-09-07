import React from 'react';

export default function Logo(props){
	const {url} = props;

	const containerStyle = {
		position: 'relative'
	};

	const logoContainerStyle = {
		position: 'absolute'
	};

	return (
		<div style={containerStyle}>
			<div style={logoContainerStyle}>
				<div className='logo'>
					<img src={url}/>
				</div>
			</div>
		</div>
	)
}

