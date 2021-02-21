import React from 'react';
import Header from './header';
import Routes from 'abstract/ui/routes';
import useSticky from 'abstract/hooks/useSticky';
import useDynamicCSSImport from 'abstract/hooks/useDynamicCSSImport';
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

const StyledHeader = styled('header').attrs(() => ({
	className: 'app-header'
}))`
  height: 16vh;
`;
StyledHeader.displayName = 'StyledHeader';

const StyledSection = styled('section').attrs(() => ({
	className: 'app-view-area'
}))`
  height: 84vh;
  overflow: auto;
`;
StyledSection.displayName = 'StyledSection';

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export default function App(props){
	const {basePath} = props;
  let themeName = getUrlParameter('theme');
  themeName = themeName ? themeName : 'african';
  const [cssStyles, setCssStyles] = useDynamicCSSImport(themeName);
	const {isSticky, element} = useSticky();

	if(!cssStyles){
	  return null;
  }

	return (
	<AppDiv>
		<StyledHeader>
			<Header links={pageLinks}
							isSticky={isSticky}
							element={element}
							logoUrl="./static/img/logo.png"/>

		</StyledHeader>
		<StyledSection>
			<Routes links={pageLinks} basePath={basePath}  defaultLink='home'/>
		</StyledSection>
	</AppDiv>
	)
}