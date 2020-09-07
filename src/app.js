import React from 'react';
import {useLocation} from 'react-router-dom';
import Header from './header';
import RouterBreadCrumb from 'abstract/ui/routerBreadcrumb';
import Routes from 'abstract/ui/routes';
import useSticky from 'abstract/hooks/useSticky';
import {pageLinks} from './pageMetaData';
import './app.css';
import styled from "styled-components";



const AppDiv = styled('div').attrs(() => ({
	className: 'app'
}))`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
AppDiv.displayName = 'AppDiv';


export default function App(props){
	const location = useLocation();
	const {isSticky, element} = useSticky();

	return (
	<AppDiv>
			<Header links={pageLinks}
							isSticky={isSticky}
							element={element}
							logoUrl="static/img/logo.png"/>
			{/*<RouterBreadCrumb pathname={location.pathname} startingIndex={2}/>*/}
			<div className='app-view-area' >
				<Routes links={pageLinks}/>
			</div>
	</AppDiv>
	)
}


