function MyHeader({ userNote, setUser }) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				width: "50%",
				backgroundColor: "#a510af",
			}}
		>
			<button
				onClick={() => {
					userNote > 1 && setUser(userNote - 1); //No recomendable
				}}
			>
				-
			</button>
			<h1>User: {userNote}</h1>
			<button
				onClick={() => {
					userNote < 11 ? setUser(userNote + 1) : ""; //Forma Recomendable
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
