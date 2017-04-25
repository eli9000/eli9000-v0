import React, { Component } from 'react';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			value: true,
		};
	}

	handleck(e) {
		return document.getElementById('test').innerHTML = Date();
	}
	render() {
		return (
			<div className="header">
				<div className="header-content">
					<a href="#home">Home</a>
					<a href="#bio">Bio</a>
					<a href="#dev">Dev Skills</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
				</div>
			</div>
		);
	}
}

export default Header;
