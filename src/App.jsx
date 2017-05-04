// Lib
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Components

// CSS
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app" id="app">
				<h1 className="app-h1">Welcome to my site!</h1>
				<div className="header">
					<ul>
						<li>
							<NavLink exact to="/" activeClassName="active">Home</NavLink>
						</li>
						<li>
							<NavLink to="/about" activeClassName="active">About</NavLink>
						</li>
						<li>
							<NavLink to="/devskills" activeClassName="active">Dev Skills</NavLink>
						</li>
						<li>
							<NavLink to="/projects" activeClassName="active">Projects</NavLink>
						</li>
						<li>
							<NavLink to="/contact" activeClassName="active">Contact</NavLink>
						</li>
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
