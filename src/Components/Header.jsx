import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<ul>
					<li><a href="#bio">Bio</a></li>
					<li><a href="#dev">Dev Skills</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
		);
	}
}

export default Header;
