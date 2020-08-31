import React from 'react';
import { useLocation,Link} from "react-router-dom";
import {RouteUl, RouteLi} from "./styledElement";


export default function RouterBreadCrumb(props){
	const {startingIndex} = props;
	let location = useLocation();
	const {pathname} = location;
	const paths = [];
	pathname.split('/').map((p, i, arr) => {
		if(!p ) return;
		if(i < startingIndex) return;

		p = p[0].toUpperCase() + p.slice(1)

		let content;
		if (i === arr.length - 1){
			content = p;
		}  else {
			content = (<Link to={`${arr.slice(0, i + 1).join('/')}`}>{p}</Link>)
		}
		paths.push({
			key: i,
			content,
			active: (i === arr.length - 1)
		})

	});

	const ui = paths.map((path)=>{
		const {content, key, active} = path;
		const separator = !active ? " >" : null;
		return (
		<RouteLi key={key}>
			{content}
			&nbsp;
			{separator}
			&nbsp;
		</RouteLi>
		)
	});


	return <RouteUl>{ui}</RouteUl>;
};
