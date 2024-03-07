import React, { useState ,  useEffect } from "react";

const CompB = () => {

	const [joke, setJoke] = useState('...')

	useEffect(() => {
		console.log("Comp B Component");
		
		/* fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
			.then(response => response.json())
			.then(data => setJoke(data.joke))
	 */

		let x = async () => {
			let response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
			let data = await response.json()
			setJoke(data.joke)
		}
		x()
		
	},[]);

	return (
		<div>
			<h1> Comp B</h1>
			<p>{joke}</p>
		</div>
	);
};

export default CompB;
