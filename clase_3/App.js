function App() {
	const [user, setUser] = React.useState(1);
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((dataFetch) => {
				setData(dataFetch);
				setUserMax(dataFetch.length / 10);
			});
	}, []);

	return (
		<div style={{ width: "100%" }}>
			<div style={{ display: "flex", width: "100%" }}>
				<MyForm data={data} setData={setData} />
				<MyHeader userNote={user} setUser={setUser} />
			</div>
			<BodyNotes data={data} user={user} />
		</div>
	);
}

let rootNode = document.getElementById("root");
let root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));
