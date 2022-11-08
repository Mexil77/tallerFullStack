function MyHeader({ userNote, setUser }) {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<button
				onClick={() => {
					userNote > 1 && setUser(userNote - 1);
				}}
			>
				-
			</button>
			<h1>User: {userNote}</h1>
			<button
				onClick={() => {
					setUser(userNote + 1);
				}}
			>
				+
			</button>
		</div>
	);
}

/* 
props: {
	userNote: 1,2,3,4...
	setUser: function setUser(){},
	name: 'hola',
}
*/
