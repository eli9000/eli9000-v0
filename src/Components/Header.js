import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<ul>
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About Me</a></li>
				<li><a href="#projects">Projects</a></li>
				<li className="dropdown">
					<a className="dropbtn">Kewl Links</a>
					<div className="dropdown-content">
						<a href="#">How big will this go?</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</li>
			</ul>

		);
	}
}

export default Header;
