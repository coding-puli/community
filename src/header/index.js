import React from 'react';
import NavBar from 'abstract/ui/navbar';
import Logo from './logo';
import SocialMedia from './SocialMedia';

export default function Header(props){
	const {links, logoUrl} = props;
	console.log('Header Render');

	const style = {
		display: 'flex'
	};

	return (
		<div className='header'>
			<div style={style}>
				<Logo url={logoUrl}/>
				<h2>Website Title</h2>
			</div>
			<SocialMedia/>
			<NavBar links={links}/>
		</div>
	)
}

