import React, {useRef, useState, useEffect} from 'react';
import NavBar from 'abstract/ui/navbar';
import Logo from './logo';

export default function Header(props){
	const {links, logoUrl} = props;


	const style = {
		display: 'flex',
		marginRight: '16px',
		marginLeft: '32px'
	};

	const wordStyle = {
		width: "50px"
	};

	return (
		<div className='header'>
			<div style={style}>
				<Logo url={logoUrl}/>
			</div>
			<div>
				<h3 style={wordStyle}>Afro Caribbean Community Association</h3>
			</div>
			<NavBar links={links}/>
		</div>
	)
}

