import React from 'react';
import {useLocation} from 'react-router-dom';
import Header from './header';
import RouterBreadCrumb from 'abstract/ui/routerBreadcrumb';
import Routes from 'abstract/ui/routes';
import {pageLinks} from './pageMetaData';

export default function App(props){
	const location = useLocation();

	return (
	<>
			<Header links={pageLinks} logoUrl="static/img/logo.jpg"/>
			<RouterBreadCrumb pathname={location.pathname} startingIndex={2}/>
			<div className='app-view-area'>
				<Routes links={pageLinks}/>
			</div>
	</>
	)
}


