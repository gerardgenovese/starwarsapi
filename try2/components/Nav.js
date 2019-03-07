import React from "react";
import { NavLink } from "react-router-dom";


class Nav extends React.Component {

	
	render(){
		
		return (
			<nav className="main__nav">
				<NavLink className="main__nav-link" to="/" activeClassName="is-active" exact={true}>Home</NavLink>
				<NavLink to="/films" className="main__nav-link" activeClassName="is-active" exact={true}>Films</NavLink>
				<NavLink className="main__nav-link" to="/characters" activeClassName="is-active">Characters</NavLink>
		</nav>
		)
	}
}




export default Nav;




// <NavLink className="main__nav-link" to="/" activeClassName="is-active" exact={true}>Home</NavLink>
// <NavLink className="main__nav-link" to={{
// 	pathname: "/films",
// 	state: {
// 		films,
// 		images
// 	}
// }} activeClassName="is-active" exact={true}>Film</NavLink>
// <NavLink className="main__nav-link" to="/characters" activeClassName="is-active">Characters</NavLink>