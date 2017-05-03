import React, { Component } from 'react';
import Bio from './Bio.jsx';
import Devskills from './Devskills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

class Body extends Component {
	render() {
		return (
			<div className="body" id="home">
				<Bio {...this.props.data} />
				<Devskills />
				<Projects {...this.props.data} />
				<Contact />
			</div>
		);
	}
}

export default Body;
