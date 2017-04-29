import React, { Component } from 'react';
import Bio from './Bio.jsx';
import Devskills from './Devskills.jsx';
import Projects from './Projects.jsx';

class Body extends Component {
	render() {
		return (
			<div className="body" id="home">
				{/*<Bio name={this.props.data.name} />*/}
				<Bio {...this.props.data} />
				<Devskills />
				<Projects {...this.props.data} />
			</div>
		);
	}
}

export default Body;
