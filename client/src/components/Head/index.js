import React from "react";
import NavBar from "../NavBar"

function Nav ({ user }) {
	// useLogRender();
	console.log(user);

	return (
		<nav>
			<NavBar user={user}/>
		</nav>
	);
}

export default Nav;
