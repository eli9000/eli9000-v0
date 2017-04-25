import React, { Component } from 'react';

class Bio extends Component {
	render() {
		return (
			<div className="bio">
				<h1>BIO: eDot Dev McWizzy</h1>
				<br />
				<img src="./images/img_3306.jpg" alt='' />
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<h3>Stuff About Me</h3>
							<p>I'm a Giant Piece of FUck</p>
							<p>More ish</p>
						</div>
						<div className="col-sm-4">
							<h3>Stuff About Me</h3>
							<p>Some ish</p>
							<p>More ish</p>
						</div>
						<div className="col-sm-4">
							<h3>Stuff About Me</h3>
							<p>Some ish</p>
							<p>More ish</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Bio;
