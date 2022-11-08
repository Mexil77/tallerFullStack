function App() {
	const [user, setUser] = React.useState(1);
	const [data, setData] = React.useState([]);
	const [userMax, setUserMax] = React.useState(0);


	React.useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((dataFetch) => {
				setData(dataFetch);
			});
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(usersFetch => {
				setUserMax(usersFetch.length);
			})
	}, []);

	return (
		<div style={{ width: "100%" }}>
			<div style={{ display: "flex", width: "100%" }}>
				<MyForm data={data} setData={setData} userMax={userMax} setUserMax={setUserMax} />
				<MyHeader userNote={user} setUser={setUser} userMax={userMax} />
			</div>
			<BodyNotes data={data} user={user} />
		</div>
	);
}

let rootNode = document.getElementById("root");
let root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));
