import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './app';

function getBasePath(){
  const url = window.location.pathname;
  const lastFolderOrFile = url.substring(url.lastIndexOf('/')+1);
  const isFile = lastFolderOrFile.indexOf('.') >= 0 ;
  const basePath = isFile ? url.substring(0, url.lastIndexOf('/')+1) : url;
  return basePath;
}

function AsianAssociationWebsite(props){

  const basePath = getBasePath();

	return (
    <BrowserRouter>
      <App basePath={basePath}/>
    </BrowserRouter>
	)
}

// spa
ReactDOM.render(<AsianAssociationWebsite/>, document.getElementById('app'));

// static


