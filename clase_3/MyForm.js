function MyForm({ data, setData, setUserMax}) {
	const [userId, setUserid] = React.useState("");
	const [title, setTitle] = React.useState("");
	const [body, setBody] = React.useState("");

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "50%",
				backgroundColor: "#afafaf",
				alignItems: "center",
			}}
		>
			<h3 style={{ margin: 0 }}>Ingresa una Nota</h3>
			<form
				action=""
				style={{ display: "flex", flexDirection: "column", width: "50%" }}
			>
				<input
					type='number'
					placeholder='ID de Usuario'
					value={userId}
					onChange={(e) => setUserid(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Titulo"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Descripcion"
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<button
					onClick={(e) => {
						e.preventDefault();
						setData([
							...data,
							{
								userId: Number(userId),
								id: data.length + 1,
								title,
								body,
							},
						]);
						setUserMax(userId);
						setTitle("");
						setBody("");
					}}
				>
					Add
				</button>
			</form>
		</div>
	);
}
