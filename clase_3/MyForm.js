function MyForm({ data, setData }) {
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
					type="text"
					placeholder="Titulo"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
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
								userId: 11,
								id: data.length + 1,
								title,
								body,
							},
						]);
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
