import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

// Import Components
import App from './App.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Devskills from './Components/Devskills.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';

// Define const routes
const routes = (
	<Router>
		{/*<Route component={App}>
			<IndexRoute path="/" />
			<Route exact path="/" component={Home} />
			<Route path="about" component={About} />
			<Route path="devskills" component={Devskills} />
			<Route path="projects" component={Projects} />
			<Route path="contact" component={Contact} />
		</Route>*/}
		<App>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/devskills" component={Devskills} />
			<Route path="/projects" component={Projects} />
			<Route path="/contact" component={Contact} />
		</App>
	</Router>
);

export default routes;
