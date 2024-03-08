import React, { useEffect, useState } from "react";





const CompC = () => {
    
     function getData() {
         fetch('https://jsonplaceholder.typicode.com/posts/1',
        {cache: "force-cache"}
         ).then(response => response.json())
            .then(data => console.log(data))
        
    }
    


	return (
		<div>
            <h1>Component C</h1>
            <p>Component C is a functional component</p>
            <button onClick={getData}>Get Data</button>

		</div>
	);
};

export default CompC;
