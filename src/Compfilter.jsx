import React from "react";

const Compfilter = () => {
	let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<div>
			<h1>Comp Filter</h1>
            <h3>{
                x.map((num , index) => {
                    return <pre key={index}>{num}</pre>
                })
            }</h3>
		</div>
	);
};

export default Compfilter;
