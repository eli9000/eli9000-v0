// Lib
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components

// CSS
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app" id="app">
				<h1 className="app-h1">Welcome to my site</h1>
				<div className="header">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="about">About</Link></li>
						<li><Link to="devskills">Dev Skills</Link></li>
						<li><Link to="projects">Projects</Link></li>
						<li><Link to="contact">Contact</Link></li>
					</ul>
				</div>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
