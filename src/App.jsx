import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';


class App extends Component {
	constructor() {
		super();

		this.onChange = this.setName.bind(this);
		this.state = { name: '' };
	}

	render() {

		return (
			<div className="App">
				<Header name={this.state.name} />
				<div className="body">

				</div>
			</div>
		);
	}

	setName(e) {
		this.setState({ name: e.target.value });
	}
}

export default App;
