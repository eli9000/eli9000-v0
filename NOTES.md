  `$ npm install --save <package-name>` installs the package into the project, as a "dependency", i.e. required for app to run.

  `$ npm install --save-dev <package-name>` installs the package for local development to "run".

  `$ npm -i` === `$ npm install`

  
Sample fetch() request layout for Starwars API -----------

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

--------------------------------------------------------------
