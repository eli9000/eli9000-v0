import React, { Component } from 'react';
import Bio from './Bio';
import Devskills from './Devskills'

class Body extends Component {
	render() {
		return (
			<div className="body">
				<Bio />
				<Devskills />
			</div>
		);
	}
}

export default Body;
