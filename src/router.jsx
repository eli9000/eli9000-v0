import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

// Import Components
import App from '../App.jsx';
import Header from './Components/Header.jsx';
import Body from './Components/Body.jsx';
import Footer from './Components/Footer.jsx';

// Define const routes
const routes = () => (
	<Router>
		<App>
			<Route path="/" component={Home} />
			<Route path="about" component={About} />
			<Route path="" component={} />
			<Route path="" component={} />
		</App>
	</Router>
);
