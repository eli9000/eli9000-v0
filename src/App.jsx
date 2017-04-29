import React, { Component } from 'react';
import Header from './Components/Header.jsx';
import Body from './Components/Body.jsx';
import Footer from './Components/Footer.jsx';
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = { data: null, loading: true };
	}

	componentDidMount() {
		// const endpoint = 'http://swapi.co/api/planets/3/';
		const endpoint = 'http://swapi.co/api/planets/1/';

		fetch(endpoint, { method: 'GET' })
			.then((res) => res.json())
			.then((data) => {
				console.log('fetch() => { data }\n', data);
				this.setState({ data, loading: false });
			});
	}

	render() {
		return (
			<div className="app">
				<Header />
				<Body data={this.state.data} />
				<Footer />
			</div>
		);
	}
}


export default App;
