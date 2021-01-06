import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Comments from "./pages/List";
import { Container } from "./components/Grid";
import Comment from "./pages/User";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Head from "./components/Head";
import userAPI from "./utils/userAPI";
import ProtectedRoute from "./components/ProtectedRoute";
import Explorer from "./pages/Explore";
import User from "./pages/User";

function App() {
	
	const [userState, setUserState] = useState({});

	//user authentication
	function authenticate() {
		return userAPI.authenticateUser()
			.then(({ data }) => {
				console.log('user:', data );
            setUserState(data);
			})
			.catch((err) => console.log('registered user:', err.response));
	}

	return (
		<>
			<Header />
			<Router >
				<Switch>
					<Route
						exact path='/'
						render={ props => (
							<Login
								{...props}
								userState={userState}
								setUserState={setUserState}
							/>
						)}
					/>

					<Route
						exact path='/signup'
						render={ props => (
							<Signup
								{...props}
								authenticate={authenticate}
								user={userState}
							/>
						)}
					/>

					<ProtectedRoute exact path="/explore"> 
						<Explorer {...userState} />
					</ProtectedRoute>

					<ProtectedRoute exact path="/user" >
						<User {...userState} />
					</ProtectedRoute>

					<Route component={NoMatch} />

				</Switch>
				{ userState.email ? <Redirect to="/comments" /> : <></>}
			</Router>
			<Footer />
		</>

		// // // // // // // // // <Router>
		// // // // // // // // // 	<Head />
		// // // // // // // // // 	<Container>
		// // // // // // // // // 		<Switch>
		// // // // // // // // // 			<Route
		// // // // // // // // // 				exact
		// // // // // // // // // 				path='/'
		// // // // // // // // // 				render={ props => (
		// // // // // // // // // 					<Login
		// // // // // // // // // 						{...props}
		// // // // // // // // // 						userState={userState}
		// // // // // // // // // 						setUserState={setUserState}
		// // // // // // // // // 					/>
		// // // // // // // // // 				)}
		// // // // // // // // // 			/>
		// // // // // // // // // 			<Route
		// // // // // // // // // 				exact
		// // // // // // // // // 				path='/signup'
		// // // // // // // // // 				render={ props => (
		// // // // // // // // // 					<Signup
		// // // // // // // // // 						{...props}
		// // // // // // // // // 						authenticate={authenticate}
		// // // // // // // // // 						user={userState}
		// // // // // // // // // 					/>
		// // // // // // // // // 				)}
		// // // // // // // // // 			/>
        // // // // // // // // //        <ProtectedRoute exact path={["/", "/comments"]}>
        // // // // // // // // //           <Comments {...userState} />
        // // // // // // // // //        </ProtectedRoute>
        // // // // // // // // //        <ProtectedRoute exact path='/comments/:id' >
        // // // // // // // // //           <Comment {...userState} />
        // // // // // // // // //        </ProtectedRoute>
		// // // // // // // // // 			<Route component={NoMatch} />
		// // // // // // // // // 		</Switch>
		// // // // // // // // // 	</Container>
        // // // // // // // // //  { userState.email ? <Redirect to="/comments" /> : <></>}
		// // // // // // // // // </Router>
	);
}

export default App;
