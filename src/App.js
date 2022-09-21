import './App.css';

const noyoks = ['Rubel', 'Bapparaj', 'Shakib Khan', 'Riyaz'];
const singers = [
	{name: 'Junayed', job: 'dj'},
	{name: 'Ahmed', job: 'cr'},
	{name: 'Joy', job: 'mj'},
];
function App() {
	return (
		<div className="App">
			{noyoks.map((nayok) => (
				<Person name={nayok}></Person>
			))}
			<h1>Singers Starts Here</h1>
			{singers.map((singer) => (
				<Friends singer={singer} key={singer.job}></Friends>
			))}
		</div>
	);
}

function Person(props) {
	return (
		<div className="person">
			<h1>Name:{props.name}</h1>
			<h3>Job:{props.job}</h3>
		</div>
	);
}
function Friends(props) {
	const {name, job} = props.singer;
	return (
		<div className="person">
			<h1>Name:{name}</h1>
			<h3>Job:{job}</h3>
		</div>
	);
}
export default App;
