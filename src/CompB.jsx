import { useState, useEffect } from "react";

const CompB = () => {
	const [name, setName] = useState("");

	useEffect(() => {
		console.log("useEffect  of Comp B");
	});

	return (
		<div>
			<h1> Comp B</h1>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	);
};

export default CompB;
