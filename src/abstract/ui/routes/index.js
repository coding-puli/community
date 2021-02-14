import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import DynamicImport from './DynamicImport';

export default function Routes(props){
	const {links, basePath, defaultLink} = props;
	const routeUI = links.map((pageLink, index)=>{
		const {title, link, importPath} = pageLink;
		const routePath = basePath + link;
		return (
		<Route key={title} path={routePath}>
			<DynamicImport path={importPath}/>
		</Route>
		)
	});

	const defaultPath = basePath + defaultLink;
	return (
	<Switch>
    <Route exact path="/" render={() => {
      return (<Redirect to={defaultPath} />)
    }}/>
		{routeUI}
	</Switch>
	)
}


