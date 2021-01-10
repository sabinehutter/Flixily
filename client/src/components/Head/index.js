import React from "react";
import NavBar from "../NavBar"
import useLogRender from "../../utils/useLogPath";

function Nav ({ user }) {
	// useLogRender();
	console.log(user);

	return (
		<nav>
			{/* <h1 className='mt-0 ml-0 mb-3 text-dark p-4 pt-3 pl-3'>Flixily</h1> */}
			<NavBar user={user}/>
		</nav>
	);
}

export default Nav;
