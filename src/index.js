import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/app/app'
import { BrowserRouter as Router} from "react-router-dom"
import Store from './storage/context';

render(
	<Store>
		<Router>
			<App />
		</Router>
	</Store>,
	document.getElementById('root')
);
