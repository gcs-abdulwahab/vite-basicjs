import { useState, useEffect } from "react";

const CompA = () => {
	const [count, setCount] = useState(1);
	const [name, setName] = useState("");
	useEffect(() => {
		console.log("useEffect  of Comp A");
	},[count]);

	return (
		<div style={{ backgroundColor: "red" }}>
			<h2>Comp A </h2>
			<h3> {count} </h3>
			<h3>{name}</h3>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
};

export default CompA;
