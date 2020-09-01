import React, {useRef, useState, useEffect} from 'react';
import NavBar from 'abstract/ui/navbar';
import Logo from './logo';

export default function Header(props){
	const {links, logoUrl} = props;

	/*const [isSticky, setSticky] = useState(false);
	const ref = useRef(null);
	const handleScroll = () => {
		if (ref.current) {
			setSticky(ref.current.getBoundingClientRect().top <= 0);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', () => handleScroll);
		};
	}, []);*/

	const style = {
		display: 'flex'
	};

	return (
		<div className='header sticky'>
			<div style={style}>
				<Logo url={logoUrl}/>
				<h2>Website Title</h2>
			</div>
			<NavBar links={links}/>
		</div>
	)
}

