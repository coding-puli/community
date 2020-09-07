import React, {useRef, useState, useEffect} from 'react';
import NavBar from 'abstract/ui/navbar';
import Logo from './logo';

export default function Header(props){
	const {links, logoUrl} = props;


	const style = {
		display: 'flex'
	};


	return (
		<div className='header header-sticky'>
			<div style={style}>
				<Logo url={logoUrl}/>
			</div>
			<NavBar links={links}/>
		</div>
	)
}

