const Card = (props) => {
	return (
		<div
			style={{
				backgroundColor: "#af9910",
				width: "20rem",
				display: "flex",
				flexDirection: "column",
				borderRadius: "30px",
				padding: "20px",
				margin: "20px",
			}}
		>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h2 style={{ margin: 0 }}>#{props.id}</h2>
				<h2 style={{ margin: 0 }}>idUser: {props.userId}</h2>
			</div>
			<h3 style={{ margin: 0 }}>{props.title}</h3>
			<p>{props.body}</p>
		</div>
	);
};
