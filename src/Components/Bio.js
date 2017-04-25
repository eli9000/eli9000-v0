import React, { Component } from 'react';

class Bio extends Component {
	render() {
		return (
			<div className="bio">
				<h1>eDot Dev McWizzy</h1>
				<br />
				<img src="/images/img_3306.jpg" alt='' />
				<div className="container" id="devtable">
					<div className="row">
						<div className="col-sm-6">
							<h3>Stuff About Me</h3>
							<p>I'm a Giant Piece of Fuck</p>
							<p>Yes, I'm that ugly.</p>
						</div>
						<div className="col-sm-6">
							<h3>Stuff About Me</h3>
							<p>I suck balls @ Bootstrap</p>
							<p>Duh</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Bio;
