import React from 'react';
import {Switch, Route} from 'react-router';
import DynamicImport from './DynamicImport';

export default function Routes(props){
	const {links, basePath} = props;
	const routeUI = links.map((pageLink, index)=>{
		const {title, link, importPath} = pageLink;
		const routePath = basePath + link;
		return (
		<Route key={title} path={routePath}>
			<DynamicImport path={importPath}/>
		</Route>
		)
	});

	return (
	<Switch>
		{routeUI}
	</Switch>
	)
}


