import React from "react";
import NavBar from "../NavBar"

function Nav ({ user }) {
	// useLogRender();
	console.log(user);

	return (

		<>
			<NavBar user={user}/>
		</>

	);
}

export default Nav;
