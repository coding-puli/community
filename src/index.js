import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './app';
import './app.css';



function AsianAssociationWebsite(props){
	return (
		<div className='app'>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</div>
	)
}

ReactDOM.render(<AsianAssociationWebsite/>, document.getElementById('app'));

