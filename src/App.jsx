import React, { Component } from 'react';
import uuid from 'uuid';
import Header from './Components/Header';
import AddProject from './Components/AddProject';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.onDelete = this.handleDeleteProject.bind(this);
		this.addProject = this.handleAddProject.bind(this);

		this.state = {
			projects: [
				{
					id: uuid.v4(),
					title: 'Business Website',
					category: 'Web Design',
				},
				{
					  id: uuid.v4(),
					title: 'Social App',
					category: 'Mobile Development',
				},
				{
					id: uuid.v4(),
					title: 'eCommerce Shopping Cart',
					category: 'Web Development',
				},
			],
		};
	}

	// componentWillMount() {
	// }



	handleAddProject(project) {
		const projects = this.state.projects;
		projects.push(project);
		this.setState({ projects });
	}

	handleDeleteProject(id) {
		const projects = this.state.projects;
		const index = projects.findIndex((x) => x.id === id);
		projects.splice(index, 1);
		this.setState({ projects });
	}

	render() {
		return (
			<div className="App">
				<Header />
				<AddProject addProject={this.addProject} /><br />
				<Projects
					projects={this.state.projects}
					onDelete={this.onDelete}
				/>
			</div>
		);
	}
}

export default App;
