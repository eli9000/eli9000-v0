import React, { Component } from 'react';

class Projects extends Component {
	render() {
		const { residents } = this.props;

		return (
			<div className="projects" id="projects">
				<h1>Here are some projects I'm fucking up:</h1>
				<hr />
				<div className="project-list">
					<ul>
						<li>test</li>
						{/*{residents && residents.length && residents.map((url) => console.log(url))}*/}
						{residents && residents.length && residents.map((url) =>
							<li>
								{url}
							</li>,
						)}
					</ul>
				</div>
			</div>
		);
	}
}

export default Projects;
