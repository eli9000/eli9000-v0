import React, { Component } from 'react';
import Bio from './Bio';
import Devskills from './Devskills';
import Projects from './Projects';

class Body extends Component {
	render() {
		return (
			<div className="body">
				<Bio />
				<Devskills />
				<Projects />
			</div>
		);
	}
}

export default Body;
